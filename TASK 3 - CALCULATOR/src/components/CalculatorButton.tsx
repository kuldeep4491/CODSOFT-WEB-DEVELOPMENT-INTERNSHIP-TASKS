import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "number" | "operator" | "special" | "equals";
  className?: string;
}

const CalculatorButton = ({ 
  onClick, 
  children, 
  variant = "number",
  className 
}: CalculatorButtonProps) => {
  const baseStyles = "h-16 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95 hover:shadow-lg";
  
  const variantStyles = {
    number: "bg-calc-button-number hover:bg-calc-button-number-hover text-foreground",
    operator: "bg-calc-button-operator hover:bg-calc-button-operator-hover text-primary-foreground",
    special: "bg-calc-button-special hover:bg-calc-button-special-hover text-foreground",
    equals: "bg-calc-button-operator hover:bg-calc-button-operator-hover text-primary-foreground col-span-2"
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;