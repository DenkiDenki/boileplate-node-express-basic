let express = require("express");
let app = express();
require("dotenv").config();
const SECRET = process.env.MESSAGE_STYLE;
console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//middleware to static files
app.use("/public", express.static(__dirname + "/public"));
//api endpoint json
app.get("/json", (req, res) => {
  if (SECRET == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
