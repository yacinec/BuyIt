import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: (event?: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className='btn'>{props.children}</button>;
};

export default Button;
