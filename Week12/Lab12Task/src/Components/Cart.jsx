import React, { useState } from "react";
import "./Cart.css";

const products = [
  { id: 1, name: "Milk", price: 40 },
  { id: 2, name: "Bread", price: 15 },
  { id: 3, name: "Eggs", price: 20 },
  { id: 4, name: "Cheese", price: 25 },
  { id: 5, name: "Butter", price: 100 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + product.price,
            };
          }
          return item;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div>
      <h1>Products</h1>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - Rs:{product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Rs:{item.price} (Quantity: {item.quantity})
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: Rs: {totalPrice}</h3>
    </div>
  );
};

export default Cart;
