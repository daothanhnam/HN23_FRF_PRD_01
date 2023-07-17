import { useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);

  const increment = (num: number) => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2> Count {count}</h2>
      <button onClick={() => increment(2)}>Increment</button>
    </div>
  );
};

export default Couter;
