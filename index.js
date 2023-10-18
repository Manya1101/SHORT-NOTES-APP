const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose =  require("mongoose");
const notesRouter = require("./routes/notesRoute");
require("dotenv").config();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/notes",notesRouter);

mongoose
  .connect(process.env.DB)
  .then(() => 
  {
    console.log("connection is successful");
  })
  .catch((e) => 
  {
    console.log(e);
  });

app.listen( process.env.port, () => {console.log(`Server Started at port ${port}`);});

