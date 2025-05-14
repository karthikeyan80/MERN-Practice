import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    document.title = `incremented ${value}`;
  }, [value]); 
  return (
    <div>
      <h1> {value}</h1>
      <button type="submit" onClick={handleIncrement}>
        Click me
      </button>
    </div>
  );
};

export default CounterEffect;
