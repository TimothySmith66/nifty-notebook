// The path package will be used to construct paths to the html files.
const path = require("path");

const router = require("express").Router();



router.get("/notes", (req, res) =>{
res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    module.exports = router;