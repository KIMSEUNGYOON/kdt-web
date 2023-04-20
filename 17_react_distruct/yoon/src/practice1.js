import { useState } from "react";
const Prob1 = () => {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색 글씨");

  const onClickRed = () => {
    setText("빨간색 글씨");
    setColor("red");
  };
  const onClickBlue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };
  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </div>
  );
};

export default Prob1;
