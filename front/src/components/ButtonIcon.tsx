import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonIconProps {
  icon: IconProp;
  handleClick?: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <button onClick={props.handleClick ? props.handleClick : () => {}}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default ButtonIcon;
