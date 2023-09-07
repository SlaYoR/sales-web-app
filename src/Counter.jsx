import { number } from "prop-types";
import useCounter from "./useCounter.js";

Counter.propTypes = {
  initialValue: number,
  step: number,
};

export default function Counter({ initialValue = 0, step = 1 }) {
  // TODO : begin with another number
  // TODO : increment/decrement by another number
  const [counter, increment, decrement] = useCounter(initialValue, step);

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </>
  );
}
