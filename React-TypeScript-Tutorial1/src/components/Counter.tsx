import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Cups Ordered: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add 1 More Cup</button>
    </div>
  );
};
