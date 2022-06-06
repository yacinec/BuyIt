import React, { useRef } from "react";
import { Article, Order } from "../types";

import ArticleInline from "./ArticleInline";
import OrderFooter from "./OrderFooter";
import OrderHeader from "./OrderHeader";

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
