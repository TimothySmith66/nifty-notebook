const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// Creates a re-usable variable to store data in data json file.
const notesDataPath = path.join(__dirname, "../db/db.json");
// const notesarray = JSON.parse(notesDataPath);
// console.log(notesarray)
x = notesDataPath[6];
console.log(x)
module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    // read and parse data from file.
    fs.readFile(notesDataPath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        // send an error response
        return res.status(500).end();
      }
      // parse json data and send response
      const noteData = JSON.parse(data);
      return res.json(noteData);
    });
  });

  app.post("/api/notes", (req, res) => {
    fs.readFile(notesDataPath, "utf8", (err, data) => {
      const noteData = JSON.parse(data);
      noteData.push(req.body);
      // save table data to file
      fs.writeFile(notesDataPath, JSON.stringify(noteData), (err) => {
        
        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        return res.json(noteData);
      });
    });
  });
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile(notesDataPath, "utf8", (err, data) => {
      const noteData = JSON.parse(data);
      const newNotes = [];
      for (let i = 0; i < noteData.length; i++){
        if (req.params.id !== noteData[i].id){
          newNotes.push(noteData[i])
        }
      }
      fs.writeFile(notesDataPath, JSON.stringify(newNotes), (err) => {
        
        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        return res.json(newNotes);
      });
    })
  });
};

