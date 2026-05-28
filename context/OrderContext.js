import React, {
  createContext,
  useState,
} from 'react';

export const OrderContext =
  createContext();

export const OrderProvider = ({
  children,
}) => {

  const [orders, setOrders] =
    useState([]);

  const addOrder = (
    items
  ) => {

    setOrders([
      ...orders,
      ...items,
    ]);

  };

  return (

    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >

      {children}

    </OrderContext.Provider>

  );
};