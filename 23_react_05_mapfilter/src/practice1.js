import { useState } from "react";
import { useEffect } from "react";

const LifeCycleFuncChild = (props) => {
  const { number } = props;
  const { text, setText } = useState("");

  useEffect(() => {
    console.log("mount~");

    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("mount or update");
  });

  useEffect(() => {
    console.log("update");
  }, [text]);

  return (
    <div>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </div>
  );
};
export default LifeCycleFuncChild;
