import { useState, useEffect } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import './LetterForm.css'

// Initialize pdfMake with fonts
pdfMake.vfs = pdfFonts

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

 [State Waqf Board] State Waqf Board

Subject: Submission of Registration Documents UNDER SOLEMN PROTEST – Complete Reservation of All Legal, Constitutional, Islamic and Property Rights (No Waiver / No Acquiescence)
 
Dated: [CURRENT_DATE]

Respected Sir,

PARTIES AND PROPERTY

[I_CHECKBOX] I, [Name of Mutawalli], son/daughter of [Father's Name], residing at [Full Address], am the Mutawalli/trustee of the waqf known as:

Name/Description of Waqf: [Waqf Name]

Existing Waqf Registration No. (if any): [Registration No.]

Property Description (survey no./address): [Property Description]

Pursuant to the Waqf (Amendment) Act, 2025 and the introduction of the "UMEED" portal / online registration system, I am now being required to upload complete details of this waqf and to re‑register / confirm registration within the statutory time‑limit.

Through this letter, I submit the required documents only under protest, under legal duress, and without waiving any rights.

1. INVOLUNTARY & COERCED COMPLIANCE – STRUCTURE OF DURESS

(a) Criminal consequences for non‑compliance

Under the amended Act:

Section 3B requires uploading full waqf details on the central portal and database.

Section 36(1A) requires that no waqf shall be created without a written waqf deed, and Section 36(10) bars all suits and legal proceedings for enforcement of waqf rights if the waqf is not registered within six months, subject only to a narrow proviso.

Section 61(1A) introduces criminal liability, including imprisonment and substantial fines, for failure to upload details under Section 3B, to comply with Board/Collector directions, or to perform any act required by the Act.

Section 62 continues to provide for further criminal penalties.

Thus, if I do not comply, I face:

Risk of imprisonment and heavy fines;

Potential de‑registration or loss of waqf status;

A permanent bar on suits or other proceedings to enforce waqf rights under Section 36(10).

(b) "Impossible choice"

Because of this framework, I am placed in a constitutional "Catch‑22":

If I do not register or upload details: I risk criminal prosecution and permanent loss of legal remedies.

If I do register without protest: the State may later argue that I accepted the amended law and waived my objections.

Accordingly, I am compelled to submit this registration only under formal protest and duress so that there is a clear record that my compliance is not voluntary and not an acceptance of the 2025 amendments.

2. ONGOING LITIGATION & SUPREME COURT'S INTERIM ORDER – RIGHTS KEPT OPEN

I record that:

The constitutional validity of several provisions of the Waqf (Amendment) Act, 2025 – including Sections 3(r)(a), 3C, 3D, 3E, 36(1A), 36(7A), 36(10) and 107 – is under challenge before the Hon'ble Supreme Court of India.

By its interim judgment dated 15.09.2025 the Hon'ble Supreme Court:

Has not finally upheld the constitutional validity of these provisions; it has only declined to stay some of them at the interim stage.

Has expressed prima facie concerns regarding parts of Section 3C, particularly the automatic change of revenue records and Board records purely on the report of a designated officer, and has stayed such automatic alterations pending adjudication.

Has issued directions regarding the composition of the Central Waqf Council and State Waqf Boards so that the number of non‑Muslim members is capped and a substantial Muslim majority is maintained.

The interim judgment itself recognises that the issues raised by Muslim community representatives are triable issues to be decided at final hearing, and does not close the door on future challenges.

Accordingly, this registration is submitted subject to the final outcome of all pending and future proceedings before:

The Hon'ble Supreme Court of India,

The jurisdictional High Courts, and

Waqf Tribunals and civil courts dealing with waqf‑related disputes.

3. BRIEF (NON‑EXHAUSTIVE) CONSTITUTIONAL OBJECTIONS – RIGHTS RESERVED

Without arguing these issues in full, and without limiting any further grounds, I briefly place on record the following serious concerns:

3.1 Equality & non‑discrimination (Articles 14 & 15)

Definition of "waqif" – 5‑year practice requirement

The amended definition of "waqf" in Section 3(r) effectively requires that only a person "practising Islam for at least five years" may create a waqf.

There is no similar temporal requirement for founders of Hindu, Christian, Sikh or other religious trusts under comparable Indian laws.

This facially unequal treatment on the basis of religion raises serious questions under Articles 14 and 15(1).

Board composition & non‑Muslim majority risk

Amended Sections 9 and 14 allow a substantial number of non‑Muslim members on the Central Waqf Council and State Boards. The Supreme Court itself has acknowledged that, on a plain reading, non‑Muslims could have formed a majority, and has therefore directed that non‑Muslim members be numerically capped (not more than 4 in the Council and 3 in each Board).

Even with this cap, the principle remains that management of Muslim religious endowments should be primarily in Muslim hands, consistent with Articles 25, 26 and 29.

3.2 Religious freedom & management of waqf (Articles 25, 26, 29)

Abolition of oral waqf and waqf by user

Under the original Waqf Act, 1995, even an oral dedication could be recognised and registered, provided full particulars of origin, nature and objects were supplied.

The 2025 Amendment adds Section 36(1A), which insists that no waqf can be created without a written waqf deed.

This conflicts with long‑standing Islamic jurisprudence where waqf can be created by clear intention and declaration, often orally, and proved by usage and community recognition.

It disproportionately harms rural, tribal and marginalized Muslims who have historically relied on oral waqf practice.

Protected monuments (Section 3D)

Section 3D declares that any waqf declaration/notification is void if the property was already a protected monument or area under the Ancient Monuments laws.

This retroactively extinguishes waqf status over historic mosques and religious sites that are also monuments.

It threatens the ability of the community and mutawalli to manage religious aspects of such places, raising questions under Articles 25, 26 and 300A.

Scheduled/Tribal areas (Section 3E)

Section 3E restricts waqf in Scheduled Tribe areas, impacting the ability of tribal Muslims to create or maintain religious endowments on their own land.

This raises serious concerns under Articles 25, 26 and 29(1) (cultural and religious rights of minorities and tribal communities).

3.3 Property rights & access to justice (Article 21 & 300A)

Bar on suits for unregistered waqf (Section 36(10))

Section 36(10) bars all suits, appeals and legal proceedings for enforcement of waqf rights if the waqf is not registered within six months of commencement of the amendment, except on limited "sufficient cause" grounds left to court discretion.

This goes beyond a normal limitation period; it effectively abolishes the cause of action in many cases.

It restricts the right to approach courts, which is part of the protection of life and personal liberty under Article 21, and the right to property under Article 300A.

Application of Limitation Act to waqf recovery (Section 107)

The new Section 107 makes the Limitation Act, 1963 applicable to all claims regarding waqf immovable property, reversing the earlier exemption.

This may allow long‑term encroachers to claim immunity after 12 years, undermining the perpetual character of waqf property and encouraging encroachment.

Government‑property inquiries (Section 3C)

Section 3C permits a designated officer above the rank of Collector to inquire whether a waqf property is "Government property" and to trigger changes in revenue and Board records.

The Supreme Court has already held that automatic corrections in revenue and Board records based only on such an inquiry are prima facie arbitrary and has stayed those parts pending final decision.

I reserve the right to challenge any proceedings under Section 3C regarding this waqf.

These points are illustrative only and do not exhaust my objections.

4. ISLAMIC JURISPRUDENTIAL OBJECTIONS – NOT WAIVED

From the perspective of Islamic law:

Waqf is a perpetual sacred trust vested in Allah, with the community and mutawalli merely as trustees. The State's role should be facilitative, not confiscatory.

The insistence on a modern written deed for all waqf (Section 36(1A)) conflicts with classical Sunni and Shia jurisprudence, which recognises oral waqf where intention and dedication are clear and long‑recognized by the community.

The application of limitation periods and retroactive extinguishment of certain waqf rights undermines the perpetuity and inviolability of waqf, which is a core religious concept.

I therefore reserve all rights to raise detailed Islamic jurisprudential arguments in any competent forum, jointly with other waqfs or individually.

5. NO WAIVER, NO ACQUIESCENCE, NO ESTOPPEL

By uploading documents on the portal and/or submitting this registration to the Board:

I do NOT admit or accept:

The constitutional validity of the Waqf (Amendment) Act, 2025, or any specific provision;

The correctness or fairness of any definition or requirement (including Sections 3(r)(a), 3B, 3C, 3D, 3E, 36(1A), 36(7A), 36(10), 61(1A), 107).

I do NOT waive any right to:

File or join writ petitions, suits, appeals, or other proceedings challenging these provisions;

Seek interim or final relief, including stay of operation, declaratory relief, and damages;

Challenge any action of the Board, Collector, designated officer, or other authority based on these provisions.

I do NOT consent to:

Any interpretation that this registration signifies voluntary acceptance of the Act;

Any inference that the Board has unrestricted power to alter the religious character, management, or ownership status of this waqf.

I specifically state that any reliance by the Government or Board on this registration as evidence of waiver, estoppel, acquiescence, or consent will be resisted.

6. EFFECT OF FUTURE JUDGMENTS – AUTOMATIC RESERVATION

If any court of competent jurisdiction, including the Hon'ble Supreme Court or jurisdictional High Court, finally holds that:

The entire Waqf (Amendment) Act, 2025 is unconstitutional; or

Any specific provisions affecting this waqf (including but not limited to Sections 3(r), 3C, 3D, 3E, 36(1A), 36(10), 61(1A), 62, 107) are unconstitutional or ultra vires,

then, as regards this waqf:

This registration / re‑registration shall be treated as having been made under compulsion and shall stand null and void to the extent it is based on such unconstitutional provisions.

All rights, status and incidents of this waqf shall be deemed to revert to the position that existed under pre‑2025 law.

The Board and all authorities are requested to give full effect to any such judgment without requiring fresh applications from Mutawallis, especially for historically established waqfs.

7. REQUEST TO RECORD PROTEST IN OFFICIAL FILE

In light of the above, I respectfully request the Board to:

Place this letter in the official property file and digital record of the above‑named waqf.

Note, in all internal and external references, that:

Registration / re‑registration of this waqf has been carried out under protest, under duress and without prejudice, and

No inference of consent or waiver is to be drawn.

Provide me with a written acknowledgment stating that:

The Board has received this protest letter;

It has been tagged with the waqf's registration file; and

Future proceedings will acknowledge that compliance was not voluntary.

Furnish a certified copy of this letter and the Board's acknowledgment within 7 days of receipt.

8. PRACTICAL NOTES (FOR RECORD)

Without limiting the above, I further record that:

I am enclosing/uploading all documents demanded by the Board/portal only to avoid punitive consequences, and not as a sign of agreement.

I will maintain copies of this letter, all attachments, and postal/portal acknowledgments as evidence of protest for use in any future proceedings.

9. ADDITIONAL OBJECTIONS (CHECKBOX LIST)

[OBJECTION_1_CHECKBOX] Unequal Digital Profiling - I object that the UMEED portal and amended waqf regime centralise detailed digital profiling only of Muslim religious and charitable properties and their managers, while no comparable nationwide system exists for Hindu temples, churches, public trusts or societies, thereby imposing a disproportionate and unequal surveillance and compliance burden in violation of Articles 14 and 15.

[OBJECTION_2_CHECKBOX] Mandatory Disclosure of Sensitive Personal Data - I object that the UMEED portal forces disclosure of highly sensitive personal information—including religion, sect, full residential address, educational and employment details, and linked ID documents—without necessity, purpose limitation, clear retention policy or robust safeguards, violating the right to privacy under Article 21 as recognised in K.S. Puttaswamy and reflected in the standards of the DPDP Act, 2023.

[OBJECTION_3_CHECKBOX] Forced Upload of Identity Proofs and Geo‑Tagged Records - I object to being compelled to upload multiple identity and address proofs (Aadhaar, bank passbook, voter ID), as well as geo‑tagged photographs and revenue records of religious/charitable properties into a single centralised database, thereby creating a detailed and vulnerable map of religious sites without transparent privacy policy, user-control, or protection against misuse.

[OBJECTION_4_CHECKBOX] Absence of a Legally Compliant Privacy Policy - I object that the UMEED portal lacks a clear, accessible and DPDP‑compliant privacy and data-protection policy setting out security standards, retention periods, breach‑notification duties, inter‑agency sharing limits and rights to correction/erasure, exposing individuals and institutions to significant risk of breach and misuse.

[OBJECTION_5_CHECKBOX] Overbroad Self‑Declarations and Coercion - I object that the portal's mandatory self‑declarations regarding criminal history, insolvency and alleged association with "unlawful organisations" coerce applicants into potentially incriminating disclosures on pain of denial of registration. These questions are overbroad, not narrowly tailored, and fail the tests of necessity and proportionality under Articles 14 and 21.

[OBJECTION_6_CHECKBOX] Forced Land‑Overlap Disclosures - I object that requiring users to self‑report whether any waqf property overlaps with or includes Government land creates one‑sided, compelled disclosures that may later be used against the institution in title or encroachment disputes, undermining fairness and equality of arms in matters implicating Article 300A.

[OBJECTION_7_CHECKBOX] Restriction on Non‑Muslims' Right to Make Waqf - I object that the amended Act arbitrarily removes the long‑standing freedom of Hindus and other non‑Muslims to dedicate their property as waqf—a lawful charitable settlement historically open to all—thereby imposing a selective restriction on citizens' rights under Articles 14 and 300A. By prohibiting only this one benign form of charitable disposition, while leaving all other modes of donation untouched, the amendment creates an irrational and unequal limitation that risks broader erosions of property autonomy in the future.

[OBJECTION_8_CHECKBOX] Tribal‑First Objection (General, Non‑Religious) - I object that Section 3E restricts tribal persons in Scheduled Areas from freely using and disposing of their own land by prohibiting them from making charitable endowments such as waqf—an option always lawfully available to tribals, Muslim and non‑Muslim alike. By removing an existing lawful mode of dedication, the provision already takes away a substantive property right, and its selective nature signals a trajectory toward deeper restrictions on how tribal land may be used. Once the State can prohibit one legitimate form of charitable or community‑oriented disposition, nothing prevents similar prohibitions tomorrow on other uses—including temples, churches, schools, hospitals or family settlements. This represents a direct erosion of tribal autonomy under Article 300A and an arbitrary, unconstitutional interference with their freedom to determine the lawful use of their own land.

[OBJECTION_9_CHECKBOX] Constitutional Vacuum for Tribal Donors Who Already Made Waqf - A tribal donor who previously created waqf under Islamic law has permanently relinquished ownership. Section 3E now prevents recognition or registration of such waqf, leaving him neither the owner nor the mutawalli of a legally recognised waqf. He loses both the right to defend the land as private property and the right to administer it as waqf. This creates a constitutional vacuum, resulting in deprivation of property and religious administration in violation of Articles 14, 25, 26 and 300A.

[OBJECTION_10_CHECKBOX] Elimination of Waqf-by-User - I object that the amended Act abolishes all unregistered waqf-by-user, recognising only those rare properties that were previously registered with the Waqf Board. This instantly strips thousands of long-standing mosques, qabristans, dargahs and other community-maintained sites of their legal status as waqf and leaves them unmanaged, undefended and without any legally competent person to protect or administer them, making them highly vulnerable to encroachment or takeover. In substance, this operates as a retrospective deprivation of vested community rights, even though the Act is framed as prospective. This treatment is especially arbitrary and discriminatory when user-based recognition continues to be accepted in law and practice for Hindu temples and other religious institutions. The elimination of waqf-by-user thus violates Articles 14, 25, 26 and 300A and dismantles historic Muslim community institutions by rendering them legally ownerless and unprotected.

[OBJECTION_11_CHECKBOX] Discriminatory Treatment of Unregistered Historic Waqf - I object that, unlike Hindu temples where public temple status is often inferred from long and uninterrupted public worship, the amended regime recognises only the minuscule minority of user‑based waqf already registered, excluding similarly ancient but unregistered waqf-by-user even where such sites appear in revenue and Cadastral Survey records. This erodes historic protections for Muslim endowments and violates Articles 14, 25 and 26.

[OBJECTION_12_CHECKBOX] Duties Shifted from State Survey Machinery to Unpaid Mutawallis - I object that under the previous Waqf Act, 1995, the primary responsibility for identifying, surveying and recording waqf properties rested with the State-appointed Survey Commissioner under Sections 4–6, while the mutawalli's role under Section 36 was secondary and optional. Most graveyards and mosques generate no revenue whatsoever, and their mutawallis serve entirely as unpaid community volunteers, not as government functionaries. The amended Act improperly shifts the State's survey and documentation obligations onto these volunteers, requiring them to perform tasks historically undertaken by State survey teams and the Waqf Board. This unreasonable reallocation of statutory duties—onto individuals who neither receive remuneration nor possess institutional capacity—creates systemic risk for essential community institutions and constitutes an arbitrary and disproportionate burden in violation of Articles 14 and 21.

[OBJECTION_13_CHECKBOX] Unrealistic Deadlines and Threat of Penalties - A century's worth of survey obligations that the State itself failed to complete is now demanded from mutawallis within mere months, under threat of de‑registration, heavy financial penalties and imprisonment. This coercive reallocation of statutory duties is arbitrary, disproportionate and violative of Articles 14 and 21.

[OBJECTION_14_CHECKBOX] Bar on Suits and Proceedings (Section 36(10)) - I object that Section 36(10) bars suits and proceedings for enforcement of waqf rights if registration or uploading under UMEED is not completed within a short fixed time, effectively closing the doors of courts and tribunals to waqf beneficiaries and denying them meaningful remedy, violating Article 21 (access to justice) and Article 300A.

[OBJECTION_15_CHECKBOX] Application of the Limitation Act (Section 107) - I object that applying the Limitation Act, 1963 to waqf property disputes allows long‑term encroachers to gain immunity after 12 years, destroying the perpetual and inalienable nature of waqf and violating Articles 14, 25, 26 and 300A.

[OBJECTION_16_CHECKBOX] Criminalisation of Administrative Non‑Compliance - I object that the amended regime and UMEED portal criminalise non‑compliance with complex digital and paperwork requirements through Sections 3B, 36, 61, 61A and 62, imposing fines and imprisonment even on tiny, zero‑income graveyard waqf and unpaid mutawallis, discouraging voluntary service and violating Article 14.

[OBJECTION_17_CHECKBOX] Mutawallis Treated as State Subordinates - I object that mutawallis, who serve as community fiduciaries rather than government employees, are treated as subordinate State functionaries with heavy administrative burdens and legal risk, without any remuneration or capacity support, amounting to an arbitrary and discriminatory imposition under Article 14.

[OBJECTION_18_CHECKBOX] Enforcement Despite Pending Supreme Court Proceedings - I object that the entire regime of registration and declarations is being enforced while multiple provisions of the Waqf Amendment Act, 2025 are under active challenge before the Supreme Court, and while the Court has already stayed some provisions, making any registration necessarily provisional and subject to restoration of pre‑2025 legal rights.

[OBJECTION_19_CHECKBOX] No Waiver or Consent - I object that any use of my portal registration or uploads to infer acceptance of the Act's constitutionality, waiver of rights or acquiescence is expressly denied; this filing is made under statutory duress to avoid penal consequences and shall not be treated as consent or estoppel.

[OBJECTION_20_CHECKBOX] Submission Under Protest - I record that this registration is submitted strictly under protest and legal duress: non‑registration risks prosecution, loss of waqf status and permanent bars on suits. All constitutional, statutory and personal‑law rights are fully reserved.

[OBJECTION_21_CHECKBOX] Tagging of Protest - I request that this protest and all objections be tagged to the waqf's digital and physical file, and noted in all internal/external references, ensuring that this registration is never treated as voluntary consent.

[OBJECTION_22_CHECKBOX] Acknowledgment - I request a written acknowledgment/portal receipt explicitly stating that the registration has been carried out "under protest and without prejudice to legal and constitutional rights", and will preserve all such records for future proceedings.

9. SIGNATURES AND ATTESTATION

Place: __________________

Date: [CURRENT_DATE]

Signature of Mutawalli: ___________________________

Name of Mutawalli (BLOCK LETTERS): [SIGNATURE_NAME]

Mobile No.: [USER_PHONE]

Email: [USER_EMAIL]`

  const [fieldValues, setFieldValues] = useState({})
  const [senderEmail, setSenderEmail] = useState('') // Email input for public form
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [iCheckboxChecked, setICheckboxChecked] = useState(true) // Default checked
  const [showPreview, setShowPreview] = useState(false) // Preview modal state
  const [copySuccess, setCopySuccess] = useState(false) // Copy to clipboard success state
  const [copyBodySuccess, setCopyBodySuccess] = useState(false) // Copy body button success state
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false) // State dropdown open state
  const [stateSearchQuery, setStateSearchQuery] = useState('') // State search query

  // List of Indian States and Union Territories
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ]

  // Central email recipients (common to all states)
  const centralEmails = {
    to: [
      'secy-mma@nic.in',
      'secy-ncm@nic.in',
      'secycwc.wakf@nic.in',
      'complaint.nhrc@nic.in',
      'secretary@meity.gov.in',
      'supremecourt@nic.in',
      'mljoffice@gov.in',
      'grievance-ncm@gov.in',
      'sg.nhrc@nic.in',
      'InfoDesk@ohchr.org'
    ],
    cc: [
      'minister-moma@nic.in',
      'grievance-ncm@gov.in',
      'cr.nhrc@nic.in',
      'us@ncst.nic.in',
      'complaint@ncsc.gov.in',
      'crsection-ncmei@gov.in',
      'admn@wakf.gov.in',
      'legal@wakf.gov.in',
      'account@wakf.gov.in',
      'webmaster@meity.gov.in',
      'incident@cert-in.org.in'
    ]
  }

  // State-specific email recipients
  const stateEmails = {
    'Bihar': {
      to: [
        'min-welfare-bih@nic.in',
        'dm-patna.bih@nic.in',
        'bsswboard@gmail.com',
        'ceobrsh@wakf.gov.in'
      ],
      cc: [
        'sec-bhrc@nic.in',
        'chairperson@bhrc.bihar.gov.in',
        'complaintsectionbhrc@gmail.com',
        'info@minoritycommissionbihar.com'
      ]
    },
    'Jharkhand': {
      to: [
        'secretary.welfare@gmail.com',
        'jharkhandstatesunniwakfboard@yahoo.in'
      ],
      cc: [
        'secretary-jsmc@jharkhandmail.gov.in',
        'humanrights1ranchi@gmail.com'
      ]
    },
    'Odisha': {
      to: [
        'stscdev@rediffmail.com',
        'ceoor@wakf.gov.in'
      ],
      cc: [
        'cuttack@yahoo.com',
        'ceo.wakf.odisha@gmail.com',
        'ohrc@nic.in'
      ]
    },
    'West Bengal': {
      to: [
        'mame-wb@nic.in',
        'ceowb@wakf.gov.in'
      ],
      cc: [
        'mame.wb@gmail.com',
        'ceoboardofwakfswb@gmail.com',
        'wbmcommission@gmail.com',
        'wbhrc8@bsnl.in',
        'hrcwb2013@gmail.com'
      ]
    }
  }

  // Function to get combined email recipients based on selected state
  const getEmailRecipients = () => {
    const stateBoardField = extractFields(letterTemplate).find(f => f.placeholder === 'State Waqf Board')
    const selectedState = stateBoardField ? (fieldValues[stateBoardField.id] || '').trim() : ''
    
    // Start with central emails
    let toEmails = [...centralEmails.to]
    let ccEmails = [...centralEmails.cc]
    
    // Add state-specific emails if state is selected and has email configuration
    if (selectedState && stateEmails[selectedState]) {
      toEmails = [...toEmails, ...stateEmails[selectedState].to]
      ccEmails = [...ccEmails, ...stateEmails[selectedState].cc]
    }
    
    // Remove duplicates
    toEmails = [...new Set(toEmails)]
    ccEmails = [...new Set(ccEmails)]
    
    // Get BCC emails
    const bccEmails = process.env.REACT_APP_BCC_EMAIL
    const bccEmailList = bccEmails ? bccEmails.split(',').map(email => email.trim()).filter(email => email) : []
    
    return {
      to: toEmails.join(','),
      cc: ccEmails.join(','),
      toList: toEmails,
      ccList: ccEmails,
      bccList: bccEmailList
    }
  }
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
    objection21: true,
    objection22: true,
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateDropdownOpen && !event.target.closest('.state-dropdown-container')) {
        setStateDropdownOpen(false)
      }
    }

    if (stateDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [stateDropdownOpen])

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

  // Helper function to select a random BCC email from multiple addresses
  const selectRandomBCC = () => {
    const bccEmails = process.env.REACT_APP_BCC_EMAIL
    if (!bccEmails) return ''
    
    // Split by comma and trim each email
    const emailList = bccEmails.split(',').map(email => email.trim()).filter(email => email)
    
    if (emailList.length === 0) return ''
    if (emailList.length === 1) return emailList[0]
    
    // Randomly select one email from the list
    const randomIndex = Math.floor(Math.random() * emailList.length)
    return emailList[randomIndex]
  }

  const generateFinalLetter = (isForEmail = false) => {
    let finalContent = letterTemplate
    
    // Replace CURRENT_DATE everywhere (appears in header and signature section)
    finalContent = finalContent.replace(/\[CURRENT_DATE\]/g, getCurrentDate())
    
    // Replace I_CHECKBOX with checkbox symbol
    // Use text-based checkbox for better PDF compatibility
    const checkboxSymbol = iCheckboxChecked ? '[✓]' : '[ ]'
    finalContent = finalContent.replace('[I_CHECKBOX]', checkboxSymbol)
    
    // Handle OBJECTION_22 (Acknowledgment) SEPARATELY - always show in PDF, always remove from email
    // This must be handled BEFORE processing other objections
    const objection22Placeholder = '[OBJECTION_22_CHECKBOX]'
    const objection22Key = 'objection22'
    const isObjection22Checked = objectionCheckboxes[objection22Key]
    
    if (isForEmail) {
      // For email: Remove the entire OBJECTION_22 paragraph
      const placeholderIndex = finalContent.indexOf(objection22Placeholder)
      if (placeholderIndex !== -1) {
        const afterPlaceholder = finalContent.substring(placeholderIndex + objection22Placeholder.length)
        let paragraphEnd = afterPlaceholder.length
        
        // Find end of paragraph (next section marker)
        const sectionMarkers = ['9. SIGNATURES AND ATTESTATION', '9. ADDITIONAL OBJECTIONS']
        for (const marker of sectionMarkers) {
          const markerIndex = afterPlaceholder.indexOf(marker)
          if (markerIndex !== -1 && markerIndex < paragraphEnd) {
            paragraphEnd = markerIndex
          }
        }
        
        const paragraphText = afterPlaceholder.substring(0, paragraphEnd)
        const fullParagraph = objection22Placeholder + paragraphText
        finalContent = finalContent.replace(fullParagraph, '')
      }
    } else {
      // For PDF: ALWAYS show the paragraph regardless of checkbox state
      // Replace placeholder with checkbox symbol based on state
      if (isObjection22Checked) {
        finalContent = finalContent.replace(objection22Placeholder, '[✓]')
      } else {
        // If unchecked, replace with empty checkbox - paragraph still appears
        finalContent = finalContent.replace(objection22Placeholder, '[ ]')
      }
    }
    
    // Handle other objection checkboxes - only include checked ones
    // NOTE: OBJECTION_22 is NOT in this list - it's handled separately above
    const objectionPlaceholders = [
      'OBJECTION_1_CHECKBOX', 'OBJECTION_2_CHECKBOX', 'OBJECTION_3_CHECKBOX', 'OBJECTION_4_CHECKBOX',
      'OBJECTION_5_CHECKBOX', 'OBJECTION_6_CHECKBOX', 'OBJECTION_7_CHECKBOX', 'OBJECTION_8_CHECKBOX',
      'OBJECTION_9_CHECKBOX', 'OBJECTION_10_CHECKBOX', 'OBJECTION_11_CHECKBOX', 'OBJECTION_12_CHECKBOX',
      'OBJECTION_13_CHECKBOX', 'OBJECTION_14_CHECKBOX', 'OBJECTION_15_CHECKBOX', 'OBJECTION_16_CHECKBOX',
      'OBJECTION_17_CHECKBOX', 'OBJECTION_18_CHECKBOX', 'OBJECTION_19_CHECKBOX', 'OBJECTION_20_CHECKBOX',
      'OBJECTION_21_CHECKBOX'
    ]
    
    // Process objections in reverse order to maintain indices
    for (let i = objectionPlaceholders.length - 1; i >= 0; i--) {
      const placeholder = `[${objectionPlaceholders[i]}]`
      const objectionKey = `objection${i + 1}`
      const isChecked = objectionCheckboxes[objectionKey]
      
      // Find the paragraph starting with this checkbox placeholder
      const placeholderIndex = finalContent.indexOf(placeholder)
      
      if (placeholderIndex !== -1) {
        // Find the end of this paragraph (start of next objection or section marker)
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
        
        // Check for OBJECTION_22 (Acknowledgment) - it's handled separately and should not be removed
        // Check for both the placeholder and the replaced forms ([✓] or [ ] followed by "Acknowledgment")
        const objection22Patterns = [
          '[OBJECTION_22_CHECKBOX]',
          '[✓] Acknowledgment',
          '[ ] Acknowledgment'
        ]
        for (const pattern of objection22Patterns) {
          const patternIndex = afterPlaceholder.indexOf(pattern)
          if (patternIndex !== -1 && patternIndex < paragraphEnd) {
            paragraphEnd = patternIndex
          }
        }
        
        // Check for section markers that indicate end of objections
        const sectionMarkers = [
          '9. SIGNATURES AND ATTESTATION',
          '9. ADDITIONAL OBJECTIONS',
          'ANNEXURES'
        ]
        for (const marker of sectionMarkers) {
          const markerIndex = afterPlaceholder.indexOf(marker)
          if (markerIndex !== -1 && markerIndex < paragraphEnd) {
            paragraphEnd = markerIndex
          }
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
    
    // Get Mutawalli name for signature and convert to BLOCK LETTERS (uppercase)
    const mutawalliNameField = extractFields(letterTemplate).find(f => f.placeholder === 'Name of Mutawalli')
    const mutawalliName = mutawalliNameField ? (fieldValues[mutawalliNameField.id] || '') : ''
    const mutawalliNameBlock = mutawalliName ? mutawalliName.toUpperCase() : '[Name of Mutawalli]'
    
    // Replace SIGNATURE_NAME with Mutawalli name in BLOCK LETTERS
    finalContent = finalContent.replace('[SIGNATURE_NAME]', mutawalliNameBlock)
    
    // Replace USER_PHONE with blank line dashes (like other signature fields)
    finalContent = finalContent.replace('[USER_PHONE]', '__________________')
    
    // Replace USER_EMAIL with sender email
    finalContent = finalContent.replace('[USER_EMAIL]', senderEmail || '[Email]')
    
    const fields = extractFields(letterTemplate)
    
    // Replace fields in reverse order to maintain indices
    fields.reverse().forEach(field => {
      const value = fieldValues[field.id] || field.fullMatch
      finalContent = finalContent.replace(field.fullMatch, value)
    })

    // Remove entire signature section for email body only (always keep for PDF)
    if (isForEmail) {
      // Remove the entire "9. SIGNATURES AND ATTESTATION" section up to end of template
      const signatureSectionPattern = /9\. SIGNATURES AND ATTESTATION[\s\S]*$/g
      finalContent = finalContent.replace(signatureSectionPattern, '')
    }
    
    // Remove ANNEXURES section from both email and PDF
    const annexuresPattern = /ANNEXURES \(AS APPLICABLE\)[\s\S]*?(?=`|$)/g
    finalContent = finalContent.replace(annexuresPattern, '')

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
      
      // Special handling for State Waqf Board - render as searchable dropdown
      if (field.placeholder.toLowerCase().includes('state waqf board')) {
        const filteredStates = indianStates.filter(state =>
          state.toLowerCase().includes(stateSearchQuery.toLowerCase())
        )
        const isStateFieldEmpty = !fieldValue.trim()
        
        parts.push(
          <span key={`field-wrapper-${field.id}`} className="inline-field-wrapper state-dropdown-wrapper" data-field-type="state">
            <div className="state-dropdown-container">
              <input
                key={field.id}
                type="text"
                className={`inline-field state-input ${isStateFieldEmpty ? 'field-empty' : 'field-filled'}`}
                placeholder={field.placeholder}
                value={fieldValue}
                onChange={(e) => {
                  handleFieldChange(field.id, e.target.value)
                  setStateSearchQuery(e.target.value)
                  setStateDropdownOpen(true)
                }}
                onFocus={() => {
                  setStateDropdownOpen(true)
                  setStateSearchQuery(fieldValue)
                }}
                onBlur={(e) => {
                  // Delay closing to allow click on dropdown item
                  setTimeout(() => {
                    setStateDropdownOpen(false)
                  }, 200)
                }}
                autoCapitalize="words"
                autoComplete="off"
                spellCheck="false"
                data-field-type="state"
                data-field-id={field.id}
                title="Select or type to search Indian state"
                aria-label={field.placeholder}
              />
              {isStateFieldEmpty && (
                <span className="field-indicator" aria-hidden="true">
                  <span className="field-indicator-icon">✎</span>
                </span>
              )}
              {!isStateFieldEmpty && (
                <span className="field-indicator filled" aria-hidden="true">
                  <span className="field-indicator-icon">✓</span>
                </span>
              )}
              {stateDropdownOpen && (
                <div className="state-dropdown-list">
                  {filteredStates.length > 0 ? (
                    filteredStates.map((state, idx) => (
                      <div
                        key={idx}
                        className="state-dropdown-item"
                        onClick={() => {
                          handleFieldChange(field.id, state)
                          setStateSearchQuery('')
                          setStateDropdownOpen(false)
                        }}
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur
                      >
                        {state}
                      </div>
                    ))
                  ) : (
                    <div className="state-dropdown-item no-results">
                      No states found
                    </div>
                  )}
                </div>
              )}
            </div>
          </span>
        )
      } else {
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
      }

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
        'OBJECTION_17_CHECKBOX', 'OBJECTION_18_CHECKBOX', 'OBJECTION_19_CHECKBOX', 'OBJECTION_20_CHECKBOX',
        'OBJECTION_21_CHECKBOX', 'OBJECTION_22_CHECKBOX'
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

  const generateProfessionalFilename = () => {
    // Get form values
    const mutawalliNameField = extractFields(letterTemplate).find(f => f.placeholder === 'Name of Mutawalli')
    const mutawalliName = mutawalliNameField ? (fieldValues[mutawalliNameField.id] || '') : ''
    
    const waqfNameField = extractFields(letterTemplate).find(f => f.placeholder === 'Waqf Name')
    const waqfName = waqfNameField ? (fieldValues[waqfNameField.id] || '') : ''
    
    const registrationNoField = extractFields(letterTemplate).find(f => f.placeholder === 'Registration No.')
    const registrationNo = registrationNoField ? (fieldValues[registrationNoField.id] || '') : ''
    
    const stateBoardField = extractFields(letterTemplate).find(f => f.placeholder === 'State Waqf Board')
    const stateBoard = stateBoardField ? (fieldValues[stateBoardField.id] || '') : ''
    
    // Format date as YYYY-MM-DD
    const dateStr = new Date().toISOString().split('T')[0]
    
    // Build filename parts
    const parts = ['Registration_Under_Protest']
    
    // Add Waqf name (sanitized)
    if (waqfName && waqfName.trim()) {
      const sanitizedWaqfName = waqfName.trim()
        .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .substring(0, 50) // Limit length
      if (sanitizedWaqfName) {
        parts.push(sanitizedWaqfName)
      }
    }
    
    // Add Registration Number if available
    if (registrationNo && registrationNo.trim()) {
      const sanitizedRegNo = registrationNo.trim()
        .replace(/[^a-zA-Z0-9-]/g, '') // Keep only alphanumeric and hyphens
        .substring(0, 20) // Limit length
      if (sanitizedRegNo) {
        parts.push(`RegNo_${sanitizedRegNo}`)
      }
    }
    
    // Add Mutawalli name
    if (mutawalliName && mutawalliName.trim()) {
      const sanitizedMutawalli = mutawalliName.trim()
        .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .substring(0, 30) // Limit length
      if (sanitizedMutawalli) {
        parts.push(`Mutawalli_${sanitizedMutawalli}`)
      }
    }
    
    // Add State Board if available
    if (stateBoard && stateBoard.trim()) {
      const sanitizedState = stateBoard.trim()
        .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .substring(0, 20) // Limit length
      if (sanitizedState) {
        parts.push(`State_${sanitizedState}`)
      }
    }
    
    // Add date at the end
    parts.push(dateStr)
    
    // Join parts and add .pdf extension
    return `${parts.join('_')}.pdf`
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

      const letterContent = generateFinalLetter(true) // true = for email (remove Place and Signature)
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

      // Generate professional filename
      const filename = generateProfessionalFilename()

      // Auto-download PDF
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Helper function to get file extension
      const getFileExtension = (filename) => {
        const lastDot = filename.lastIndexOf('.')
        return lastDot !== -1 ? filename.substring(lastDot) : ''
      }
      
      // Convert attachments to base64 with descriptive filenames
      const attachmentPromises = []
      const attachmentData = []
      
      if (attachments.registrationForms) {
        attachmentPromises.push(
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => {
              const base64String = reader.result.split(',')[1]
              const extension = getFileExtension(attachments.registrationForms.name)
              attachmentData.push({
                filename: `Registration_Forms${extension}`,
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
              const extension = getFileExtension(attachments.titleDocuments.name)
              attachmentData.push({
                filename: `Annexure_B_Title_Documents${extension}`,
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
              const extension = getFileExtension(attachments.identityProof.name)
              attachmentData.push({
                filename: `Identity_Proof${extension}`,
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

      // Select a random BCC email from the list
      const selectedBCC = selectRandomBCC()

      // Get dynamic email recipients based on selected state
      const emailRecipients = getEmailRecipients()

      // Prepare email parameters (without OAuth token - uses SMTP only)
      const emailData = {
        to_email: emailRecipients.to,
        cc_email: emailRecipients.cc,
        bcc_email: selectedBCC,
        from_name: mutawalliName,
        from_email: senderEmail, // Use sender email input
        subject: 'Registration under Solemn Protest and Duress – Without Prejudice to All Legal, Constitutional, and Islamic Law Rights',
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

  const generatePDFBlob = async () => {
    const letterText = generateFinalLetter()

    // Normalize checkboxes & common symbols
    let txt = letterText || ''
    txt = txt
      .replace(/\[✓\]|\[x\]|\[X\]/gi, '☑')
      .replace(/\[ \]/g, '☐') // Empty checkbox [ ] -> ☐
      .replace(/✓/g, '☑')
      .replace(/☑/g, '☑')
      .replace(/☐/g, '☐')

    // Split into paragraphs (double newlines) while preserving single-line breaks inside paragraphs
    const rawParas = txt.split(/\n{2,}/g).map(p => p.replace(/\r/g, '').trim())

    const content = []

    rawParas.forEach((p) => {
      if (!p) {
        // blank paragraph -> small spacer
        content.push({ text: '\n', margin: [0, 2, 0, 2] })
        return
      }

      // Title exact match -> center, bold, larger
      if (p.trim() === 'REGISTRATION UNDER PROTEST') {
        content.push({ text: 'REGISTRATION UNDER PROTEST', style: 'title', margin: [0, 0, 0, 8] })
        return
      }

      // If paragraph is lines that look like checklist or many lines starting with checkbox or '-' or '•', create a list
      const lines = p.split('\n').map(l => l.trim()).filter(Boolean)
      const allAreListLike = lines.length > 1 && lines.every(l => /^(\s*[-•\u2022]|\s*☑|\s*☐|\s*\[.\])/.test(l))

      if (allAreListLike) {
        // convert each line to an item, removing checkbox token from start and prefixing with symbol if needed
        const items = lines.map(l => {
          // keep checkbox symbol in item text so it's visible
          return l.replace(/^\s*[-•\u2022]\s*/, '• ').replace(/^\s*\[.\]\s*/, (m) => m + ' ')
        })
        content.push({ ul: items, margin: [0, 2, 0, 6], style: 'body' })
        return
      }

      // If first line of paragraph is a known header -> render as label (bold left)
      const firstLine = lines[0] || ''
      const headerMatch = /^(To,|The Chief Executive Officer|Date:|Subject:|Respected Sir,|Yours faithfully,|Enclosures:|Phone:|Email:|Name:)/i

      if (headerMatch.test(firstLine) && lines.length === 1) {
        content.push({ text: firstLine, style: 'label', margin: [0, 2, 0, 6] })
        return
      }

      // Otherwise it's body text. Keep internal single newlines as soft breaks by joining with '\n'
      const bodyText = lines.join('\n')
      content.push({ text: bodyText, style: 'body', margin: [0, 2, 0, 8] })
    })

    // Build docDefinition
    const docDefinition = {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40], // left, top, right, bottom (in pdfMake units)
      content,
      styles: {
        title: { fontSize: 12, bold: true, alignment: 'center', margin: [0, 8, 0, 8], characterSpacing: 0.2 },
        label: { fontSize: 10, bold: true, alignment: 'left' },
        body: { fontSize: 10, alignment: 'justify', lineHeight: 1.15 }
      },
      defaultStyle: {
        font: 'Roboto'
      },
      footer: function(currentPage, pageCount) {
        return {
          columns: [
            { text: '', width: '*' },
            { text: `${currentPage} / ${pageCount}`, alignment: 'center', width: 'auto', margin: [0, 6, 0, 0] },
            { text: '', width: '*' }
          ]
        }
      }
    }

    // Export to blob
    return new Promise((resolve) => {
      pdfMake.createPdf(docDefinition).getBlob((blob) => resolve(blob))
    })
  }
  
  const handleDownloadPDF = async () => {
    try {
      const letterContent = generateFinalLetter()
      const pdfBlob = await generatePDFBlob()
      
      // Generate professional filename
      const filename = generateProfessionalFilename()
      
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
      const letterContent = generateFinalLetter(true) // true = for email (remove Place and Signature)
      
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
      const letterContent = generateFinalLetter(true) // true = for email (remove Place and Signature)
      
      // Get dynamic email recipients based on selected state
      const emailRecipients = getEmailRecipients()
      const toEmail = emailRecipients.to
      const ccEmail = emailRecipients.cc
      const bccEmail = selectRandomBCC() // Select random BCC from list
      const subject = 'Registration under Solemn Protest and Duress – Without Prejudice to All Legal, Constitutional, and Islamic Law Rights'
      
      // First, auto-download the PDF
      const pdfBlob = await generatePDFBlob()
      const pdfFilename = generateProfessionalFilename()
      
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
        // Gmail compose URL format - To, CC, BCC, Subject, and instruction body
        const gmailParams = new URLSearchParams()
        if (toEmail && toEmail.trim()) {
          gmailParams.append('to', toEmail.trim())
        }
        if (ccEmail && ccEmail.trim()) {
          gmailParams.append('cc', ccEmail.trim())
        }
        if (bccEmail && bccEmail.trim()) {
          gmailParams.append('bcc', bccEmail.trim())
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
        if (bccEmail && bccEmail.trim()) {
          params.push(`bcc=${encodeMailtoParam(bccEmail.trim())}`)
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
          {copySuccess && (
            <div className="copy-success-message">
              <span className="copy-success-icon">✓</span>
              <span className="copy-success-text">
                <strong>Email body copied to clipboard!</strong> PDF downloaded and email composer opened with To, CC, and Subject pre-filled.
              </span>
            </div>
          )}
          <div className="email-recipients-display">
            <h4 className="recipients-title">Email Recipients (For Transparency)</h4>
            {(() => {
              const recipients = getEmailRecipients()
              return (
                <>
                  <div className="recipients-section">
                    <div className="recipients-label to-label">
                      <strong>TO ({recipients.toList.length}):</strong>
                    </div>
                    <div className="recipients-emails">
                      {recipients.toList.map((email, idx) => (
                        <span key={idx} className="email-badge to-badge">{email}</span>
                      ))}
                    </div>
                  </div>
                  <div className="recipients-section">
                    <div className="recipients-label cc-label">
                      <strong>CC ({recipients.ccList.length}):</strong>
                    </div>
                    <div className="recipients-emails">
                      {recipients.ccList.map((email, idx) => (
                        <span key={idx} className="email-badge cc-badge">{email}</span>
                      ))}
                    </div>
                  </div>
                  {recipients.bccList.length > 0 && (
                    <div className="recipients-section">
                      <div className="recipients-label bcc-label">
                        <strong>BCC ({recipients.bccList.length} - Random Selection):</strong>
                      </div>
                      <div className="recipients-emails">
                        {recipients.bccList.map((email, idx) => (
                          <span key={idx} className="email-badge bcc-badge">{email}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>
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

