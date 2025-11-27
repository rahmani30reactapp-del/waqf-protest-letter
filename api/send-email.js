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
    from_name,
    from_email,
    subject,
    message,
    reply_to,
  } = req.body

  // Validate required fields
  if (!to_email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Using SendGrid (recommended for production)
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Dynamic import for SendGrid (ES modules)
        const sgMail = (await import('@sendgrid/mail')).default
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
          to: to_email,
          cc: cc_email ? cc_email.split(',').map(email => email.trim()) : undefined,
          from: from_email || process.env.FROM_EMAIL,
          replyTo: reply_to || from_email,
          subject: subject,
          text: message,
          html: `<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</pre>`,
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

        // Clean the app password (remove spaces and quotes)
        const cleanPassword = process.env.SMTP_PASS.replace(/\s+/g, '').replace(/['"]/g, '')
        const cleanUser = process.env.SMTP_USER.trim()

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: cleanUser,
            pass: cleanPassword, // Gmail App Password (cleaned)
          },
          tls: {
            rejectUnauthorized: false
          }
        })

        // Verify connection
        await transporter.verify()

        // Use logged-in user's email as sender (SMTP_USER is only for authentication)
        const mailOptions = {
          from: `"${from_name}" <${from_email || cleanUser}>`,
          to: to_email,
          cc: cc_email || undefined,
          replyTo: reply_to || from_email,
          subject: subject,
          text: message,
          html: `<pre style="font-family: monospace; white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</pre>`,
        }

        await transporter.sendMail(mailOptions)
        return res.status(200).json({ success: true, message: 'Email sent successfully via Gmail SMTP' })
      } catch (smtpError) {
        console.error('SMTP error:', smtpError)
        
        // Provide more helpful error messages
        let errorMessage = 'SMTP error: ' + smtpError.message
        if (smtpError.code === 'EAUTH') {
          errorMessage = `SMTP error: Invalid login credentials. Please verify:\n- Gmail App Password is correct (16 characters, no spaces)\n- Email address matches the one used to create App Password\n- 2-Step Verification is enabled\n- App Password hasn't been revoked`
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

