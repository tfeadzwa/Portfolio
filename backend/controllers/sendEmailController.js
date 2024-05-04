const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const handleSendEmail = async (req, res) => {
  const { email, fullName, subject, message } = req.body;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: "tfadzwa02@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `${fullName} <tfadzwa02@gmail.com>`,
      to: "tfeadzwa@gmail.com",
      subject,
      text: message,
      replyTo: email,
      html: `
      <body style="font-family: Sans-serif">
        <div style="font-size: 1rem">${message}</div>
      </body>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email", error);
        res.status(500).send("Error sending email!");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully!");
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = { handleSendEmail };
