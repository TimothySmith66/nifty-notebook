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
app.use(express.static("public"))
