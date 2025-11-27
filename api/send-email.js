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
          from: process.env.FROM_EMAIL || from_email,
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

    // If no email service configured, return error
    return res.status(500).json({
      error: 'Email service not configured. Please set SENDGRID_API_KEY and FROM_EMAIL in Vercel environment variables, or use EmailJS instead.',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    })
  }
}

