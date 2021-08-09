const express = require('express');
const app = express();
app.use(express.json());
const { resolve } = require("path");

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    // Display checkout page
    const path = resolve("./index.html");
    res.send("HELLO");
  });

  app.get("/style.css", (req, res) => {
    // Display checkout page
    const path = resolve("./style.css");
    res.sendFile(path);
  });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
