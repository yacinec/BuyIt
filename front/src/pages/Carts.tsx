import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import toast, { Toaster } from "react-hot-toast";

import {
  clear_cart,
  remove_article_cart,
  update_article_cart,
} from "../redux/action-creators";
import { createOrder } from "../services/order.service";
import { Cart, Order, Tokens } from "../types";

import {
  ButtonIcon,
  ArticleInline,
  CartModal,
  CartFooter,
} from "../components";

export default function Carts() {
  const notify = () => toast.success("Payment done!");
  const dispatch = useDispatch();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");

  const carts = useSelector((state: any) => state.carts.carts);
  const { userId, accessToken, refreshToken, expiresIn } = useSelector(
    (state: any) => {
      return {
        userId: state.auth.uid,
        accessToken: state.auth.accessToken,
        refreshToken: state.auth.refreshToken,
        expiresIn: state.auth.expiresIn,
      };
    }
  );

  /**
   * Make the payment
   * - Clear carts
   * - Create an order
   */
  const pay = async () => {
    if (address) {
      setIsLoading(true);
      setTimeout(async () => {
        const articles = carts.map((cart: Cart) => {
          return cart.article;
        });

        await createOrder(
          new Order(articles, address),
          userId,
          new Tokens(accessToken, refreshToken, expiresIn)
        );
        dispatch(clear_cart());
        setIsLoading(false);
        setIsModalOpened(false);
        notify();
      }, 3000);
    }
  };

  /**
   * Manage the article quantity
   */
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

      <CartFooter carts={carts} setIsModalOpened={setIsModalOpened} />

      <CartModal
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
        isLoading={isLoading}
        setAddress={setAddress}
        pay={pay}
      />
    </div>
  );
}
