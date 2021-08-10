const express = require('express');
const app = express();
app.use(express.json());
const { resolve } = require("path");
require('dotenv').config()

var port = process.env.PORT || 8080;

//app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    // Display checkout page
    path = resolve("./index.html")
    res.sendFile(path);
  });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
