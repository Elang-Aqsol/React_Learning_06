import { useState } from "react";
import { Minus, Plus } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handlePlusStep() {
    setStep((step) => step + 1);
  }

  function handleMinusStep() {
    setStep((step) => step - 1);
  }

  function handlePlusCount() {
    setCount((count) => count + step);
  }
  function handleMinusCount() {
    setCount((count) => count - step);
  }

  return (
    <div className="App">
      <div className="row">
        <Minus onClick={handleMinusStep} />
        <span>Step: {step}</span>
        <Plus onClick={handlePlusStep} />
      </div>
      <div className="row">
        <Minus onClick={handleMinusCount} />
        <span>Count: {count}</span>
        <Plus onClick={handlePlusCount} />
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} Days from today is `
            : `${Math.abs(count)} Days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
