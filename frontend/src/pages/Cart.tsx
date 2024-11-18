import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    productId: "2wse3",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s",
    name: "macaroon 1",
    price: 100,
    quantity: 2,
    stock: 10,
  },
];

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() * 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearInterval(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cartPage">
      <main>
        { cartItems.length > 0 ? cartItems?.map((item,idx) => (
         <div key={idx}>
           <CartItem 
         
          cartItem={item}
          />
          <CartItem 
         
          cartItem={item}
          />
          <CartItem 
        
          cartItem={item}
          />
          <CartItem 
        
          cartItem={item}
          />
          <CartItem 
        
          cartItem={item}
          />
         </div>
        )): <h2>no card added</h2>}
      </main>
      <aside>
        <p>Subtotal: ₹{765}</p>
        <p>Shipping Charges: ₹{87656}</p>
        <p>Tax: ₹{33}</p>
        <p>
          Discount: <em className="red"> - ₹{3}</em>
        </p>
        <p>
          <b>Total: ₹{2}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{33} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}

export default Cart;
