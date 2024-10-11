import React, { ReactNode } from "react";

interface IButton {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<IButton> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-white px-5 py-3 rounded-full rounded-tl-none tracking-wide`}
    >
      {children}
    </button>
  );
};

export default Button;
