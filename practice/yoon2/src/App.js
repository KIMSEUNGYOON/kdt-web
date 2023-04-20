import ClassComponent from "./ClassComponet";
import FunctionComponent from "./FunctionComponent";
import clock from "./clock";
function App() {
  return (
    <div>
      <ClassComponent name="홍길동" age="13" />
      <FunctionComponent />
      <clock />
    </div>
  );
}

export default App;
