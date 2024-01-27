const mailer = require("nodemailer");

const sendEmail = async (email, code) => {
  try {
    const transporter = mailer.createTransport({
      host: "smtp-mail.outlook.com",
      service: process.env.SERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    transporter .verify() .then(() =>{
        console.log("Hotmail Authentication successfull")
    })
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: process.env.SUBJECT,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 20px;
            }
    
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
              color: #007BFF;
            }
    
            p {
              margin-bottom: 20px;
            }
    
            .verification-code {
              background-color: rgba(255, 195, 0, 0.64);;
              color: #000;
              padding: 10px;
              font-size: 18px;
              border-radius: 4px;
            }
    
            footer {
              margin-top: 20px;
              text-align: center;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to TravelBud!</h1>
            <p>Thank you for choosing for being our <b>Bud</b>. We're thrilled to have you on board.</p>
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
    return error;
  }
};

module.exports = sendEmail;
