import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
