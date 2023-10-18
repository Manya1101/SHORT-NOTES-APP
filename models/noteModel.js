const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },

   title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
   },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("notes", notesSchema);
module.exports = { Note };