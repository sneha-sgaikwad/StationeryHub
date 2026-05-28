import React, {
  createContext,
  useState,
} from 'react';

export const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children,
}) => {

  const [wishlistItems, setWishlistItems] =
    useState([]);

  // ADD TO WISHLIST
  const addToWishlist = (product) => {

    const alreadyExists =
      wishlistItems.find(
        (item) => item.id === product.id
      );

    if (!alreadyExists) {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);

    }

  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {

    const updatedItems =
      wishlistItems.filter(
        (item) => item.id !== id
      );

    setWishlistItems(updatedItems);

  };

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );
};