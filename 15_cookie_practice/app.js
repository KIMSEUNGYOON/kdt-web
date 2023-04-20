const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/setCookie", (req, res) => {
  //쿠키설정
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키설정완료");
});
app.use(cookieParser());
const cookieConfig = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24, //24H
};
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
