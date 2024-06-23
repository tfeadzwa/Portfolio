const Blog = require("../models/Blog");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc GET all blogs
// @route GET /blogs
// @access Private
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = Blog.find().lean();

  if (!blogs?.length) {
    return res.status(400).json({ message: "No users found!" });
  }

  return res.json(blogs);
});

// @desc Create blog
// @route POST /blog
// @access Private
const createNewBlog = asyncHandler(async (req, res) => {
  const { title, author, content, tags, category } = req.body;

  // Check for required fields
  if (
    !title ||
    !author?.name ||
    !author?.email ||
    !Array.isArray(content) ||
    !content.length ||
    !category
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const duplicate = await Blog.findOne({ title, "author.email": author.email })
    .lean()
    .exec();
  if (duplicate) {
    return res.status(409).json({
      message: "Blog with the same title by this author already exists!",
    });
  }

  const newBlog = new Blog({
    title,
    author,
    content,
    tags,
    category,
    lastUpdatedDate: Date.now(),
  });

  try {
    // Save the new blog
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Received invalid blog data", error: err.message });
  }
});

module.exports = { getAllBlogs, createNewBlog };
