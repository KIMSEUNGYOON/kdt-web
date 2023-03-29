const { query } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  const myTitle = "폼실습하자";
  res.render("index", { title: myTitle });
});

app.get("/getForm", function (req, res) {
  console.log(req, query);
  res.send("get 요청성공");
});
