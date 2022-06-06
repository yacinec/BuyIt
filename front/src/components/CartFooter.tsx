import React from "react";
import { Cart } from "../types";
import Button from "./Button";

interface CartFooterProps {
  carts: Array<Cart>;
  setIsModalOpened: (isModalOpened: boolean) => void;
}

const CartFooter: React.FC<CartFooterProps> = (props) => {
  if (props.carts.length > 0) {
    return (
      <footer className='carts-footer'>
        <div className='total'>
          <h4>Total</h4>
          <p>
            $
            {props.carts.reduce((prev: number, cart: Cart) => {
              return prev + cart.article.price * cart.quantity;
            }, 0)}
          </p>
        </div>
        <Button
          handleClick={() => {
            props.setIsModalOpened(true);
          }}
        >
          Checkout
        </Button>
      </footer>
    );
  }

  return (
    <footer className='carts-footer'>
      <p>No articles in your cart</p>
    </footer>
  );
};

export default CartFooter;
