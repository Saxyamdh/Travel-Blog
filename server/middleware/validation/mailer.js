const mailer = require("nodemailer");

const sendEmail = async (email, code) => {
  try {
    const transporter = mailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      from: process.env.EMAIL,
      tls: {
        ciphers: 'SSLv3',
      },
    });

    transporter.verify().then(() => {
      console.log("Hotmail Authentication successful");
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: process.env.SUBJECT,
      text: `Your verification code is: ${code}`, // Plain text version
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* Your CSS styles here */
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to TravelBlog!</h1>
            <p>Thank you for choosing to be our Bud. We're thrilled to have you on board.</p>
            <p>Your verification code is: <span class="verification-code">${code}</span></p>
            <p>Enter this code to complete the registration process.</p>
          </div>
          <footer>
            &copy; 2024 Travel Bud. All rights reserved.
          </footer>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
