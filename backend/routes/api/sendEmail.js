const express = require("express");
const router = express.Router();
const sendEmailController = require("../../controllers/sendEmailController");

router.post("/", sendEmailController.handleSendEmail);

module.exports = router;