import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import './LetterForm.css'

  const generatePDFBlob = async () => {
    let letterContent = generateFinalLetter()

    // Replace checkbox symbols with simpler text for PDF
    letterContent = letterContent.replace(/\[✓\]/g, '[X]')
    letterContent = letterContent.replace(/☑/g, '[X]')
    letterContent = letterContent.replace(/☐/g, '[ ]')

    // Create html content preserving line breaks and basic structure
    const escapeHtml = (str) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

    const escaped = escapeHtml(letterContent)

    // Use <pre> with pre-wrap to preserve spacing and line breaks exactly as the form
    const html = `
      <div style="font-family: Helvetica, Arial, sans-serif; color: #000;">
        <pre style="white-space: pre-wrap; font-size: 11pt; line-height: 1.45; margin: 0;">
${escaped}
        </pre>
      </div>
    `

    // Create temporary container element
    const container = document.createElement('div')
    container.style.width = '100%'
    container.style.boxSizing = 'border-box'
    container.innerHTML = html

    // Create new PDF document
    const doc = new jsPDF()

    // Margins in jsPDF units
    const topMargin = 15
    const leftMargin = 15

    // Render HTML into the PDF using jsPDF's html method for accurate layout
    const blob = await new Promise((resolve, reject) => {
      try {
        doc.html(container, {
          x: leftMargin,
          y: topMargin,
          html2canvas: { scale: 1, useCORS: true },
          callback: (docInstance) => {
            try {
              const out = docInstance.output('blob')
              resolve(out)
            } catch (err) {
              reject(err)
            }
          },
        })
      } catch (err) {
        reject(err)
      }
    })

    return blob
  }
[OBJECTION_11_CHECKBOX] I object that non‑compliance with UMEED procedures has been criminalised with fines and imprisonment (for example under Sections 3B, 36, 61 and 62), which places Mutawallis under statutory duress and converts technical or digital‑access difficulties into potential criminal offences.

[OBJECTION_12_CHECKBOX] I object that, although I serve as Mutawalli purely as a religious and charitable duty and not as an employee of the Waqf Board or the Government, the amended law and the UMEED portal treat me as if I am a paid government functionary and impose heavy administrative and legal obligations on me without any remuneration or support.

[OBJECTION_13_CHECKBOX] I object that I am being threatened with fines and imprisonment for non‑completion of complex online and paperwork formalities, even though I am an unpaid Mutawalli and my waqf (especially a graveyard) generates little or no income, which makes such criminal liability arbitrary and unjust.

[OBJECTION_14_CHECKBOX] I object that the same level of documentation, audit and portal compliance is being demanded from a zero‑income graveyard waqf as from large commercial waqf estates, which is disproportionate and ignores the financial and practical realities of small, purely religious waqf.

[OBJECTION_15_CHECKBOX] I object that I am being effectively penalised for looking after a graveyard and performing voluntary charitable service for my community, instead of being supported or facilitated in this work, which discourages people from serving as Mutawallis and undermines our religious and community institutions.

[OBJECTION_16_CHECKBOX] I object to the inclusion and potential dominance of non‑Muslim members in the Central Waqf Council and State Waqf Boards, which undermines the Muslim community's right to manage its own religious endowments and dilutes the Islamic character of waqf administration.

[OBJECTION_17_CHECKBOX] I object to the rule that no waqf can be created without a written deed, which effectively abolishes oral waqf and waqf‑by‑user recognised in Islamic law and under the earlier waqf framework, and unjustly harms ancient and customary endowments.

[OBJECTION_18_CHECKBOX] I object to the new "five‑year practising Muslim" condition for creating waqf (waqif), which unfairly discriminates against new Muslims, converts and tribals and treats Muslim endowments differently from other religious and charitable trusts.

[OBJECTION_19_CHECKBOX] I object to any provision that bars suits or legal proceedings for enforcement of waqf rights solely because registration or uploading under UMEED was not completed within a fixed time, as this unjustly closes the doors of courts and tribunals to waqf and its beneficiaries.

