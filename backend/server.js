const corsOptions = require("./config/corsOptions");
const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const { connectDB } = require("./config/dbConn");
require("dotenv").config();

const PORT = process.env.PORT || 3500;

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
// email route
app.use("/send-email", require("./routes/api/sendEmail"));
// captcha route
app.use("/captcha", require("./routes/api/captcha"));
// blogs
app.use("/blog", require("./routes/api/blog"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(`Database error: ${err.message}`);
});
