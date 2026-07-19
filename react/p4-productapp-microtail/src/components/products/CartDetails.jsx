import React, { useEffect, useState,  } from "react";
import { viewCart } from "../../service/CartService";
import { Link, useNavigate } from "react-router-dom";
import { placeOrder } from "../../service/OrderService";

const CartDetails = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [orderItems,setOrderItems] = useState([]); // to send to orderservice
  const [loading,setLoading] = useState(true);
  useEffect(() => {
   const fetchCart = async ()=>{
    try{
    const res = await viewCart();
    setCart(res.data);
    }catch(err){
      console.log(err);
      setCart(null);
    }finally{
      setLoading(false);
    }
   }
   fetchCart();
   }, []);
   
   const items = cart?.cartItems ?? [];
   const handlePlaceOrder = async ()=>{
     // iterate thru cartItems and set to orderedItems 
    const orderedItemList = items.map(item=>
      ({
        productId:item.productId,
        productName: item.productName,
        cost: item.price,
        quantity:item.quantity
      })
    );
     let orderedItems = {
      items: orderedItemList,
      totalAmount: cart.totalPrice
     }
    // console.log(orderedItems); 
    let res = await placeOrder(orderedItems);
    console.log(res.data+" details");
    navigate("/confirmed");
   }



  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500 text-sm">Loading your cart...</p>
      </div>
    );
  }

  

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Your cart is empty.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: cart items */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-sm text-gray-500">
              {items.length} {items.length === 1 ? "item" : "items"} in cart
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div
                key={item.productId}
                className="px-6 py-5 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {item.productName}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: order summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Order Summary
          </h3>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹{cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
            <span className="text-sm font-semibold text-gray-900">Total</span>
            <span className="text-lg font-semibold text-gray-900">
              ₹{cart.totalPrice}
            </span>
          </div>

          <button className="w-full rounded-md bg-amber-500 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 transition"
            onClick = {handlePlaceOrder}>
              Place Order
          </button>

          <button
            onClick={() => navigate("/products")}
            className="mt-3 w-full rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
