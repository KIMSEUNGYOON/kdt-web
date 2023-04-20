import React from "react";

class ClassComponent extends React.Component {
  render() {
    console.log(this.props);

    const { name, age } = this.props;
    return (
      <div>
        <h1>hello world , class component</h1>
        <h2>{name}</h2>
        <h5>{age}</h5>
      </div>
    );
  }
}
ClassComponent.defaultTypes = {
  name: "abc",
  age: "11",
};

export default ClassComponent;
