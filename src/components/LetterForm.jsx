import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import jsPDF from 'jspdf'
import './LetterForm.css'

function LetterForm({ user, credential }) {
  const letterTemplate = `To,
The Chief Executive Officer
[CEO Name]
[State Waqf Board]
[Address]

Subject: Submission of Registration Documents UNDER SOLEMN PROTEST – Complete Reservation of All Legal, Constitutional, Islamic and Property Rights (No Waiver / No Acquiescence)

Dated: [Day] / [Month] / 2025

Respected Sir,

1. PARTIES AND PROPERTY

I, [Name of Mutawalli], son/daughter of [Father's Name], residing at [Full Address], am the Mutawalli/trustee of the waqf known as:

• Name/Description of Waqf: [Waqf Name]
• Existing Waqf Registration No. (if any): [Registration No.]
• Property Description (survey no./address): [Property Description]

Pursuant to the Waqf (Amendment) Act, 2025 and the introduction of the "UMEED" portal / online registration system, I am now being required to upload complete details of this waqf and to re-register / confirm registration within the statutory time-limit.

Through this letter, I submit the required documents only under protest, under legal duress, and without waiving any rights.

1. INVOLUNTARY & COERCED COMPLIANCE – STRUCTURE OF DURESS

(a) Criminal consequences for non-compliance

Under the amended Act:

• Section 3B requires uploading full waqf details on the central portal and database.
• Section 36(1A) requires that no waqf shall be created without a written waqf deed, and Section 36(10) bars all suits and legal proceedings for enforcement of waqf rights if the waqf is not registered within six months, subject only to a narrow proviso.
• Section 61(1A) introduces criminal liability, including imprisonment and substantial fines, for failure to upload details under Section 3B, to comply with Board/Collector directions, or to perform any act required by the Act.

Yours faithfully,

[Name of Mutawalli]
Mutawalli/Trustee`

  const [fieldValues, setFieldValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize field values
  useEffect(() => {
    const fields = extractFields(letterTemplate)
    const initialValues = {}
    fields.forEach(field => {
      initialValues[field.id] = ''
    })
    setFieldValues(initialValues)
  }, [])

  const extractFields = (template) => {
    const fields = []
    const bracketPattern = /\[([^\]]+)\]/g
    let match
    let id = 0

    while ((match = bracketPattern.exec(template)) !== null) {
      fields.push({
        id: `field_${id++}`,
        placeholder: match[1],
        fullMatch: match[0],
        index: match.index,
      })
    }

    return fields
  }

  const handleFieldChange = (fieldId, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldId]: value,
    }))
  }

  const generateFinalLetter = () => {
    let finalContent = letterTemplate
    const fields = extractFields(letterTemplate)
    
    // Replace fields in reverse order to maintain indices
    fields.reverse().forEach(field => {
      const value = fieldValues[field.id] || field.fullMatch
      finalContent = finalContent.replace(field.fullMatch, value)
    })

    return finalContent
  }

  const renderLetterWithFields = () => {
    const fields = extractFields(letterTemplate)
    const parts = []
    let lastIndex = 0

    fields.forEach((field, idx) => {
      // Add text before this field
      if (field.index > lastIndex) {
        const textBefore = letterTemplate.substring(lastIndex, field.index)
        parts.push(
          <span key={`text_${idx}`} className="letter-text">
            {textBefore}
          </span>
        )
      }

      // Add input field
      const isShortField = field.placeholder.includes('Day') || field.placeholder.includes('Month')
      parts.push(
        <input
          key={field.id}
          type="text"
          className={`inline-field ${isShortField ? 'short-field' : ''}`}
          placeholder={field.placeholder}
          value={fieldValues[field.id] || ''}
          onChange={(e) => handleFieldChange(field.id, e.target.value)}
          maxLength={isShortField ? 2 : undefined}
        />
      )

      lastIndex = field.index + field.fullMatch.length
    })

    // Add remaining text
    if (lastIndex < letterTemplate.length) {
      parts.push(
        <span key="text_end" className="letter-text">
          {letterTemplate.substring(lastIndex)}
        </span>
      )
    }

    return parts
  }

  const extractMutawalliName = (content) => {
    const match = content.match(/I,\s*([^,]+),?\s*son\/daughter/)
    if (match && match[1] && !match[1].includes('[')) {
      return match[1].trim()
    }
    const signatureMatch = content.match(/Yours faithfully,\s*\n\s*([^\n]+)/)
    if (signatureMatch && signatureMatch[1] && !signatureMatch[1].includes('[')) {
      return signatureMatch[1].trim()
    }
    return user?.name || 'Mutawalli'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const letterContent = generateFinalLetter()
      const mutawalliName = extractMutawalliName(letterContent)

      // Validate required fields
      const fields = extractFields(letterTemplate)
      const missingFields = fields.filter(field => {
        const value = fieldValues[field.id]
        return !value || value.trim() === ''
      })

      if (missingFields.length > 0) {
        setSubmitStatus({
          type: 'error',
          message: `Please fill in all fields. ${missingFields.length} field(s) remaining.`,
        })
        setIsSubmitting(false)
        return
      }

      // Prepare email parameters
      const emailData = {
        to_email: process.env.REACT_APP_TO_EMAIL,
        cc_email: process.env.REACT_APP_CC_EMAIL,
        from_name: mutawalliName,
        from_email: user.email,
        subject: 'Submission of Registration Documents UNDER SOLEMN PROTEST',
        message: letterContent,
        reply_to: user.email,
      }

      // Try Vercel API route first (if available), otherwise use EmailJS
      if (process.env.REACT_APP_USE_API_ROUTE === 'true') {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to send email')
        }
      } else {
        // Send email using EmailJS
        const templateParams = {
          to_email: emailData.to_email,
          cc_email: emailData.cc_email,
          from_name: emailData.from_name,
          from_email: emailData.from_email,
          subject: emailData.subject,
          message: emailData.message,
          reply_to: emailData.reply_to,
        }

        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
      }

      setSubmitStatus({ type: 'success', message: 'Letter sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send letter. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownloadPDF = () => {
    const letterContent = generateFinalLetter()
    
    // Create new PDF document
    const doc = new jsPDF()
    
    // Set margins
    const margin = 20
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const maxWidth = pageWidth - (margin * 2)
    
    // Split text into lines and handle long lines
    const lines = letterContent.split('\n')
    let yPosition = margin
    const lineHeight = 7
    const fontSize = 11
    
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', 'normal')
    
    lines.forEach((line) => {
      // Handle empty lines
      if (line.trim() === '') {
        yPosition += lineHeight
        return
      }
      
      // Handle long lines - split them
      const splitLines = doc.splitTextToSize(line, maxWidth)
      
      // Check if we need a new page
      if (yPosition + (splitLines.length * lineHeight) > pageHeight - margin) {
        doc.addPage()
        yPosition = margin
      }
      
      // Add text
      splitLines.forEach((textLine, index) => {
        if (yPosition > pageHeight - margin) {
          doc.addPage()
          yPosition = margin
        }
        doc.text(textLine, margin, yPosition)
        yPosition += lineHeight
      })
    })
    
    // Generate filename
    const mutawalliName = extractMutawalliName(letterContent).replace(/\s+/g, '_')
    const dateStr = new Date().toISOString().split('T')[0]
    const filename = `Waqf_Protest_Letter_${mutawalliName}_${dateStr}.pdf`
    
    // Save PDF
    doc.save(filename)
  }

  const fields = extractFields(letterTemplate)
  const filledFields = fields.filter(field => fieldValues[field.id] && fieldValues[field.id].trim() !== '').length
  const totalFields = fields.length
  const wordCount = generateFinalLetter().split(/\s+/).filter(word => word.length > 0).length

  return (
    <div className="letter-form-container">
      <div className="header-section">
        <div className="title-group">
          <h2>Protest Letter Editor</h2>
          <p className="subtitle">Fill in the fields directly in the letter below</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">ℹ️</div>
        <div className="info-content">
          <h3>How to Use</h3>
          <ul>
            <li>Click on any <strong className="highlight">input field</strong> in the letter to fill in your information</li>
            <li>All fields must be completed before sending or downloading</li>
            <li>Fields are highlighted when you focus on them</li>
            <li>You can download as PDF or send directly via email</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="letter-form">
        <div className="editor-header">
          <label htmlFor="letter-editor" className="editor-label">
            Letter Content
          </label>
          <div className="editor-stats">
            <span className="stat-item">
              <span className="stat-label">Words:</span>
              <span className="stat-value">{wordCount}</span>
            </span>
            <span className="stat-item">
              <span className="stat-label">Fields:</span>
              <span className="stat-value">{filledFields}/{totalFields}</span>
            </span>
            {filledFields < totalFields && (
              <span className="stat-item warning">
                <span className="stat-label">⚠️</span>
                <span className="stat-value">Complete all fields</span>
              </span>
            )}
          </div>
        </div>

        <div className="editable-letter-section">
          <div className="letter-content-wrapper">
            {renderLetterWithFields()}
          </div>
          <div className="editor-footer">
            <span className="footer-hint">💡 Tip: Click on any highlighted field to enter your information</span>
          </div>
        </div>

        {submitStatus && (
          <div
            className={`submit-status ${
              submitStatus.type === 'success' ? 'success' : 'error'
            }`}
          >
            <span className="status-icon">
              {submitStatus.type === 'success' ? '✓' : '✗'}
            </span>
            <span className="status-message">{submitStatus.message}</span>
          </div>
        )}

        <div className="action-section">
          <div className="button-group">
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="download-btn"
              disabled={filledFields < totalFields}
            >
              <span className="btn-icon">📄</span>
              <span className="btn-text">Download PDF</span>
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting || filledFields < totalFields}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-icon">⏳</span>
                  <span className="btn-text">Sending...</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">✉️</span>
                  <span className="btn-text">Send via Email</span>
                </>
              )}
            </button>
          </div>
          <p className="action-hint">
            Your letter will be sent to: <strong>{process.env.REACT_APP_TO_EMAIL || 'Configured recipient'}</strong>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LetterForm
