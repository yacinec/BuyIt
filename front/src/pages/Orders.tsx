import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get_all_orders } from "../redux/action-creators";
import { getOrders } from "../services/order.service";
import { Order, Tokens } from "../types";

import { OrderCard } from "../components";

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.orders.orders);
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

  const fetchOrders = async () => {
    const orders = await getOrders(
      userId,
      new Tokens(accessToken, refreshToken, expiresIn)
    );
    dispatch(get_all_orders(orders));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='orders'>
      {orders.map((order: Order, index: number) => {
        return <OrderCard key={index} {...order} />;
      })}
      {orders.length === 0 && (
        <div>
          <p>No orders found</p>
        </div>
      )}
    </div>
  );
}
