import "./App.css";
import Food from "./food";
function App() {
  return (
    <div>
      <Food />
      <div className="book">
        <h2 className="book1">이번주 베스트 셀러</h2>
        <br />
        <div className="book2">나의 하루는 4시 40분에 시작된다</div>
        <div className="book3">
          <ul>저자: 김유진</ul>
          <ul>판매가: 13,500원</ul>
          <ul>구분: 자기계발서</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
