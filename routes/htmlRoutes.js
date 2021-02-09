// The path package will be used to construct paths to the html files.
const path = require("path");

const router = require("express").Router();

module.exports = function (app) {
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
