//import React from "react";
//import { useState } from "react";
//import { Component } from "react";

//실습1
/*class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </div>
    );
  }
}*/
//실습2
/*const Counter2 = () => {
  const [number, setCounter] = useState("0");
  const increase = () => {
    setCounter(number + 1);
  };
  const decrease = () => {
    setCounter(number - 2);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>-2감소</button>
    </div>
  );
};

//export default Counter;
//export default Counter2;
*/
