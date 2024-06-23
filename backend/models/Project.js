const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },

  tools: {
    type: String,
    required: true,
  },

  demoUrl: {
    type: String,
    trim: true,
    required: true,
  },

  gitUrl: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
