const { Notes} = require('../models/noteModel');

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the note' });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Error getting notes' });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the note' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndRemove(id);
    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the note' });
  }
};

module.exports = { getNotes, createNote, deleteNote, updateNote };
