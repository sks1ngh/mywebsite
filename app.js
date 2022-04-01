var express = require("express");
var app = express();
var ejs = require("ejs");
// const https = require("https");
// const fs = require("fs");
var jokes = require("./jokes");
require("dotenv").config();

// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem"),
// };

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("scripts"));
app.use(express.static("files"));

app.get("/", (req, res) => {
  res.render("index.ejs", { jokes: jokes });
});
var server_host = process.env.YOUR_HOST || "0.0.0.0";
app.listen(process.env.PORT || 3000, server_host, () =>
  console.log("Server started!")
);

// https.createServer(options, app).listen(3000);
