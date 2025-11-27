import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import './LetterForm.css'

function LetterForm({ user, credential }) {
  // Get current date formatted
  const getCurrentDate = () => {
    const now = new Date()
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear()
    return `${day} / ${month} / ${year}`
  }

  const letterTemplate = `REGISTRATION UNDER PROTEST

To,

 The Chief Executive Officer

 [State Waqf Board]

 

Date: [CURRENT_DATE]

Subject: Submission of Waqf Registration / Detail‑Filing UNDER PROTEST and WITHOUT WAIVER OF RIGHTS (Issues Persist Even After Supreme Court Interim Order)

Respected Sir,

I, [Name of Mutawalli], son/daughter of [Father's Name], residing at [Full Address], am the Mutawalli of the waqf known as "", 

• Name/Description of Waqf: [Waqf Name]

• Existing Waqf Registration No. (if any): [Registration No.]

• Your Mobile Number: [Mobile Number]

In compliance with the Unified Waqf Management, Empowerment, Efficiency and Development Act, 1995 as amended by the Waqf (Amendment) Act, 2025 ("Amended Act") and the introduction of the UMEED central portal, I am submitting / renewing the registration and uploading the details of the above waqf only because non‑compliance has been made punishable with fine and imprisonment, and not as a matter of free consent.

Accordingly, this filing is expressly made UNDER PROTEST, on the following grounds (without prejudice to fuller grounds in any present or future court proceedings):

Submission under statutory duress

1.1 The Amended Act and UMEED portal together create a regime where:

Section 3B requires uploading full waqf details on the central portal and database.

Section 36(1A) insists on a written waqf deed for creation of waqf.

Section 36(10) threatens a bar on suits and proceedings to enforce waqf rights if registration is not completed within six months.

Sections 61 and 62 introduce or continue criminal liability, including imprisonment and heavy fines, for failures such as not uploading details, not submitting accounts or not complying with Board / Collector directions.

1.2 If I do not comply, I face:

Risk of imprisonment and substantial fines,

Possible de‑registration or loss of waqf status, and

A permanent bar on suits or other proceedings to enforce waqf rights under Section 36(10).

1.3 I therefore state clearly that this submission is involuntary and under statutory duress. It must not be treated as acceptance of the constitutional validity, fairness or reasonableness of the Amended Act or the UMEED portal rules.

No admission regarding title or "Government property"

2.1 The above property is asserted to be valid waqf property under Muslim personal law and under the original Waqf Act, 1995.

2.2 Nothing in this registration or in the data entered on UMEED should be read as:

(a) accepting that the property is, or ever was, "Government land" or "Government property", or

(b) consenting to any change in the revenue records or Waqf Board records adverse to the waqf, including any description, classification, area or boundaries.

2.3 Any answers that I am compelled to give on the portal, especially regarding "Government land", must not be treated as binding admissions in any present or future title, encroachment or revenue dispute.

No waiver of objections to new conditions (5‑year practice, deed requirement, bar on suits, Scheduled‑area bar, Section 104 removal)

3.1 I do not accept any interpretation of the Amended Act or the UMEED rules which:

prevents Muslims (including converts and tribals) from creating waqf on the same footing as other communities,

abolishes oral waqf and waqf‑by‑user and invalidates ancient waqfs merely for lack of a formal "waqf deed",

bars waqf from approaching courts / tribunals solely for want of registration or uploading within a fixed time,

selectively disables tribal Muslims from using the institution of waqf in Scheduled / tribal areas, while allowing other religious and charitable forms to continue on the same land, or

removes the long‑recognised right of non‑Muslims (such as Hindus and others) to create waqf by abolishing Section 104, excluding them from the waqf form purely on the ground of religion.

3.2 All my rights and contentions are fully reserved to challenge these provisions as violative of Articles 14, 15, 19, 21, 25, 26, 29, 30 and 300A of the Constitution of India, as well as contrary to Muslim personal law.

Subject to pending Supreme Court proceedings and interim order

4.1 The constitutional validity of several provisions of the Waqf (Amendment) Act, 2025 – including but not limited to Sections 3(r), 3C, 3D, 3E, 36(1A), 36(7A), 36(10), 61, 62 and 104 – is sub judice before the Hon'ble Supreme Court of India in In Re: The Waqf Amendment Act, 2025 and connected writ petitions.

4.2 By its interim judgment dated 15.09.2025, the Hon'ble Supreme Court:

Has not finally upheld the constitutional validity of these provisions; it has only declined to stay some of them at the interim stage.

Has stayed key parts of Section 3C, particularly automatic changes to revenue and Board records on the report of an executive officer.

Has capped the number of non‑Muslim members on the Central Waqf Council and State Waqf Boards, recognising the serious concern about dilution of Muslim control.

4.3 This registration is therefore submitted strictly subject to any interim or final orders passed by the Hon'ble Supreme Court, any jurisdictional High Court and any Waqf Tribunal / civil court. It shall not prejudice the waqf's rights if the impugned provisions are struck down, read down or modified.

Privacy, data protection and profiling concerns

5.1 The UMEED portal requires me to disclose my religion, sect, full personal profile and multiple identity / address proofs, and to upload geo‑tagged photographs and detailed land‑revenue records, without any clear statutory safeguards for privacy, data security, retention, deletion, breach‑notification or controlled inter‑agency access.

5.2 I object to this as a violation of my right to privacy and informational self‑determination, and as a form of centralised digital profiling of only Muslim waqf properties and leadership, when no comparable national system exists for temples, churches, secular charities, public trusts, societies or other associations.

5.3 I reserve my right to challenge the UMEED data‑collection and profiling architecture as violative of Articles 14, 15 and 21 and inconsistent with basic data‑protection principles.

Unpaid Mutawalli and disproportionate burdens

6.1 I state that I serve as Mutawalli purely as a religious and charitable duty, without salary or honorarium from the Waqf Board or the Government. In many cases, including graveyard waqf, the waqf has little or no income.

6.2 I object that the same level of documentation, auditing, professional accounting and portal compliance is being demanded from zero‑income waqf as from large, income‑earning waqf, and that non‑compliance is criminalised. This is disproportionate, arbitrary and unjust, and in practice penalises volunteers for doing unpaid community service.

6.3 I reserve my right to challenge these burdens as violations of Articles 14, 19(1)(g), 21, 25 and 26 of the Constitution.

Request to record protest and protect status quo

In light of the above, I respectfully request that the Board:

(a) Register / record the waqf on its portal and in its books, clearly noting this letter as a formal protest and non‑waiver of rights.

(b) Issue a written acknowledgment / receipt expressly referring to this protest letter.

(c) Not treat this filing as consent to any future action that may de‑notify, re‑classify, alter area / boundaries, or otherwise diminish the waqf's rights without due process before a competent court or tribunal.

(d) Maintain status quo regarding revenue records, Board records and field status of the waqf property, in line with the spirit of the Hon'ble Supreme Court's interim directions, until the constitutional challenges are finally decided.

No waiver of rights

This letter and filing are made without prejudice to all my legal, constitutional and personal‑law rights, and to the rights of the beneficiaries, worshippers and the wider community, including the right to initiate, join and support present or future litigation challenging the Amended Act, the UMEED portal and any adverse action taken under them.

Yours faithfully,

 Name: [SIGNATURE_NAME]

Phone: [USER_PHONE] / Email: [USER_EMAIL]`

  const [fieldValues, setFieldValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize field values with saved data from localStorage
  useEffect(() => {
    const fields = extractFields(letterTemplate)
    const initialValues = {}
    
    // Load saved values from localStorage
    const savedData = localStorage.getItem('waqfLetterData')
    const savedValues = savedData ? JSON.parse(savedData) : {}
    
    fields.forEach(field => {
      // Auto-fill Mutawalli name from saved data or previous entry
      if (field.placeholder === 'Name of Mutawalli' && savedValues.mutawalliName) {
        initialValues[field.id] = savedValues.mutawalliName
      } else {
        initialValues[field.id] = savedValues[field.id] || ''
      }
    })
    
    setFieldValues(initialValues)
  }, [])
  
  // Save field values to localStorage when they change
  useEffect(() => {
    const mutawalliNameField = extractFields(letterTemplate).find(f => f.placeholder === 'Name of Mutawalli')
    const mutawalliName = mutawalliNameField ? (fieldValues[mutawalliNameField.id] || '') : ''
    
    const dataToSave = {
      ...fieldValues,
      mutawalliName: mutawalliName,
    }
    
    localStorage.setItem('waqfLetterData', JSON.stringify(dataToSave))
  }, [fieldValues])

  const extractFields = (template) => {
    const fields = []
    const bracketPattern = /\[([^\]]+)\]/g
    let match
    let id = 0

    while ((match = bracketPattern.exec(template)) !== null) {
      // Skip CURRENT_DATE as it's auto-filled
      if (match[1] === 'CURRENT_DATE') {
        continue
      }
      // Skip SIGNATURE_NAME as it's auto-filled from Mutawalli name
      if (match[1] === 'SIGNATURE_NAME') {
        continue
      }
      // Skip USER_EMAIL as it's auto-filled from logged-in user
      if (match[1] === 'USER_EMAIL') {
        continue
      }
      // Skip USER_PHONE as it's auto-filled from Mobile Number field
      if (match[1] === 'USER_PHONE') {
        continue
      }
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
    
    // Replace CURRENT_DATE first
    finalContent = finalContent.replace('[CURRENT_DATE]', getCurrentDate())
    
    // Get Mutawalli name for signature
    const mutawalliNameField = extractFields(letterTemplate).find(f => f.placeholder === 'Name of Mutawalli')
    const mutawalliName = mutawalliNameField ? (fieldValues[mutawalliNameField.id] || '') : ''
    
    // Replace SIGNATURE_NAME with Mutawalli name
    finalContent = finalContent.replace('[SIGNATURE_NAME]', mutawalliName || '[Name of Mutawalli]')
    
    // Get Mobile Number for phone field
    const mobileNumberField = extractFields(letterTemplate).find(f => f.placeholder === 'Mobile Number')
    const mobileNumber = mobileNumberField ? (fieldValues[mobileNumberField.id] || '') : ''
    
    // Replace USER_PHONE with Mobile Number
    finalContent = finalContent.replace('[USER_PHONE]', mobileNumber || '[Phone]')
    
    // Replace USER_EMAIL with logged-in user's email
    finalContent = finalContent.replace('[USER_EMAIL]', user?.email || '[Email]')
    
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

    // Get Mutawalli name for signature
    const mutawalliNameField = fields.find(f => f.placeholder === 'Name of Mutawalli')
    const mutawalliName = mutawalliNameField ? (fieldValues[mutawalliNameField.id] || '') : ''
    
    // Get Mobile Number for phone field
    const mobileNumberField = fields.find(f => f.placeholder === 'Mobile Number')
    const mobileNumber = mobileNumberField ? (fieldValues[mobileNumberField.id] || '') : ''

    fields.forEach((field, idx) => {
      // Add text before this field (including CURRENT_DATE, SIGNATURE_NAME, USER_PHONE, and USER_EMAIL replacement)
      if (field.index > lastIndex) {
        let textBefore = letterTemplate.substring(lastIndex, field.index)
        // Replace CURRENT_DATE in text with actual date
        textBefore = textBefore.replace('[CURRENT_DATE]', getCurrentDate())
        // Replace SIGNATURE_NAME with Mutawalli name
        textBefore = textBefore.replace('[SIGNATURE_NAME]', mutawalliName || '[Name of Mutawalli]')
        // Replace USER_PHONE with Mobile Number
        textBefore = textBefore.replace('[USER_PHONE]', mobileNumber || '[Phone]')
        // Replace USER_EMAIL with logged-in user's email
        textBefore = textBefore.replace('[USER_EMAIL]', user?.email || '[Email]')
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
          autoCapitalize="words"
          autoComplete="off"
          spellCheck="false"
        />
      )

      lastIndex = field.index + field.fullMatch.length
    })

    // Add remaining text (including CURRENT_DATE, SIGNATURE_NAME, USER_PHONE, and USER_EMAIL replacement if at the end)
    if (lastIndex < letterTemplate.length) {
      let remainingText = letterTemplate.substring(lastIndex)
      remainingText = remainingText.replace('[CURRENT_DATE]', getCurrentDate())
      remainingText = remainingText.replace('[SIGNATURE_NAME]', mutawalliName || '[Name of Mutawalli]')
      remainingText = remainingText.replace('[USER_PHONE]', mobileNumber || '[Phone]')
      remainingText = remainingText.replace('[USER_EMAIL]', user?.email || '[Email]')
      parts.push(
        <span key="text_end" className="letter-text">
          {remainingText}
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

      // Generate PDF blob
      const pdfBlob = generatePDFBlob()
      
      // Convert PDF blob to base64
      const pdfBase64 = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result.split(',')[1] // Remove data:application/pdf;base64, prefix
          resolve(base64String)
        }
        reader.readAsDataURL(pdfBlob)
      })

      // Generate filename
      const mutawalliNameForFile = mutawalliName.replace(/\s+/g, '_')
      const dateStr = new Date().toISOString().split('T')[0]
      const filename = `Waqf_Protest_Letter_${mutawalliNameForFile}_${dateStr}.pdf`

      // Auto-download PDF
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Prepare email parameters
      const emailData = {
        to_email: process.env.REACT_APP_TO_EMAIL,
        cc_email: process.env.REACT_APP_CC_EMAIL,
        from_name: mutawalliName,
        from_email: user.email,
        subject: 'Submission of Registration Documents UNDER SOLEMN PROTEST',
        message: letterContent,
        reply_to: user.email,
        access_token: credential, // User's OAuth access token for Gmail API
        pdf_attachment: pdfBase64, // PDF as base64
        pdf_filename: filename, // PDF filename
      }

      // Send email using Gmail API route (with user's OAuth token)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        let errorMessage = errorData.error || 'Failed to send email'
        
        // Provide helpful error messages for common SMTP errors
        if (errorMessage.includes('Invalid login') || errorMessage.includes('BadCredentials') || errorMessage.includes('EAUTH')) {
          errorMessage = 'Gmail authentication failed. Please check:\n1. Gmail App Password is correct (16 characters, no spaces)\n2. Email address matches the one used to create App Password\n3. 2-Step Verification is enabled\n4. App Password hasn\'t been revoked'
        } else if (errorMessage.includes('SMTP')) {
          errorMessage = 'SMTP configuration error. Please verify SMTP settings in Vercel environment variables.'
        }
        
        throw new Error(errorMessage)
      }

      setSubmitStatus({ type: 'success', message: 'Letter sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      const errorMessage = error.message || 'Failed to send letter. Please try again.'
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const generatePDFBlob = () => {
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
    
    // Generate PDF as blob
    const pdfBlob = doc.output('blob')
    return pdfBlob
  }

  const handleDownloadPDF = () => {
    const letterContent = generateFinalLetter()
    const pdfBlob = generatePDFBlob()
    
    // Generate filename
    const mutawalliName = extractMutawalliName(letterContent).replace(/\s+/g, '_')
    const dateStr = new Date().toISOString().split('T')[0]
    const filename = `Waqf_Protest_Letter_${mutawalliName}_${dateStr}.pdf`
    
    // Create download link and trigger download
    const url = URL.createObjectURL(pdfBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
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
