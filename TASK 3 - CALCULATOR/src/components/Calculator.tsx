import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(`${parseFloat(newValue.toFixed(7))}`);
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const inputValue = parseFloat(display);
      const newValue = calculate(previousValue, inputValue, operation);
      
      setDisplay(`${parseFloat(newValue.toFixed(7))}`);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-card border border-border rounded-2xl p-6 shadow-2xl">
      {/* Display */}
      <div className="mb-6 p-4 bg-calc-display rounded-xl">
        <div className="text-right text-3xl font-mono text-calc-display-text overflow-hidden">
          {display.length > 12 ? display.slice(0, 12) + "..." : display}
        </div>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <CalculatorButton variant="special" onClick={clear}>
          C
        </CalculatorButton>
        <CalculatorButton variant="special" onClick={() => setDisplay(display.slice(0, -1) || "0")}>
          ⌫
        </CalculatorButton>
        <CalculatorButton variant="special" onClick={() => {}}>
          ±
        </CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => performOperation("÷")}>
          ÷
        </CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => inputNumber("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("9")}>9</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => performOperation("×")}>
          ×
        </CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => inputNumber("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("6")}>6</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => performOperation("-")}>
          −
        </CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={() => inputNumber("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("3")}>3</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => performOperation("+")}>
          +
        </CalculatorButton>

        {/* Row 5 */}
        <CalculatorButton className="col-span-2" onClick={() => inputNumber("0")}>
          0
        </CalculatorButton>
        <CalculatorButton onClick={inputDecimal}>.</CalculatorButton>
        <CalculatorButton variant="equals" onClick={handleEquals}>
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;