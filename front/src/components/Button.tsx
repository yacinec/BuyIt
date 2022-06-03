import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  handleClick?: (event?: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: props.color ? props.color : "#4338CA" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
