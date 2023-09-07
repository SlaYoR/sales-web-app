import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Counter />
      <Counter initialValue={12} />
      <Counter initialValue={20} step={10} />
    </>
  );
}
