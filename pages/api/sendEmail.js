import nodemailer from 'nodemailer'

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      auth: {
        user: 'polentamusiikki@gmail.com',
        pass: 'pcgNHfIY72GZD9Q0',
      },
    })

    const message = {
      from: 'polentamusiikki@gmail.com',
      to: 'polentamusiikki@gmail.com',
      subject: `POLENTAMUSIC.COM - new message from ${req.body.name}`,
      html: `
        <html>
          <head>
            <style>
              /* Define your CSS styles here */
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
              }
              
              h1 {
                font-size: 24px;
                margin-bottom: 20px;
                color: #333333;
              }
              
              p {
                margin-bottom: 20px;
                margin-top: 20px;
              }
              
              ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
              }
              
              li {
                margin-bottom: 10px;
              }
              
              /* Define your custom styles here */
              .message-container {
                background-color: #f5f5f5;
                padding: 25px;
                border-radius: 10px;
              }
              
              .message-container h2 {
                margin-top: 0;
                margin-bottom: 6px;
              }
            </style>
          </head>
          <body>
            <div class="message-container">
              <h2>New message from www.polentamusic.com</h2>
              <p>${req.body.message}</p>
              <ul>
                <li><strong>Name:</strong> ${req.body.name}</li>
                <li><strong>Email:</strong> ${req.body.email}</li>
                <li><strong>Phone:</strong> ${req.body.phone}</li>
              </ul>
            </div>
          </body>
        </html>
      `,
    }

    try {
      await transporter.sendMail(message)

      res.status(200).send({ success: 'Email sent successfully' })
    } catch (error) {
      res.status(500).send({ error: 'Error sending email' })
    }
  }
}