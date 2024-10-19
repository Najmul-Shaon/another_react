import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCOunt = count + 1;
    setCount(newCOunt);
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Counter:{count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
