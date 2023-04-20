const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // 최초 입장시 (연결)
  // socket.id: 소켓 고유 아이디 -> socket 은 웹 페이지별로 id 생성!
  // => 크롬에서 탭 2개 띄우면 socket.id 는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // [실습1]
  socket.on("hello", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    // server -> client 보낼 때
    socket.emit("helloKr", { who: "hello", msg: "안녕~~~" });
  });
  socket.on("study", (data) => {
    console.log(`${data.who}:${data.msg}`);
    socket.emit("studyKr", { who: "study", msg: "공부좀해라" });
  });
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
