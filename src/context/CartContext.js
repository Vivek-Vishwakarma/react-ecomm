import React, { useState } from "react";
import faker from "faker";
import Cart from "./Cart";
const CartContext = ({ children }) => {
  // const [rerender, setRerender] = useState(false);
  const [item, setItem] = useState([]);
  // const item = [];
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  const addtocart = (e) => {
    products.forEach((elem) => {
      if (elem.id === e) {
        setItem([...item, elem]);
      }
    });
  };
  // const removeCart = (e) => {
  //   products.forEach((elem) => {
  //     if (elem.id === e) {
  //       item.push(elem);
  //     }
  //   });
  // };

  return (
    <Cart.Provider value={{ products, addtocart, item }}>
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
