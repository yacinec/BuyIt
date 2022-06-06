import React, { useState } from "react";

import { Cart, Order } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Modal from "react-modal";

import ArticleInline from "../components/ArticleInline";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clear_order,
  remove_article_cart,
  update_article_cart,
} from "../redux/action-creators";
import { createOrder } from "../services/order.service";
import toast, { Toaster } from "react-hot-toast";
Modal.setAppElement("#root");

export default function Carts() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAdress] = useState("");

  const { accessToken, userId } = useSelector((state: any) => {
    return { accessToken: state.auth.accessToken, userId: state.auth.uid };
  });
  const notify = () => toast.success("Payment done!");
  const carts = useSelector((state: any) => state.carts.carts);
  const dispatch = useDispatch();

  const pay = async () => {
    if (address) {
      setIsLoading(true);
      setTimeout(async () => {
        const articles = carts.map((cart: Cart) => {
          return cart.article;
        });

        await createOrder(new Order(articles, address), userId, accessToken);
        dispatch(clear_order());
        setIsLoading(false);
        setIsModalOpened(false);
        notify();
      }, 3000);
    }
  };

  const handleClickQuantity = (cart: Cart, increase: boolean) => {
    let newQuantity;
    if (increase) {
      newQuantity = cart.quantity + 1;
    } else {
      newQuantity = cart.quantity - 1;
    }

    if (newQuantity <= 0) {
      dispatch(remove_article_cart(cart));
    } else {
      dispatch(update_article_cart({ ...cart, quantity: newQuantity }));
    }
  };

  return (
    <div className='carts'>
      <div>
        <Toaster></Toaster>
      </div>
      <h2>Carts</h2>
      <main className='cart'>
        {carts.map((cart: Cart, index: number) => {
          return (
            <div key={index} className='cart-product'>
              <ArticleInline key={index} article={cart.article} index={index} />
              <div className='cart-quantity'>
                <ButtonIcon
                  handleClick={() => {
                    handleClickQuantity(cart, false);
                  }}
                  icon={solid("minus")}
                ></ButtonIcon>
                <p>x{cart.quantity}</p>
                <ButtonIcon
                  handleClick={() => {
                    handleClickQuantity(cart, true);
                  }}
                  icon={solid("plus")}
                ></ButtonIcon>
              </div>
            </div>
          );
        })}
      </main>
      {carts.length > 0 && (
        <footer className='carts-footer'>
          <div className='total'>
            <h4>Total</h4>
            <p>
              $
              {carts.reduce((prev: number, cart: Cart) => {
                return prev + cart.article.price * cart.quantity;
              }, 0)}
            </p>
          </div>
          <Button
            handleClick={() => {
              setIsModalOpened(true);
            }}
          >
            Checkout
          </Button>
        </footer>
      )}
      {carts.length === 0 && (
        <footer className='carts-footer'>
          <p>No articles in your cart</p>
        </footer>
      )}
      <Modal
        isOpen={isModalOpened}
        onRequestClose={() => setIsModalOpened(false)}
        contentLabel='Example Modal'
        className='modal'
      >
        <div className='modal-container'>
          <h2>Checkout</h2>
          {!isLoading ? (
            <div>
              <form action=''>
                <input
                  placeholder='Shipment address'
                  onChange={(event) => {
                    setAdress(event.target.value);
                  }}
                />
              </form>
              <div className='btn-group'>
                <Button
                  handleClick={() => {
                    pay();
                  }}
                >
                  Pay
                </Button>
                <Button
                  handleClick={() => {
                    setIsModalOpened(false);
                  }}
                  color='#000'
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Modal>
    </div>
  );
}

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
