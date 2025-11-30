import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import './LetterForm.css'

function PublicLetterForm() {
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

[I_CHECKBOX] I, [Name of Mutawalli], son/daughter of [Father's Name], residing at [Full Address], am the Mutawalli of the waqf known as "", 

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

Additional Objections:

[OBJECTION_1_CHECKBOX] I object that the UMEED and amended waqf regime abolish Section 104 and thereby strip non‑Muslims (such as Hindus and other communities) of their long‑recognised right to create waqf, which is a form of enjoying and disposing of property protected under Article 300A. By selectively taking away this lawful option only from non‑Muslims, purely on the ground of religion, the State not only violates their equality and property rights today but also sets a dangerous precedent that Parliament may, at its will and fancy, withdraw or disable recognised property rights and legal forms in future for any community it chooses.

[OBJECTION_2_CHECKBOX] I object to taking away the rights of tribals (both Muslim and non‑Muslim) and creating a dangerous principle under which the State can selectively switch off religious and charitable property rights in tribal areas, a principle that could tomorrow be used to question or dismantle even centuries‑old temples, churches and other institutions standing on tribal land. Today this tool is being used first against tribal Muslims, by flatly barring them from using the Islamic institution of waqf on their own land while analogous religious and charitable uses remain open for others, thereby stripping them of their constitutional right to property under Article 300A and their rights to religion and equality under Articles 25, 26, 14 and 15, and serving as a warning that the same mechanism can later be turned against any community.

[OBJECTION_3_CHECKBOX] I object that the UMEED portal forces me to disclose my religion, sect and detailed personal profile (education, employment, full address, etc.), which violates my right to privacy, informational self‑determination and freedom of conscience.

[OBJECTION_4_CHECKBOX] I object to being compelled to upload multiple identity and address proofs (such as Aadhaar, bank passbook, voter ID, etc.) on a central government portal, without any clear legal necessity, purpose limitation or effective data‑protection safeguards.

[OBJECTION_5_CHECKBOX] I object that the UMEED portal collects geo‑tagged photographs and detailed land‑revenue records for every waqf, creating a single, centralised map of Muslim religious and community sites that can be misused for surveillance, profiling or targeting.

[OBJECTION_6_CHECKBOX] I object that the UMEED portal has no clear, publicly accessible privacy and data‑protection policy explaining data security, retention, deletion, breach‑notification, inter‑agency sharing and user rights, thereby exposing Mutawallis and waqf properties to serious risk of data breach and misuse.

[OBJECTION_7_CHECKBOX] I object to the centralised digital profiling of only Muslim waqf properties, leaders and donors on the UMEED portal, when no comparable national system exists for Hindu temples, churches, secular charities, public trusts, societies or other associations, which is discriminatory and creates an unequal surveillance burden on one community.

[OBJECTION_8_CHECKBOX] I object to being forced, through the UMEED portal, to answer whether the waqf property includes "Government land", because such compelled self‑reporting can later be used against the waqf in title or encroachment disputes, undermining basic fairness in adjudication.

[OBJECTION_9_CHECKBOX] I object that the UMEED portal uses or enables automatic / algorithmic flagging and status changes (for example on encroachment, government land, incomplete audits), without clear reasons, an individualised hearing or any built‑in appeal mechanism, in violation of principles of natural justice and due process.

[OBJECTION_10_CHECKBOX] I object that the UMEED portal forces re‑registration and uploading of complete details within an arbitrary, short deadline, which is unworkable for many rural, small and resource‑constrained waqfs and results in unreasonable and unequal treatment.

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

  const generatePDFBlob = () => {
    let letterContent = generateFinalLetter()
    
    // Replace checkbox symbols with PDF-compatible text
    // Simpler paragraph-based rendering:
    // Split content into paragraphs (double newlines) and render each paragraph
    // left-aligned to better match the on-screen letter body. Title lines are
    // treated specially (centered and bold).
    const paragraphs = letterContent.split(/\n\s*\n/)
    let yPosition = topMargin

    paragraphs.forEach((para) => {
      const trimmedPara = para.trim()
      if (!trimmedPara) {
        yPosition += paragraphSpacing
        return
      }

      // Title handling
      if (trimmedPara === 'REGISTRATION UNDER PROTEST') {
        doc.setFontSize(14)
        doc.setFont('helvetica', 'bold')
        const splitTitle = doc.splitTextToSize(trimmedPara, maxWidth)
        splitTitle.forEach((line) => {
          if (yPosition + lineHeight > pageHeight - bottomMargin) {
            doc.addPage()
            yPosition = topMargin
          }
          const textWidth = doc.getTextWidth(line)
          const x = (pageWidth - textWidth) / 2
          doc.text(line, x, yPosition)
          yPosition += lineHeight
        })
        // reset font
        doc.setFontSize(fontSize)
        doc.setFont('helvetica', 'normal')
        yPosition += paragraphSpacing
        return
      }

      // For other paragraphs, preserve internal single newlines as line breaks
      // and render everything left-aligned with natural wrapping.
      const paraWithSingleBreaks = para.split('\n').map(p => p.trim()).join('\n')
      const lines = doc.splitTextToSize(paraWithSingleBreaks, maxWidth)

      // Add lines to document with page-break checks
      lines.forEach((line) => {
        if (yPosition + lineHeight > pageHeight - bottomMargin) {
          doc.addPage()
          yPosition = topMargin
        }
        doc.text(line, leftMargin, yPosition)
        yPosition += lineHeight
      })

      // Add paragraph spacing after each paragraph
      yPosition += paragraphSpacing
    })
        // Check page break before each line
        if (yPosition + lineHeight > pageHeight - bottomMargin) {
          doc.addPage()
          yPosition = topMargin
        }
        
        // Render based on alignment - ensure proper margins and no stretching
        if (alignment === 'center') {
          const textWidth = doc.getTextWidth(textLine)
          const xPosition = (pageWidth - textWidth) / 2
          doc.text(textLine, xPosition, yPosition)
        } else if (alignment === 'right') {
          // Right alignment - ensure text aligns properly from right margin
          const textWidth = doc.getTextWidth(textLine)
          const xPosition = pageWidth - rightMargin - textWidth
          // Ensure it doesn't go beyond left margin
          if (xPosition < leftMargin) {
            // If text is too wide, render from left margin with maxWidth constraint
            doc.text(textLine, leftMargin, yPosition, { maxWidth: safeMaxWidth, align: 'right' })
          } else {
            doc.text(textLine, xPosition, yPosition)
          }
        } else if (alignment === 'justify') {
          // Justified alignment - both sides aligned
          // Use safeMaxWidth to prevent excessive word stretching
          // Only justify if line is not the last line of a paragraph (to avoid stretching)
          const isLastLine = index === splitLines.length - 1
          if (isLastLine && textLine.trim().length < 50) {
            // Last line and short - use left align to avoid stretching
            doc.text(textLine, leftMargin, yPosition)
          } else {
            // Justify the line with safeMaxWidth to prevent excessive stretching
            doc.text(textLine, leftMargin, yPosition, { maxWidth: safeMaxWidth, align: 'justify' })
          }
        } else {
          // Left alignment - render exactly as email body
          // Ensure text doesn't exceed right boundary - no stretching
          const textWidth = doc.getTextWidth(textLine)
          if (textWidth > safeMaxWidth) {
            // Text is too wide - this shouldn't happen but handle it safely
            // Render with maxWidth constraint to prevent stretching
            doc.text(textLine, leftMargin, yPosition, { maxWidth: safeMaxWidth, align: 'left' })
          } else {
            // Text fits within bounds, render normally at leftMargin
            // This ensures proper left alignment and no stretching
            doc.text(textLine, leftMargin, yPosition)
          }
        }
        
        yPosition += lineHeight
      })
      
      // Reset font after title
      if (line.trim() === 'REGISTRATION UNDER PROTEST') {
        doc.setFontSize(fontSize)
        doc.setFont('helvetica', 'normal')
      }
    })
    
    // Generate PDF as blob
    const pdfBlob = doc.output('blob')
    return pdfBlob
  }

  const handleDownloadPDF = () => {
    try {
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
      const pdfBlob = generatePDFBlob()
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

