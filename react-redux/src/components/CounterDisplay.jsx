import React from "react";
import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <span>{count}</span>
    </div>
  );
}

export default CounterDisplay;
