import { useState } from "react";

function TextChange() {
  const [text, setText] = useState("Hello World");

  const change = () => {
    setText("bye World");
  };

  return (
    <div>
      <div>{text}</div>
      <button onClick={change}>클릭</button>
    </div>
  );
}
export default TextChange;
