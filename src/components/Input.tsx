import React from "react";

interface InputProps {
  value: number;
  children: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRail: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input type="range" min={0} max={10} value={value} onChange={onChange} />
  );
};

const InputText: React.FC<InputProps> = ({ children, onChange }) => {
  return <input type="text" value={children} onChange={onChange} />;
};

export { InputRail, InputText };
