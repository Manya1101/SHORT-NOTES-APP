const express = require("express");
const { Note } = require("/noteStruct");
const notesRouter= express.Router();

notesRouter.post("/", auth, async (req, res) => {
  try {
    const { id ,title, content } = req.body;
      let newNote = new Note({
      id,
      userId,
      title,
      content,
    });
    newNote = await newNote.save();
    res.json(newNote);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

notesRouter.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const notes = await Note.find({ id });
    res.json(notes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

notesRouter.put("/", auth, async (req, res) => {
  try {
    const { id,title, content } = req.body;
    await Note.deleteOne({ id: id });
    let updatedNote = new Note({
      id,
      userId,
      title,
      content,
    });
    updatedNote = await updatedNote.save();
    res.json({ msg: "note updated successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

notesRouter.delete("/", auth, async (req, res) => {
  try {
    const { id } = req.body;
    await Note.deleteOne({ id: id });
    res.json({ msg: "Succesfully Deleted" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = notesRouter;