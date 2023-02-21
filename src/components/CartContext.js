import React, { createContext, useEffect, useState } from 'react'
import {productsArr} from './CartItem';

 export const Cart = createContext();

const CartContext = ({children}) => {
    const [cart,setCart] = useState([]);

    
  const addToCart = (data) => {
    setCart([...cart, {...data, quantity : 1}])
    console.log(cart)
};

 useEffect(() => {
  localStorage.setItem('userData', JSON.stringify(cart));

 },[cart]);


  return (
    <Cart.Provider value={{cart,setCart,productsArr, addToCart}}>
      {children}
    </Cart.Provider>
  )
}

export default CartContext;
