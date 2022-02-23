import Display from "./Display";
import Add from "./Add";
import Decrease from "./Decrease";
import Double from "./Double";
import Triple from "./Triple";
import Clear from "./Clear";
import { useState } from "react";

function Counter(props) {
  const [newCounter, setNewCounter] = useState(0);
  const handleAdd = () => {
    setNewCounter(newCounter + 1);
  };

  const handleDecrease = () => {
    setNewCounter(newCounter - 1);
  };

  const handleDouble = () => {
    setNewCounter(newCounter * 2);
  };

  const handleTriple = () => {
    setNewCounter(newCounter * 3);
  };

  const handleClear = () => {
    setNewCounter(0);
  };

  return (
    <div className="d-grid gap-2 ">
      <Display number={newCounter} />
      <div className="d-grid  gap-2 d-md-flex justify-content-center">
        <Add onAdd={handleAdd} number={newCounter} />
        <Decrease onDecrease={handleDecrease} number={newCounter} />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <Double onDouble={handleDouble} />
        <Triple onTriple={handleTriple} />
      </div>
      <Clear onClear={handleClear} />
    </div>
  );
}
export default Counter;
