import { useState } from "react";
import "./App.css";


function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSub = () => {
    if(counter<=0)
    {
      return 0;
    }
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button" onClick={handleSub} disabled={!counter}>Decrement 1</button>
      <button data-testid="counter-increment-button" onClick={handleAdd}>Increment 1</button>
    </div>
  );
}

export default App;
