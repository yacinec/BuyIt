import React from "react";
import OrderCard from "../components/OrderCard";
import { Progression, Order, Brand, Article } from "../types";

const orders = [
  new Order(
    [
      new Article(
        "Asus laptop",
        500,
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "A beautiful computer",
        Brand.ASUS
      ),
    ],
    new Date(),
    new Date(),
    Progression.PREPAR,
    "426 Amsterdam Ave, New York, NY 10024, United State"
  ),
  new Order(
    [
      new Article(
        "Macbook Air",
        1000,
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "A beautiful computer",
        Brand.APPLE
      ),
      new Article(
        "Lenovo Laptopt",
        900,
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        "A beautiful computer",
        Brand.LENOVO
      ),
    ],
    new Date(),
    new Date(),
    Progression.ONROAD,
    "426 Amsterdam Ave, New York, NY 10024, United State"
  ),
  new Order(
    [
      new Article(
        "HP laptop",
        200,
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80",
        "A beautiful computer",
        Brand.HP
      ),
    ],
    new Date(),
    new Date(),
    Progression.ARRIVE,
    "426 Amsterdam Ave, New York, NY 10024, United State"
  ),
];

export default function Orders() {
  return (
    <div className='orders'>
      {orders.map((order: Order, index: number) => {
        return <OrderCard key={index} {...order} />;
      })}
    </div>
  );
}