[OBJECTION_20_CHECKBOX] I state that I am submitting this registration only under protest and under statutory duress, and that nothing in this filing should be treated as waiver, consent or acceptance of the Waqf (Amendment) Act, 2025, the UMEED portal rules, or any provision that violates my constitutional, statutory or personal‑law rights, or the rights of any other community.

Yours faithfully,

 Name: [SIGNATURE_NAME]

Phone: [USER_PHONE] / Email: [USER_EMAIL]

Enclosures:

Waqf registration / detail forms

Title / revenue documents (copies)

Identity and Mutawalli appointment proof`

  const [fieldValues, setFieldValues] = useState({})
  const [senderEmail, setSenderEmail] = useState('') // Email input for public form
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [iCheckboxChecked, setICheckboxChecked] = useState(true) // Default checked
  const [showPreview, setShowPreview] = useState(false) // Preview modal state
  const [copySuccess, setCopySuccess] = useState(false) // Copy to clipboard success state
  const [copyBodySuccess, setCopyBodySuccess] = useState(false) // Copy body button success state
  // Objection checkboxes - all default to true
  const [objectionCheckboxes, setObjectionCheckboxes] = useState({
    objection1: true,
    objection2: true,
    objection3: true,
    objection4: true,
    objection5: true,
    objection6: true,
    objection7: true,
    objection8: true,
    objection9: true,
    objection10: true,
    objection11: true,
    objection12: true,
    objection13: true,
    objection14: true,
    objection15: true,
    objection16: true,
    objection17: true,
    objection18: true,
    objection19: true,
    objection20: true,
  })
  const [attachments, setAttachments] = useState({
    registrationForms: null,
    titleDocuments: null,
    identityProof: null,
  })

  // Initialize field values with saved data from localStorage
  useEffect(() => {
    const fields = extractFields(letterTemplate)
    const initialValues = {}
    
    // Load saved values from localStorage
    const savedData = localStorage.getItem('waqfLetterDataPublic')
    const savedValues = savedData ? JSON.parse(savedData) : {}
    
    // Load sender email
    if (savedValues.senderEmail) {
      setSenderEmail(savedValues.senderEmail)
    }
    
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
      senderEmail: senderEmail,
    }
    
    localStorage.setItem('waqfLetterDataPublic', JSON.stringify(dataToSave))
  }, [fieldValues, senderEmail])

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
      // Skip USER_EMAIL as it's from sender email input
      if (match[1] === 'USER_EMAIL') {
        continue
      }
      // Skip USER_PHONE as it's auto-filled from Mobile Number field
      if (match[1] === 'USER_PHONE') {
        continue
      }
      // Skip I_CHECKBOX as it's handled separately
      if (match[1] === 'I_CHECKBOX') {
        continue
      }
      // Skip OBJECTION_X_CHECKBOX as they're handled separately
      if (match[1].startsWith('OBJECTION_') && match[1].endsWith('_CHECKBOX')) {
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
    
    // Replace I_CHECKBOX with checkbox symbol
    // Use text-based checkbox for better PDF compatibility
    const checkboxSymbol = iCheckboxChecked ? '[✓]' : '[ ]'
    finalContent = finalContent.replace('[I_CHECKBOX]', checkboxSymbol)
    
    // Handle objection checkboxes - only include checked ones
    const objectionPlaceholders = [
      'OBJECTION_1_CHECKBOX', 'OBJECTION_2_CHECKBOX', 'OBJECTION_3_CHECKBOX', 'OBJECTION_4_CHECKBOX',
      'OBJECTION_5_CHECKBOX', 'OBJECTION_6_CHECKBOX', 'OBJECTION_7_CHECKBOX', 'OBJECTION_8_CHECKBOX',
      'OBJECTION_9_CHECKBOX', 'OBJECTION_10_CHECKBOX', 'OBJECTION_11_CHECKBOX', 'OBJECTION_12_CHECKBOX',
      'OBJECTION_13_CHECKBOX', 'OBJECTION_14_CHECKBOX', 'OBJECTION_15_CHECKBOX', 'OBJECTION_16_CHECKBOX',
      'OBJECTION_17_CHECKBOX', 'OBJECTION_18_CHECKBOX', 'OBJECTION_19_CHECKBOX', 'OBJECTION_20_CHECKBOX'
    ]
    
    // Process objections in reverse order to maintain indices
    for (let i = objectionPlaceholders.length - 1; i >= 0; i--) {
      const placeholder = `[${objectionPlaceholders[i]}]`
      const objectionKey = `objection${i + 1}`
      const isChecked = objectionCheckboxes[objectionKey]
      
      // Find the paragraph starting with this checkbox placeholder
      const placeholderIndex = finalContent.indexOf(placeholder)
      
      if (placeholderIndex !== -1) {
        // Find the end of this paragraph (start of next objection or "Yours faithfully,")
        const afterPlaceholder = finalContent.substring(placeholderIndex + placeholder.length)
        let paragraphEnd = afterPlaceholder.length
        
        // Check for next objection placeholder
        for (let j = 0; j < objectionPlaceholders.length; j++) {
          const nextPlaceholder = `[${objectionPlaceholders[j]}]`
          const nextIndex = afterPlaceholder.indexOf(nextPlaceholder)
          if (nextIndex !== -1 && nextIndex < paragraphEnd) {
            paragraphEnd = nextIndex
          }
        }
        
        // Check for "Yours faithfully,"
        const faithfullyIndex = afterPlaceholder.indexOf('Yours faithfully,')
        if (faithfullyIndex !== -1 && faithfullyIndex < paragraphEnd) {
          paragraphEnd = faithfullyIndex
        }
        
        if (isChecked) {
          // Replace checkbox placeholder with checked symbol
          finalContent = finalContent.replace(placeholder, '[✓]')
        } else {
          // Remove the entire paragraph including the checkbox placeholder and following newline
          const paragraphText = afterPlaceholder.substring(0, paragraphEnd)
          const fullParagraph = placeholder + paragraphText
          finalContent = finalContent.replace(fullParagraph, '')
        }
      }
    }
    
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
    
    // Replace USER_EMAIL with sender email
    finalContent = finalContent.replace('[USER_EMAIL]', senderEmail || '[Email]')
    
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
    
    // Checkbox symbol
    const checkboxSymbol = iCheckboxChecked ? '☑' : '☐'

    fields.forEach((field, idx) => {
      // Add text before this field (including CURRENT_DATE, SIGNATURE_NAME, USER_PHONE, USER_EMAIL, and I_CHECKBOX replacement)
      if (field.index > lastIndex) {
        let textBefore = letterTemplate.substring(lastIndex, field.index)
        // Replace CURRENT_DATE in text with actual date
        textBefore = textBefore.replace('[CURRENT_DATE]', getCurrentDate())
        // Replace SIGNATURE_NAME with Mutawalli name
        textBefore = textBefore.replace('[SIGNATURE_NAME]', mutawalliName || '[Name of Mutawalli]')
        // Replace USER_PHONE with Mobile Number
        textBefore = textBefore.replace('[USER_PHONE]', mobileNumber || '[Phone]')
        // Replace USER_EMAIL with sender email
        textBefore = textBefore.replace('[USER_EMAIL]', senderEmail || '[Email]')
        
        // Handle I_CHECKBOX replacement with checkbox element
        if (textBefore.includes('[I_CHECKBOX]')) {
          const parts_before = textBefore.split('[I_CHECKBOX]')
          if (parts_before[0]) {
            parts.push(
              <span key={`text_before_checkbox_${idx}`} className="letter-text">
                {parts_before[0]}
              </span>
            )
          }
          parts.push(
            <input
              key="i_checkbox"
              type="checkbox"
              checked={iCheckboxChecked}
              onChange={(e) => setICheckboxChecked(e.target.checked)}
              className="i-checkbox"
            />
          )
          if (parts_before[1]) {
            parts.push(
              <span key={`text_after_checkbox_${idx}`} className="letter-text">
                {parts_before[1]}
              </span>
            )
          }
        } else {
          parts.push(
            <span key={`text_${idx}`} className="letter-text">
              {textBefore}
            </span>
          )
        }
      }

      // Add input field with enhanced UX
      const isShortField = field.placeholder.includes('Day') || field.placeholder.includes('Month')
      const fieldValue = fieldValues[field.id] || ''
      const isEmpty = !fieldValue.trim()
      
      // Determine field type for better UX
      let fieldType = 'text'
      let fieldHint = ''
      
      // Check for specific fields that should not have tooltips
      const noTooltipFields = [
        'Name/Description of Waqf',
        'Waqf Name',
        'Existing Waqf Registration No. (if any)',
        'Registration No.',
        'Your Mobile Number',
        'Mobile Number'
      ]
      const shouldShowTooltip = !noTooltipFields.some(noTooltip => 
        field.placeholder.includes(noTooltip)
      )
      
      if (field.placeholder.toLowerCase().includes('name') && !field.placeholder.toLowerCase().includes('waqf')) {
        fieldType = 'name'
        fieldHint = shouldShowTooltip ? 'Enter full name (e.g., Ahmed Ali Khan)' : ''
      } else if (field.placeholder.toLowerCase().includes('state waqf board')) {
        fieldType = 'text'
        fieldHint = shouldShowTooltip ? 'State of Waqf Board, Example: Bihar' : ''
      } else if ((field.placeholder.toLowerCase().includes('mobile') || field.placeholder.toLowerCase().includes('phone')) && shouldShowTooltip) {
        fieldType = 'phone'
        fieldHint = 'Enter 10-digit mobile number (e.g., 9876543210)'
      } else if (field.placeholder.toLowerCase().includes('email')) {
        fieldType = 'email'
        fieldHint = shouldShowTooltip ? 'Enter email address (e.g., name@example.com)' : ''
      } else if (field.placeholder.toLowerCase().includes('day') || field.placeholder.toLowerCase().includes('month')) {
        fieldType = 'date'
        fieldHint = shouldShowTooltip && isShortField ? (field.placeholder.includes('Day') ? 'Enter day (01-31)' : 'Enter month (01-12)') : ''
      } else if (field.placeholder.toLowerCase().includes('address')) {
        fieldType = 'address'
        fieldHint = shouldShowTooltip ? 'Enter complete address' : ''
      } else if ((field.placeholder.toLowerCase().includes('waqf') || field.placeholder.toLowerCase().includes('property')) && shouldShowTooltip) {
        fieldType = 'property'
        fieldHint = 'Enter property/waqf name'
      }
      
      parts.push(
        <span key={`field-wrapper-${field.id}`} className="inline-field-wrapper" data-field-type={fieldType}>
          <input
            key={field.id}
            type={fieldType === 'email' ? 'email' : fieldType === 'phone' ? 'tel' : 'text'}
            className={`inline-field ${isShortField ? 'short-field' : ''} ${isEmpty ? 'field-empty' : 'field-filled'}`}
            placeholder={field.placeholder}
            value={fieldValue}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            maxLength={isShortField ? 2 : undefined}
            autoCapitalize="words"
            autoComplete="off"
            spellCheck="false"
            data-field-type={fieldType}
            title={shouldShowTooltip ? (fieldHint || field.placeholder) : ''}
            aria-label={field.placeholder}
          />
          {isEmpty && (
            <span className="field-indicator" aria-hidden="true">
              <span className="field-indicator-icon">✎</span>
            </span>
          )}
          {!isEmpty && (
            <span className="field-indicator filled" aria-hidden="true">
              <span className="field-indicator-icon">✓</span>
            </span>
          )}
        </span>
      )

      lastIndex = field.index + field.fullMatch.length
    })

    // Add remaining text (including CURRENT_DATE, SIGNATURE_NAME, USER_PHONE, USER_EMAIL, I_CHECKBOX, and objection checkboxes)
    if (lastIndex < letterTemplate.length) {
      let remainingText = letterTemplate.substring(lastIndex)
      remainingText = remainingText.replace('[CURRENT_DATE]', getCurrentDate())
      remainingText = remainingText.replace('[I_CHECKBOX]', checkboxSymbol)
      remainingText = remainingText.replace('[SIGNATURE_NAME]', mutawalliName || '[Name of Mutawalli]')
      remainingText = remainingText.replace('[USER_PHONE]', mobileNumber || '[Phone]')
      remainingText = remainingText.replace('[USER_EMAIL]', senderEmail || '[Email]')
      
      // Handle objection checkboxes in remaining text
      const objectionPlaceholders = [
        'OBJECTION_1_CHECKBOX', 'OBJECTION_2_CHECKBOX', 'OBJECTION_3_CHECKBOX', 'OBJECTION_4_CHECKBOX',
        'OBJECTION_5_CHECKBOX', 'OBJECTION_6_CHECKBOX', 'OBJECTION_7_CHECKBOX', 'OBJECTION_8_CHECKBOX',
        'OBJECTION_9_CHECKBOX', 'OBJECTION_10_CHECKBOX', 'OBJECTION_11_CHECKBOX', 'OBJECTION_12_CHECKBOX',
        'OBJECTION_13_CHECKBOX', 'OBJECTION_14_CHECKBOX', 'OBJECTION_15_CHECKBOX', 'OBJECTION_16_CHECKBOX',
        'OBJECTION_17_CHECKBOX', 'OBJECTION_18_CHECKBOX', 'OBJECTION_19_CHECKBOX', 'OBJECTION_20_CHECKBOX'
      ]
      
      // Split remaining text by objection placeholders and render accordingly
      let processedText = remainingText
      let currentPos = 0
      
      objectionPlaceholders.forEach((placeholder, index) => {
        const placeholderText = `[${placeholder}]`
        const placeholderIndex = processedText.indexOf(placeholderText, currentPos)
        
        if (placeholderIndex !== -1) {
          // Add text before this placeholder
          if (placeholderIndex > currentPos) {
            const textBefore = processedText.substring(currentPos, placeholderIndex)
            if (textBefore.trim()) {
              parts.push(
                <span key={`text_before_objection_${index + 1}`} className="letter-text">
                  {textBefore}
                </span>
              )
            }
          }
          
          // Find the end of this paragraph
          const afterPlaceholder = processedText.substring(placeholderIndex + placeholderText.length)
          let paragraphEnd = afterPlaceholder.length
          
          // Check for next objection placeholder
          for (let j = 0; j < objectionPlaceholders.length; j++) {
            const nextPlaceholder = `[${objectionPlaceholders[j]}]`
            const nextIndex = afterPlaceholder.indexOf(nextPlaceholder)
            if (nextIndex !== -1 && nextIndex < paragraphEnd) {
              paragraphEnd = nextIndex
            }
          }
          
          // Check for "Yours faithfully,"
          const faithfullyIndex = afterPlaceholder.indexOf('Yours faithfully,')
          if (faithfullyIndex !== -1 && faithfullyIndex < paragraphEnd) {
            paragraphEnd = faithfullyIndex
          }
          
          const paragraphText = afterPlaceholder.substring(0, paragraphEnd)
          const objectionKey = `objection${index + 1}`
          const isChecked = objectionCheckboxes[objectionKey]
          
          // Render checkbox and paragraph
          parts.push(
            <div key={`objection_${index + 1}`} className="objection-paragraph">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setObjectionCheckboxes(prev => ({
                  ...prev,
                  [objectionKey]: e.target.checked
                }))}
                className="objection-checkbox"
              />
              <span className="letter-text">{paragraphText}</span>
            </div>
          )
          
          currentPos = placeholderIndex + placeholderText.length + paragraphText.length
        }
      })
      
      // Add any remaining text after the last placeholder
      if (currentPos < processedText.length) {
        const finalText = processedText.substring(currentPos)
        if (finalText.trim()) {
          parts.push(
            <span key="text_end" className="letter-text">
              {finalText}
            </span>
          )
        }
      } else if (currentPos === 0) {
        // No objections found, render remaining text as-is
        parts.push(
          <span key="text_end" className="letter-text">
            {remainingText}
          </span>
        )
      }
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
    return 'Mutawalli'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate sender email
      if (!senderEmail || !senderEmail.trim()) {
        setSubmitStatus({
          type: 'error',
          message: 'Please enter your email address.',
        })
        setIsSubmitting(false)
        return
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(senderEmail)) {
        setSubmitStatus({
          type: 'error',
          message: 'Please enter a valid email address.',
        })
        setIsSubmitting(false)
        return
      }

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
      const pdfBlob = await generatePDFBlob()
      
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

      // Convert attachments to base64
      const attachmentPromises = []
      const attachmentData = []
      
      if (attachments.registrationForms) {
        attachmentPromises.push(
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => {
              const base64String = reader.result.split(',')[1]
              attachmentData.push({
                filename: attachments.registrationForms.name,
                content: base64String,
                type: attachments.registrationForms.type,
              })
              resolve()
            }
            reader.readAsDataURL(attachments.registrationForms)
          })
        )
      }
      
      if (attachments.titleDocuments) {
        attachmentPromises.push(
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => {
              const base64String = reader.result.split(',')[1]
              attachmentData.push({
                filename: attachments.titleDocuments.name,
                content: base64String,
                type: attachments.titleDocuments.type,
              })
              resolve()
            }
            reader.readAsDataURL(attachments.titleDocuments)
          })
        )
      }
      
      if (attachments.identityProof) {
        attachmentPromises.push(
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => {
              const base64String = reader.result.split(',')[1]
              attachmentData.push({
                filename: attachments.identityProof.name,
                content: base64String,
                type: attachments.identityProof.type,
              })
              resolve()
            }
            reader.readAsDataURL(attachments.identityProof)
          })
        )
      }
      
      // Wait for all attachments to be converted
      await Promise.all(attachmentPromises)

      // Prepare email parameters (without OAuth token - uses SMTP only)
      const emailData = {
        to_email: process.env.REACT_APP_TO_EMAIL,
        cc_email: process.env.REACT_APP_CC_EMAIL,
        from_name: mutawalliName,
        from_email: senderEmail, // Use sender email input
        subject: 'Submission of Registration Documents UNDER SOLEMN PROTEST',
        message: letterContent,
        reply_to: senderEmail,
        // No access_token - will use SMTP only
        pdf_attachment: pdfBase64, // PDF as base64
        pdf_filename: filename, // PDF filename
        attachments: attachmentData, // Additional attachments
      }

      // Send email using SMTP route (no OAuth token)
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
          errorMessage = 'SMTP authentication failed. Please check:\n1. SMTP credentials are correctly configured in Vercel\n2. Gmail App Password is correct (16 characters, no spaces)\n3. 2-Step Verification is enabled'
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

  

  const handleDownloadPDF = async () => {
    try {
      const letterContent = generateFinalLetter()
      const pdfBlob = await generatePDFBlob()
      
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
    } catch (error) {
      console.error('Error generating PDF:', error)
      setSubmitStatus({
        type: 'error',
        message: `Failed to generate PDF: ${error.message}. Please try again.`,
      })
    }
  }

  const handleCopyBody = async () => {
    try {
      const letterContent = generateFinalLetter()
      
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(letterContent)
        setCopyBodySuccess(true)
        setTimeout(() => {
          setCopyBodySuccess(false)
        }, 3000)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = letterContent
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          setCopyBodySuccess(true)
          setTimeout(() => {
            setCopyBodySuccess(false)
          }, 3000)
        } catch (err) {
          console.error('Fallback copy failed:', err)
          setSubmitStatus({
            type: 'error',
            message: 'Failed to copy email body. Please try selecting and copying manually.',
          })
        }
        document.body.removeChild(textArea)
      }
    } catch (error) {
      console.error('Failed to copy body:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to copy email body. Please try selecting and copying manually.',
      })
    }
  }

  const handleCompose = async () => {
    try {
      const letterContent = generateFinalLetter()
      const toEmail = process.env.REACT_APP_TO_EMAIL || ''
      const ccEmail = process.env.REACT_APP_CC_EMAIL || ''
      const subject = 'Submission of Registration Documents UNDER SOLEMN PROTEST'
      
      // First, auto-download the PDF
      const pdfBlob = await generatePDFBlob()
      const mutawalliName = extractMutawalliName(letterContent).replace(/\s+/g, '_')
      const dateStr = new Date().toISOString().split('T')[0]
      const pdfFilename = `Waqf_Protest_Letter_${mutawalliName}_${dateStr}.pdf`
      
      // Download PDF automatically
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = pdfFilename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
      // Copy letter content to clipboard (without attachment notes)
      const emailBody = letterContent
      
      // Copy full email body to clipboard
      try {
        await navigator.clipboard.writeText(emailBody)
      } catch (clipError) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = emailBody
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
        } catch (err) {
          console.error('Fallback copy failed:', err)
          setSubmitStatus({
            type: 'error',
            message: 'Failed to copy email body. Please copy it manually from the Preview.',
          })
          return
        }
        document.body.removeChild(textArea)
      }
      
      // Create instruction text for email body
      const instructionText = `[INSTRUCTION: Please remove this instruction text and paste the copied letter content here. The letter content has been automatically copied to your clipboard. Press Ctrl+V (Windows/Linux) or Cmd+V (Mac) to paste it.]`
      
      // Encode components for mailto link
      const encodeMailtoParam = (str) => encodeURIComponent(str)
      
      // Check if sender email is Gmail
      const isGmailUser = senderEmail?.includes('@gmail.com') || senderEmail?.includes('@googlemail.com')
      
      // Build email URL with To, CC, Subject, and instruction body
      // Body contains instructions for user to remove and paste copied content
      
      if (isGmailUser) {
        // Gmail compose URL format - To, CC, Subject, and instruction body
        const gmailParams = new URLSearchParams()
        if (toEmail && toEmail.trim()) {
          gmailParams.append('to', toEmail.trim())
        }
        if (ccEmail && ccEmail.trim()) {
          gmailParams.append('cc', ccEmail.trim())
        }
        gmailParams.append('su', subject)
        gmailParams.append('body', instructionText)
        
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&${gmailParams.toString()}`
        
        // Open Gmail compose
        window.open(gmailUrl, '_blank')
      } else {
        // Build mailto link with only To, CC, Subject (no body)
        let mailtoLink = 'mailto:'
        
        if (toEmail && toEmail.trim()) {
          mailtoLink += encodeMailtoParam(toEmail.trim())
        } else {
          mailtoLink += ''
        }
        
        const params = []
        if (ccEmail && ccEmail.trim()) {
          params.push(`cc=${encodeMailtoParam(ccEmail.trim())}`)
        }
        params.push(`subject=${encodeMailtoParam(subject)}`)
        params.push(`body=${encodeMailtoParam(instructionText)}`)
        
        if (params.length > 0) {
          mailtoLink += '?' + params.join('&')
        }
        
        // Detect mobile device for better UX
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        
        // Open email composer
        if (isMobile) {
          const mailtoWindow = window.open(mailtoLink, '_blank')
          if (!mailtoWindow || mailtoWindow.closed) {
            window.location.href = mailtoLink
          }
        } else {
          window.location.href = mailtoLink
        }
      }
      
      // Show success message
      setCopySuccess(true)
      setTimeout(() => {
        setCopySuccess(false)
      }, 6000) // Longer timeout to give user time to paste
    } catch (error) {
      console.error('Failed to open email composer:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to open email composer. Please check your email client settings or try copying the content manually.',
      })
    }
  }

  const fields = extractFields(letterTemplate)
  const filledFields = fields.filter(field => fieldValues[field.id] && fieldValues[field.id].trim() !== '').length
  const totalFields = fields.length
  const wordCount = generateFinalLetter().split(/\s+/).filter(word => word.length > 0).length

  return (
    <div className="letter-form-container">
      <div className="header-section">
        <div className="title-group">
          <h2>Protest Letter Editor (No Login Required)</h2>
          <p className="subtitle">Fill in the fields directly in the letter below</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">ℹ️</div>
        <div className="info-content">
          <h3>How to Use</h3>
          <ul>
            <li>Click on any <strong className="highlight">input field</strong> in the letter to fill in your information</li>
            <li>All fields must be completed before downloading or composing</li>
            <li>Enter your email address below - this will be used in the Compose email</li>
            <li>Fields are highlighted when you focus on them</li>
            <li>You can download as PDF or use Compose to open your email client</li>
          </ul>
        </div>
      </div>

      <form className="letter-form">
        {/* Sender Email Input */}
        <div className="sender-email-section">
          <label htmlFor="sender-email" className="sender-email-label">
            Your Email Address <span className="required">*</span>
          </label>
          <input
            id="sender-email"
            type="email"
            className="sender-email-input"
            placeholder="your.email@example.com"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
          <p className="sender-email-hint">
            This email will be used as the sender email and reply-to address
          </p>
        </div>

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
            <span className="footer-hint">Tip: Click on any field to enter your information. Empty fields show a pencil icon (✎), filled fields show a checkmark (✓). Hover over fields for helpful hints.</span>
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

        {/* Attachments section hidden in public form - users can attach files manually in their email client */}
        
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
              type="button"
              onClick={() => setShowPreview(true)}
              className="preview-btn"
              disabled={filledFields < totalFields}
            >
              <span className="btn-icon">👁️</span>
              <span className="btn-text">Preview</span>
            </button>
            <button
              type="button"
              onClick={handleCopyBody}
              className="copy-body-btn"
              disabled={filledFields < totalFields}
              title="Copy email body to clipboard"
            >
              {copyBodySuccess ? (
                <>
                  <span className="btn-icon">✓</span>
                  <span className="btn-text">Copied!</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">📋</span>
                  <span className="btn-text">Copy Body</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleCompose}
              className="compose-btn"
              disabled={filledFields < totalFields}
            >
              {copySuccess ? (
                <>
                  <span className="btn-icon">✓</span>
                  <span className="btn-text">Copied!</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">✉️</span>
                  <span className="btn-text">Compose</span>
                </>
              )}
            </button>
          </div>
          {(copySuccess || copyBodySuccess) && (
            <div className="copy-success-message">
              <span className="copy-success-icon">✓</span>
              <span className="copy-success-text">
                {copyBodySuccess ? (
                  <>
                    <strong>Email body copied to clipboard!</strong>
                  </>
                ) : (
                  <>
                    <strong>Email body copied to clipboard!</strong> PDF downloaded and email composer opened with To, CC, and Subject pre-filled.
                  </>
                )}
              </span>
            </div>
          )}
          <p className="action-hint">
            Use the <strong>Compose</strong> button to open your email client with pre-filled content, or <strong>Download PDF</strong> to save the letter.
          </p>
        </div>
      </form>

      {/* Preview Modal */}
      {showPreview && (
        <div className="preview-modal-overlay" onClick={() => setShowPreview(false)}>
          <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
            <div className="preview-modal-header">
              <h3>Letter Preview</h3>
              <button
                className="preview-close-btn"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
              >
                ×
              </button>
            </div>
            <div className="preview-modal-content">
              <div className="preview-letter-wrapper">
                <pre className="preview-letter-text">{generateFinalLetter()}</pre>
              </div>
            </div>
            <div className="preview-modal-footer">
              <button
                className="preview-download-btn"
                onClick={() => {
                  handleDownloadPDF()
                  setShowPreview(false)
                }}
              >
                <span className="btn-icon">📄</span>
                <span className="btn-text">Download PDF</span>
              </button>
              <button
                className="preview-compose-btn"
                onClick={() => {
                  setShowPreview(false)
                  handleCompose()
                }}
                disabled={filledFields < totalFields}
              >
                <span className="btn-icon">📋</span>
                <span className="btn-text">Compose Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PublicLetterForm

