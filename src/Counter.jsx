import { useState } from "react";
import { number } from "prop-types";

Counter.propTypes = {
  initialValue: number,
  step: number,
};

export default function Counter({ initialValue = 0, step = 1 }) {
  // TODO : begin with another number
  // TODO : increment/decrement by another number
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </>
  );
}
