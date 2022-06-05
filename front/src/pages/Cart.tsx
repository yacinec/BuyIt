import React, { useState } from "react";

import { Article, Brand } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  //regular,
  //brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Modal from "react-modal";

import ArticleInline from "../components/ArticleInline";
import Button from "../components/Button";

const carts = [
  {
    article: new Article(
      "Macbook Air",
      1000,
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "A beautiful computer",
      Brand.APPLE
    ),
    quantity: 1,
  },
];
Modal.setAppElement("#root");

export default function Cart() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='carts'>
      <h2>Carts</h2>
      <main className='cart'>
        {carts.map((cart, index: number) => {
          return (
            <div key={index} className='cart-product'>
              <ArticleInline key={index} article={cart.article} index={index} />
              <div className='cart-quantity'>
                <ButtonIcon icon={solid("minus")}></ButtonIcon>
                <p>x{cart.quantity}</p>
                <ButtonIcon icon={solid("plus")}></ButtonIcon>
              </div>
            </div>
          );
        })}
      </main>
      <footer className='carts-footer'>
        <Button
          handleClick={() => {
            setIsModalOpened(true);
          }}
        >
          Checkout
        </Button>
      </footer>
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
                <input placeholder='Shipment address' />
              </form>
              <div className='btn-group'>
                <Button
                  handleClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 3000);
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
}
const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <button>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};
