// Vercel Serverless Function for sending emails
// Alternative to EmailJS - uses SendGrid or SMTP

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    to_email,
    cc_email,
    bcc_email,
    from_name,
    from_email,
    subject,
    message,
    reply_to,
    access_token, // User's OAuth access token for Gmail API
    pdf_attachment, // PDF as base64 string
    pdf_filename, // PDF filename
    attachments, // Array of additional attachments [{filename, content, type}]
  } = req.body

  // Validate required fields
  if (!to_email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Priority 1: Use Gmail API with user's OAuth token (sends from logged-in user's email)
    if (access_token && from_email) {
      try {
        // Generate boundary for multipart message
        const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        
        // Create email message in RFC 2822 format with multipart support
        const emailLines = []
        emailLines.push(`From: "${from_name}" <${from_email}>`)
        emailLines.push(`To: ${to_email}`)
        if (cc_email) {
          emailLines.push(`Cc: ${cc_email}`)
        }
        if (bcc_email) {
          emailLines.push(`Bcc: ${bcc_email}`)
        }
        emailLines.push(`Subject: ${subject}`)
        if (reply_to) {
          emailLines.push(`Reply-To: ${reply_to}`)
        }
        
        // Escape HTML special characters for HTML version
        const htmlMessage = message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
        
        // Check if we have any attachments (PDF or additional files)
        const hasAttachments = (pdf_attachment && pdf_filename) || (attachments && attachments.length > 0)
        
        if (hasAttachments) {
          emailLines.push(`MIME-Version: 1.0`)
          emailLines.push(`Content-Type: multipart/mixed; boundary="${boundary}"`)
          emailLines.push('')
          emailLines.push(`--${boundary}`)
          emailLines.push(`Content-Type: multipart/alternative; boundary="${boundary}_alt"`)
          emailLines.push('')
          emailLines.push(`--${boundary}_alt`)
          emailLines.push('Content-Type: text/plain; charset=utf-8')
          emailLines.push('Content-Transfer-Encoding: 7bit')
          emailLines.push('')
          emailLines.push(message)
          emailLines.push('')
          emailLines.push(`--${boundary}_alt`)
          emailLines.push('Content-Type: text/html; charset=utf-8')
          emailLines.push('Content-Transfer-Encoding: 7bit')
          emailLines.push('')
          emailLines.push(`<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${htmlMessage}</pre>`)
          emailLines.push(`--${boundary}_alt--`)
          emailLines.push('')
          
          // Add PDF attachment if exists
          if (pdf_attachment && pdf_filename) {
            emailLines.push(`--${boundary}`)
            emailLines.push(`Content-Type: application/pdf; name="${pdf_filename}"`)
            emailLines.push(`Content-Disposition: attachment; filename="${pdf_filename}"`)
            emailLines.push('Content-Transfer-Encoding: base64')
            emailLines.push('')
            emailLines.push(pdf_attachment)
          }
          
          // Add additional attachments if exists
          if (attachments && Array.isArray(attachments)) {
            attachments.forEach(attachment => {
              if (attachment.filename && attachment.content) {
                const contentType = attachment.type || 'application/octet-stream'
                emailLines.push(`--${boundary}`)
                emailLines.push(`Content-Type: ${contentType}; name="${attachment.filename}"`)
                emailLines.push(`Content-Disposition: attachment; filename="${attachment.filename}"`)
                emailLines.push('Content-Transfer-Encoding: base64')
                emailLines.push('')
                emailLines.push(attachment.content)
              }
            })
          }
          
          emailLines.push(`--${boundary}--`)
        } else {
          // Multipart alternative for text and HTML (no attachment)
          emailLines.push(`MIME-Version: 1.0`)
          emailLines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`)
          emailLines.push('')
          emailLines.push(`--${boundary}`)
          emailLines.push('Content-Type: text/plain; charset=utf-8')
          emailLines.push('Content-Transfer-Encoding: 7bit')
          emailLines.push('')
          emailLines.push(message)
          emailLines.push('')
          emailLines.push(`--${boundary}`)
          emailLines.push('Content-Type: text/html; charset=utf-8')
          emailLines.push('Content-Transfer-Encoding: 7bit')
          emailLines.push('')
          emailLines.push(`<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${htmlMessage}</pre>`)
          emailLines.push(`--${boundary}--`)
        }

        const rawEmail = emailLines.join('\r\n')

        // Encode email in base64url format (Gmail API requirement)
        const encodedEmail = Buffer.from(rawEmail)
          .toString('base64')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '')

        // Send email via Gmail API
        const gmailResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            raw: encodedEmail,
          }),
        })

        if (!gmailResponse.ok) {
          const errorData = await gmailResponse.json()
          console.error('Gmail API error:', errorData)
          
          if (gmailResponse.status === 401) {
            throw new Error('Gmail API: Authentication failed. Please log out and log in again to refresh your token.')
          }
          if (gmailResponse.status === 403) {
            throw new Error('Gmail API: Permission denied. Please ensure you granted Gmail send permission during login.')
          }
          
          throw new Error(`Gmail API error: ${errorData.error?.message || 'Failed to send email'}`)
        }

        const result = await gmailResponse.json()
        console.log('Email sent successfully via Gmail API:', result.id)
        return res.status(200).json({ 
          success: true, 
          message: 'Email sent successfully from your Gmail account',
          messageId: result.id 
        })
      } catch (gmailError) {
        console.error('Gmail API error:', gmailError)
        // Fall through to try SMTP if Gmail API fails
        console.log('Falling back to SMTP...')
      }
    }

    // Priority 2: Using SendGrid (recommended for production)
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Dynamic import for SendGrid (ES modules)
        const sgMail = (await import('@sendgrid/mail')).default
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
          to: to_email,
          cc: cc_email ? cc_email.split(',').map(email => email.trim()) : undefined,
          bcc: bcc_email ? bcc_email.split(',').map(email => email.trim()) : undefined,
          from: from_email || process.env.FROM_EMAIL,
          replyTo: reply_to || from_email,
          subject: subject,
          text: message,
          html: `<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</pre>`,
        }

        // Add PDF attachment if provided
        const msgAttachments = []
        if (pdf_attachment && pdf_filename) {
          msgAttachments.push({
            content: pdf_attachment,
            filename: pdf_filename,
            type: 'application/pdf',
            disposition: 'attachment',
          })
        }
        
        // Add additional attachments if provided
        if (attachments && Array.isArray(attachments)) {
          attachments.forEach(attachment => {
            if (attachment.filename && attachment.content) {
              msgAttachments.push({
                content: attachment.content,
                filename: attachment.filename,
                type: attachment.type || 'application/octet-stream',
                disposition: 'attachment',
              })
            }
          })
        }
        
        if (msgAttachments.length > 0) {
          msg.attachments = msgAttachments
        }

        await sgMail.send(msg)
        return res.status(200).json({ success: true, message: 'Email sent successfully' })
      } catch (sgError) {
        console.error('SendGrid error:', sgError)
        throw sgError
      }
    }

    // Using Gmail SMTP with App Password
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = (await import('nodemailer')).default

        // Clean the app password (remove spaces, quotes, and any whitespace)
        const cleanPassword = process.env.SMTP_PASS.replace(/\s+/g, '').replace(/['"]/g, '').trim()
        const cleanUser = process.env.SMTP_USER.trim().toLowerCase()

        // Debug logging (without exposing password)
        console.log('SMTP Config:', {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: cleanUser,
          passwordLength: cleanPassword.length,
          passwordStartsWith: cleanPassword.substring(0, 2) + '...'
        })

        // Validate password length
        if (cleanPassword.length !== 16) {
          throw new Error(`SMTP_PASS must be exactly 16 characters (currently ${cleanPassword.length}). Remove all spaces from your Gmail App Password.`)
        }

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: cleanUser,
            pass: cleanPassword,
          },
          tls: {
            rejectUnauthorized: false,
            ciphers: 'SSLv3'
          },
          debug: false,
          logger: false
        })

        // Verify connection with better error handling
        try {
          await transporter.verify()
          console.log('SMTP connection verified successfully')
        } catch (verifyError) {
          console.error('SMTP verification failed:', verifyError.message)
          if (verifyError.code === 'EAUTH') {
            throw new Error(`SMTP Authentication Failed. Please check:\n1. Gmail App Password is correct (16 characters, no spaces)\n2. Email address (${cleanUser}) matches the one used to create App Password\n3. 2-Step Verification is enabled on your Google account\n4. App Password hasn't been revoked\n\nTo fix: Go to https://myaccount.google.com/security → App passwords → Create new password`)
          }
          throw verifyError
        }

        // Use logged-in user's email as sender (SMTP_USER is only for authentication)
        const mailOptions = {
          from: `"${from_name}" <${from_email || cleanUser}>`,
          to: to_email,
          cc: cc_email || undefined,
          bcc: bcc_email || undefined,
          bcc: bcc_email || undefined,
          replyTo: reply_to || from_email,
          subject: subject,
          text: message,
          html: `<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</pre>`,
        }

        // Add PDF attachment if provided
        const mailAttachments = []
        if (pdf_attachment && pdf_filename) {
          mailAttachments.push({
            filename: pdf_filename,
            content: pdf_attachment,
            encoding: 'base64',
            contentType: 'application/pdf',
          })
        }
        
        // Add additional attachments if provided
        if (attachments && Array.isArray(attachments)) {
          attachments.forEach(attachment => {
            if (attachment.filename && attachment.content) {
              mailAttachments.push({
                filename: attachment.filename,
                content: attachment.content,
                encoding: 'base64',
                contentType: attachment.type || 'application/octet-stream',
              })
            }
          })
        }
        
        if (mailAttachments.length > 0) {
          mailOptions.attachments = mailAttachments
        }

        await transporter.sendMail(mailOptions)
        console.log('Email sent successfully')
        return res.status(200).json({ success: true, message: 'Email sent successfully via Gmail SMTP' })
      } catch (smtpError) {
        console.error('SMTP error details:', {
          code: smtpError.code,
          command: smtpError.command,
          response: smtpError.response,
          message: smtpError.message
        })
        
        // Provide more helpful error messages
        let errorMessage = 'SMTP error: ' + smtpError.message
        if (smtpError.code === 'EAUTH' || smtpError.responseCode === 535) {
          errorMessage = `SMTP Authentication Failed (Error 535). Please verify in Vercel environment variables:\n\n1. SMTP_USER: Must be the exact Gmail address used to create App Password\n2. SMTP_PASS: Must be exactly 16 characters with NO spaces\n   - Example: "abcd efgh ijkl mnop" → "abcdefghijklmnop"\n   - Remove ALL spaces and quotes\n\n3. Ensure 2-Step Verification is enabled\n4. Create a new App Password if needed: https://myaccount.google.com/security → App passwords\n\nCurrent SMTP_USER: ${process.env.SMTP_USER || 'not set'}`
        }
        
        throw new Error(errorMessage)
      }
    }

    // If no email service configured, return error
    return res.status(500).json({
      error: 'Email service not configured. Please set up SendGrid (SENDGRID_API_KEY) or Gmail SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS) in Vercel environment variables, or use EmailJS instead.',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    })
  }
}

