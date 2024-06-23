const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
});

const paragraphSchema = new mongoose.Schema({
  paragraph: {
    type: String,
    required: true,
  },
  images: [imageSchema],
});

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      name: {
        type: String,
        default: "Tafadzwa Tanyanyiwa",
      },
      email: {
        type: String,
        default: "tfadzwa02@gmail.com",
      },
    },
    content: [paragraphSchema],
    tags: [String],
    category: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    lastUpdatedDate: {
      type: Date,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
