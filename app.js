const express = require('express');
const app = express();
app.use(express.json());
const { resolve } = require("path");

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

app.listen(3000, () => console.log(`Node server listening on port ${3000}!`));
