// Vercel Serverless Function for uploading PDFs to Google Drive

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

  try {
    const { pdfBase64, filename, folderId, userDetails } = req.body

    if (!pdfBase64 || !filename) {
      return res.status(400).json({ error: 'PDF base64 data and filename are required' })
    }

    // Get Google Drive credentials from environment variables
    const serviceAccountKey = process.env.GOOGLE_DRIVE_SERVICE_ACCOUNT_KEY
    const driveFolderId = folderId || process.env.GOOGLE_DRIVE_FOLDER_ID

    if (!serviceAccountKey) {
      return res.status(500).json({ error: 'Google Drive service account key not configured' })
    }

    if (!driveFolderId) {
      return res.status(500).json({ error: 'Google Drive folder ID not configured' })
    }

    // Parse service account key
    let serviceAccount
    try {
      serviceAccount = typeof serviceAccountKey === 'string' 
        ? JSON.parse(serviceAccountKey) 
        : serviceAccountKey
    } catch (e) {
      return res.status(500).json({ error: 'Invalid service account key format' })
    }

    // Import googleapis dynamically (not installed by default)
    const { google } = await import('googleapis')

    // Create JWT client for service account
    const jwtClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      ['https://www.googleapis.com/auth/drive']
    )

    // Authenticate
    await jwtClient.authorize()

    // Create Drive API client
    const drive = google.drive({ version: 'v3', auth: jwtClient })

    // Convert base64 to buffer
    const fileBuffer = Buffer.from(pdfBase64, 'base64')

    // Prepare file metadata with user details in description
    const fileMetadata = {
      name: filename,
      parents: [driveFolderId],
      description: userDetails ? `User: ${userDetails.name || 'N/A'}\nEmail: ${userDetails.email || 'N/A'}\nWaqf: ${userDetails.waqfName || 'N/A'}\nState: ${userDetails.state || 'N/A'}\nDate: ${new Date().toISOString()}` : undefined
    }

    // Upload file to Drive
    const media = {
      mimeType: 'application/pdf',
      body: fileBuffer
    }

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, name, webViewLink'
    })

    return res.status(200).json({
      success: true,
      fileId: response.data.id,
      fileName: response.data.name,
      webViewLink: response.data.webViewLink,
      message: 'PDF uploaded to Google Drive successfully'
    })

  } catch (error) {
    console.error('Error uploading to Google Drive:', error)
    return res.status(500).json({
      error: 'Failed to upload PDF to Google Drive',
      details: error.message
    })
  }
}

