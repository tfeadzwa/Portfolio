const express = require("express");
const router = express.Router();
const blogsController = require("../../controllers/blogsController");

router
  .route("/")
  .get(blogsController.getAllBlogs)
  .post(blogsController.createNewBlog);

module.exports = router;
