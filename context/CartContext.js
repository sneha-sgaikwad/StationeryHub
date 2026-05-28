import React, {
  createContext,
  useState,
} from 'react';

export const CartContext =
  createContext();

export const CartProvider = ({
  children,
}) => {

  const [cartItems,
    setCartItems] =
    useState([]);

  // ADD TO CART
  const addToCart = (
    product
  ) => {

    const existingProduct =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    // IF PRODUCT EXISTS
    if (existingProduct) {

      const updatedCart =
        cartItems.map(
          (item) => {

            if (
              item.id === product.id
            ) {

              return {
                ...item,
                quantity:
                  item.quantity + 1,
              };

            }

            return item;

          }
        );

      setCartItems(
        updatedCart
      );

    }

    // NEW PRODUCT
    else {

      setCartItems([
        ...cartItems,

        {
          ...product,
          quantity: 1,
        },

      ]);

    }

  };

  // REMOVE PRODUCT
  const removeFromCart =
    (id) => {

      const updated =
        cartItems.filter(
          (item) =>
            item.id !== id
        );

      setCartItems(updated);

    };

  // INCREASE
  const increaseQty =
    (id) => {

      const updated =
        cartItems.map(
          (item) => {

            if (
              item.id === id
            ) {

              return {
                ...item,
                quantity:
                  item.quantity + 1,
              };

            }

            return item;

          }
        );

      setCartItems(updated);

    };

  // DECREASE
  const decreaseQty =
    (id) => {

      const updated =
        cartItems.map(
          (item) => {

            if (
              item.id === id &&
              item.quantity > 1
            ) {

              return {
                ...item,
                quantity:
                  item.quantity - 1,
              };

            }

            return item;

          }
        );

      setCartItems(updated);

    };

  return (

    <CartContext.Provider
      value={{

        cartItems,

        addToCart,

        removeFromCart,

        increaseQty,

        decreaseQty,

      }}
    >

      {children}

    </CartContext.Provider>

  );
};