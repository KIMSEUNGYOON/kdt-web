//import PropTypes from "prop-types";
import { useState } from "react";

function FunctionComponent() {
  //const list = 'abc'
  const [counter, setCounter] = useState(0);
  console.log(counter);
  //console.log(props);
  //props = {name:"둘리", age: "400"}
  const onClick = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };
  const [enter, setEnter] = useState(" ");
  const onClick2 = () => {
    setEnter("입장하셨습니다");
  };
  const onClick3 = () => {
    setEnter("퇴장하셨습니다");
  };
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{counter}</h5>
      <div>{enter}</div>
      <button onClick={onClick}>숫자업</button>
      <button onClick={onClick2}>입장하기</button>
      <button onClick={onClick3}>퇴장하기</button>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
    </div>
  );
}
// FunctionComponent.defaultProps = {
//   name: "윤성인",
//   age: "11",
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// const FunctionComponent=()=>{

// }
export default FunctionComponent;
