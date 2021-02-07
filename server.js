// Dependencies:
const path = require("path");
const express = require("express");
const fs = require("fs");

// To set up Express App port
const app = express();
const PORT = process.env.PORT || 3001;

// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Will display all notes
app.get("/api/notes", (req, res) => {
  return res.json(notes);
});


//port listener
app.listen(PORT, () => {
    console.log("App listening at http://localhost: " + PORT);
  });