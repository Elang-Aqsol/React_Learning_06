import { useState } from "react";
import { Minus, Plus, Reset } from "./components/Button";
import { InputRail, InputText } from "./components/Input";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handlePlusCount() {
    setCount((count) => count + step);
  }
  function handleMinusCount() {
    setCount((count) => count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <div className="row">
        <InputRail
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          children={0}
        />
        {step}
      </div>
      <div className="row">
        <Minus onClick={handleMinusCount} />
        <InputText
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        >
          {count}
        </InputText>
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
      {count !== 0 || step !== 1 ? (
        <div>
          <Reset onClick={handleReset} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
