const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); //ejs를 담을 views 폴더 경로 설정

//라우팅(routing):경로설정
//브라우저에서 어떤 url로 접속했을때 어떤 페이지를 보여줄것인가

//localhost:port/ 접속했을때 index.ejs를 보여주겠다.
app.get("/", function (req, res) {
  //views/index.ejs파일찾아서 응답
  res.render("index");
});
app.listen(PORT, function () {
  console.log("웹서버실행");
  console.log(`http://localhost:${PORT}`);
});
