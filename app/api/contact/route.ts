import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      )
    }

    // Configure the mail transporter
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD
    const recipient = process.env.CONTACT_EMAIL_TO || process.env.RECIPIENT_EMAIL || "srisaiselhs2000@gmail.com"

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Prepare human-readable subject display
    const subjectsMap: { [key: string]: string } = {
      admissions: "Admissions Inquiry",
      academics: "Academic Programs",
      visit: "Schedule a Visit",
      feedback: "Feedback",
      other: "Other Inquiry",
    }
    const displaySubject = subjectsMap[subject] || subject

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New SEHS Website Inquiry: ${displaySubject} - ${firstName} ${lastName}`,
      text: `
Sai English High School - New Inquiry

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${displaySubject}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New SEHS Contact Form Submission</title>
        </head>
        <body style="font-family: 'Open Sans', system-ui, -apple-system, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; -webkit-font-smoothing: antialiased;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
            
            <!-- Header (School brand deep color) -->
            <div style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; font-family: 'Merriweather', Georgia, serif; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: 0.5px;">Sai English High School</h1>
              <p style="color: #94a3b8; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">Online Contact Form Inquiry</p>
            </div>

            <!-- Content Area -->
            <div style="padding: 40px;">
              <span style="display: inline-block; padding: 6px 14px; font-size: 12px; font-weight: 600; color: #b45309; background-color: #fef3c7; border-radius: 9999px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.5px;">
                ${displaySubject}
              </span>
              
              <h2 style="font-family: 'Merriweather', Georgia, serif; color: #0f172a; font-size: 18px; margin: 0 0 16px 0; font-weight: 700;">Inquiry Details</h2>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tbody>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #475569; width: 120px;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #475569; width: 120px;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #475569; width: 120px;">Phone</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
                  </tr>
                </tbody>
              </table>
              
              <!-- Message Box -->
              <div style="background-color: #f8fafc; border-left: 4px solid #d97706; padding: 24px; border-radius: 8px; margin-top: 20px;">
                <div style="font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Message:</div>
                <p style="color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>

            <!-- Footer (School details matching theme) -->
            <div style="background-color: #f1f5f9; padding: 28px 40px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 6px 0;">This email was automatically generated and sent from the Sai English High School website portal.</p>
              <p style="margin: 0; font-weight: 500;">&copy; ${new Date().getFullYear()} Sai English High School. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully!" })
  } catch (error: any) {
    console.error("Error in contact API:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email.", error: error.message },
      { status: 500 }
    )
  }
}
