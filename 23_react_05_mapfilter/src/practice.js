import { usestate } from "react";
import LifeCycleFuncChild from "./practice1";

const LifeCycleFunc = () => {
  const [number, setNumber] = usestate(5);
  const [visible, setVisible] = usestate(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  );
};
export default LifeCycleFunc;
