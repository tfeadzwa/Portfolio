const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3500;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
// email route
app.use("/send-email", require("./routes/api/sendEmail"));
// captcha route
app.use("/captcha", require("./routes/api/captcha"));

app.listen(port, () => console.log(`Server running on ${port}`));
