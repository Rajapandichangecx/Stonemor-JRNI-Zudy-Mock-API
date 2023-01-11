const express = require("express");
const ContactJSON = require("./json/contact.json");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to Dummy API");
});

app.get("/contact", (req, res) => res.json(ContactJSON));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
