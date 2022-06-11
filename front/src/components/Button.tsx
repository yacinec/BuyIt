import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> | void;
  submit?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.submit ? "submit" : "button"}
      className='btn'
      style={{
        backgroundColor: props.color ? props.color : "#ef2c5a" /*"#4338CA"*/,
      }}
      onClick={props.handleClick ? props.handleClick : () => {}}
    >
      {props.children}
    </button>
  );
};

export default Button;
