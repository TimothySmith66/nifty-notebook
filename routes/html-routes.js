GET /notes - Should return the notes.html file.


GET * - Should return the index.html file.

app.get("/notes", (req, res) =>{
res.sendFile(path.join(__dirname, "view.html"));
});