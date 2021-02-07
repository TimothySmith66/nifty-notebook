// Dependencies:
const path = require("path");
const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
// To set up Express App port
const app = express();
const PORT = process.env.PORT || 3001;

// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));




//port listener
app.listen(PORT, () => {
    console.log("App listening at http://localhost:" + PORT);
  });