const router = require("express").Router();


// Creates a re-usable variable to store data in data json file.
const notesDataPath = path.join(__dirname, "../data/notes.json");



router.get("/api/notes", (req, res) =>{
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


router.post("/api/notes", (req, res) =>{

});

router.delete("/api/notes/id", (req, res) => {

});








* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
