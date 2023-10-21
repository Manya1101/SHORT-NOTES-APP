const express = require("express");
const notesRouter= express.Router();
const notesController =require("../controllers/notesController")

notesRouter.get("/get", notesController.getNotes );
notesRouter.post("/add",notesController.createNote );
notesRouter.delete("/delete/:id", notesController.deleteNote);
notesRouter.put("/update/:id", notesController.updateNote);

module.exports = notesRouter;



























