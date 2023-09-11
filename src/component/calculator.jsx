import React, { Component, useState } from "react";

const Calculator = () => {
  const [asnwer, setAnswer] = useState(0);
  const [value, setValue] = useState("");

  const handelValue = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleAdd = () => {
    setAnswer(Number(asnwer) + Number(value));
    setValue("");
  };
  const handleSubtract = (e) => {
    setAnswer(Number(asnwer) - Number(value));
    setValue("");
  };
  const handleDivide = (e) => {
    Number(value) < 1
      ? alert("cant devide by 0 or a nigative number")
      : setAnswer(Number(asnwer) / Number(value));
    setValue("");
  };
  const handleMultiply = (e) => {
    setAnswer(Number(asnwer) * Number(value));
    setValue("");
  };
  const handleResetInput = (e) => {
    setValue("");
  };
  const handleResetResult = (e) => {
    setAnswer(0);
  };

  return (
    <>
      <div className="calculator-container">
        <h1>My Simple Calculator</h1>
        <input value={value} onChange={handelValue} type="number" />
        <h3>Result : {asnwer}</h3>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleSubtract}>subtract</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
        <button onClick={handleResetInput}>Reset Input</button>
        <button onClick={handleResetResult}>Reset Result</button>
      </div>
    </>
  );
};

export default Calculator;
