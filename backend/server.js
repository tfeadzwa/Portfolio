const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const port = process.env.PORT || 3500;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

//POST Route
router.post("/post", async (req, res) => {
  // destructure response token
  const { token } = req.body;

  try {
    // sending secret key and response token to Google Recaptcha API for authentication
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    // check response status and send back to the client side
    if (response.data.success) {
      res.send("Human 👨 👩");
    } else {
      res.send("Robot 🤖");
    }
  } catch (err) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(err);
    res.status(500).send("Error verifying reCAPTCHA");
  }
});

app.listen(port, () => console.log(`Server running on ${port}`));
