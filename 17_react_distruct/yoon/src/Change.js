import React, { useState } from "react";

const Change = () => {
  const [text, setText] = useState("검정색글씨");
  const [color, setColor] = useState("black");

  const Red = () => {
    text("빨간색글씨");
    setText("red");
  };
  const Blue = () => {
    color("파란색글씨");
    setColor("blue");
  };
  return (
    <div>
      <div style={{ color: `${text[1]}` }}>{text[0]}</div>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>
    </div>
  );
};
export default Change;
