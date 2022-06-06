import React, { RefObject, useRef } from "react";
import { Article, Order, Progression } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import moment from "moment";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ArticleInline from "./ArticleInline";

const OrderCard: React.FC<Order> = (props) => {
  const articles = props.articles;
  const orderButtonRef = useRef<HTMLButtonElement>(null);
  const orderContentRef = useRef<HTMLElement>(null);

  const total = () => {
    return articles.reduce(
      (prev: number, current: Article) => prev + current.price,
      0
    );
  };

  const handleClick = () => {
    if (orderContentRef.current === null || orderButtonRef.current === null) {
      return;
    }
    if (orderContentRef.current?.classList.contains("close")) {
      orderContentRef.current?.classList.remove("close");
      orderButtonRef.current?.classList.remove("close-icon");
    } else {
      orderContentRef.current?.classList.add("close");
      orderButtonRef.current?.classList.add("close-icon");
    }
  };

  return (
    <div className='order'>
      <OrderHeader
        {...props}
        handleClick={handleClick}
        orderButtonRef={orderButtonRef}
        orderContentRef={orderContentRef}
      />
      <main ref={orderContentRef} className='order-main'>
        {articles.map((article: Article, index: number) => {
          return <ArticleInline key={index} article={article} index={index} />;
        })}
        <OrderFooter total={total()} />
      </main>
    </div>
  );
};

export default OrderCard;

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
              <FontAwesomeIcon icon={solid("clock")} /> {props.progression}
            </span>
          </p>
        );
      case Progression.ONROAD:
        return (
          <p>
            <span className='bold'>Status:</span>{" "}
            <span className='orange'>
              <FontAwesomeIcon icon={solid("truck-fast")} /> {props.progression}
            </span>
          </p>
        );
      case Progression.ARRIVE:
        return (
          <p>
            <span className='bold'>Status:</span>{" "}
            <span className='green'>
              <FontAwesomeIcon icon={solid("circle-check")} />{" "}
              {props.progression}
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

interface OrderFooterProps {
  total: number;
}

const OrderFooter: React.FC<OrderFooterProps> = (props) => {
  return (
    <footer className='order-footer'>
      <h4>Total</h4>
      <p>${props.total}</p>
    </footer>
  );
};
