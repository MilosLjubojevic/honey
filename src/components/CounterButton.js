import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(1);
  let broj = count;
  const minusCount = () => {
    broj = count - 1;
    setCount(broj);
  };
  const plusCount = () => {
    broj = count + 1;
    setCount(broj);
  };

  return (
    <>
      <div className="flex justify-center">
        <button className="mx-2" onClick={minusCount}>
          -
        </button>
        <span className="border border-black px-2 bg-white">{broj}</span>
        <button className="mx-2" onClick={plusCount}>
          +
        </button>
      </div>
    </>
  );
}

export default CounterButton;
