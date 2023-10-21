const express = require('express');
const mongoose =  require("mongoose");
const notesRouter = require("./router/notesRouter");
require("dotenv").config();
const app = express();
const port = process.env.port||3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/notes", notesRouter);

mongoose
  .connect(process.env.DB)
  .then(() => 
  {
    console.log("connection is successful");
  })
  .catch((e) => 
  {

    console.log(e);
  });app.listen( process.env.port, () => {console.log(`Server Started at port ${port}`);});