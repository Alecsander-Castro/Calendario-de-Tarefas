const mongoose = require("mongoose");

const taskShchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  date: { type: String, require: true },
  duration: { type: Number, require: true },
});

module.exports = mongoose.model("Task", taskShchema);
