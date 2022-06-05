import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: props.color ? props.color : "#4338CA" }}
      onClick={props.handleClick ? props.handleClick : () => {}}
    >
      {props.children}
    </button>
  );
};

export default Button;
