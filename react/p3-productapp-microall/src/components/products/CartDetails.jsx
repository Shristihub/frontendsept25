import React, { useEffect, useState, Link } from "react";
import { viewCart } from "../../service/CartService";

const CartDetails = () => {
  const [cart, setCart] = useState(null);
  let userId = 1;
  useEffect(() => {
    //call viewcart method
    viewCart(userId).then(
      (res) => {
        setCart(res.data);
        console.log(res.data);
      },
      (err) => console.log(err),
    );
  }, []);

  return (
    <div>
      {!cart ? (
        <h2>Cart is Empty</h2>
      ) : (
        <div>
          <div>
            {cart.cartItems.map((item) => (
              <div key={item.productId}>
                <h3>ProductName: {item.productName}</h3>
                <h3>Price: {item.price}</h3>
                <h3>Quantity: {item.quantity}</h3>
                <hr />
              </div>
            ))}
          </div>
          <h3>Total Price:<span>{cart.totalPrice}</span></h3>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
