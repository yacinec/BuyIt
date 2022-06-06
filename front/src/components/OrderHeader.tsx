import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { RefObject } from "react";
import { Progression } from "../types";

interface OrderHeaderProps {
  _id: string;
  progression: Progression;
  createdAt: Date;
  modifiedAt: Date;
  handleClick: () => void;
  orderContentRef: RefObject<HTMLElement> | undefined;
  orderButtonRef: RefObject<HTMLButtonElement> | undefined;
}

const OrderHeader: React.FC<OrderHeaderProps> = (props) => {
  const status = () => {
    switch (props.progression) {
      case Progression.PREPAR:
        return (
          <p>
            <span className='bold'>Status:</span>{" "}
            <span className='blue'>
              <FontAwesomeIcon icon={solid("clock")} /> On preparation
            </span>
          </p>
        );
      case Progression.ONROAD:
        return (
          <p>
            <span className='bold'>Status:</span>{" "}
            <span className='orange'>
              <FontAwesomeIcon icon={solid("truck-fast")} /> On the way
            </span>
          </p>
        );
      case Progression.ARRIVE:
        return (
          <p>
            <span className='bold'>Status:</span>{" "}
            <span className='green'>
              <FontAwesomeIcon icon={solid("circle-check")} /> Arrived
            </span>
          </p>
        );
    }
  };
  return (
    <header className='order-header'>
      <h3 className='order-id'>
        Order #{props._id.substring(props._id.length - 6, props._id.length)}
      </h3>
      <div className='order-info'>
        {status()}
        <p>
          <span className='bold'>Date:</span>{" "}
          {moment(new Date(props.createdAt)).format("MMMM Do YYYY")}
        </p>
        <p>
          <span className='bold'>Last update:</span>{" "}
          {moment(new Date(props.modifiedAt)).format("MMMM Do YYYY")}
        </p>
      </div>
      <button
        ref={props.orderButtonRef}
        onClick={props.handleClick}
        className='order-button'
      >
        Order summary
      </button>
    </header>
  );
};

export default OrderHeader;
