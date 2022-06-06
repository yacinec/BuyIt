import React from "react";

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

export default OrderFooter;
