const express = require("express");
const router = express.Router();
const captchaController = require("../../controllers/captchaController");

router.post("/", captchaController.handleCaptcha);

module.exports = router;
