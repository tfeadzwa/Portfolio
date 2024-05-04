const axios = require("axios");

const handleCaptcha = async (req, res) => {
  // destructure response token
  const { token } = req.body;

  try {
    // sending secret key and response token to Google Recaptcha API for authentication
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    // check response status and send back to the client side
    if (response.data.success) {
      res.status(200).send("Human 👨 👩");
    } else {
      res.send("Robot 🤖");
    }
  } catch (err) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(err);
    res.status(500).send("Error verifying reCAPTCHA");
  }
};

module.exports = { handleCaptcha };
