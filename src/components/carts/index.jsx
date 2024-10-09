import { useState } from "react";
import "../carts/style.css";
import Modal from "../modals";
const Cart = ({ cart,removecart,setcart }) => {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,0
  );
  const [completeorder,setcompleteorder] = useState(false)
  return (
    <div className="">
      <div className="w-[100%] h-[100%]">
        <div className="carttopic mt-[5px]">Your Cart ({totalCount})</div>
        {cart.length === 0 ? (
          <div className="cartimage w-[80%] mx-auto mt-[20px]">
            <img src="/assets/images/illustration-empty-cart.svg" alt="" />
            <div className="textcart">Your added items will appear here</div>
          </div>
        ) : (
          <div className="">
            {cart.map((data, index) => (
              <div key={index} className="cart-order grid grid-cols-[80%,20%] mt-[20px]">
                <div className="">
                  <div className="cart-order-name">{data.name}</div>
                  <div className="flex mt-[5px]">
                    <div  className="cart-order-total">
                    {data.quantity}<span>x</span>
                    </div>
                    <div className="cart-order-price ml-[10px] flex">
                      <span>@</span>
                      <div className="price">
                        <span className="ml-[5px] price">$</span>{data.price.toFixed(2)}
                      </div>
                      <div className="total-price">
                        <span className="ml-[5px] ">$</span>{(data.quantity * data.price).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-end items-center ">
                  <div onClick={()=> removecart(data)} className="cart-order-close  flex justify-center items-center">
                    <img src="/assets/images/icon-remove-item.svg" alt="" />
                  </div>
                </div>
              </div>
            ))}


            <div className="cart-tatol grid grid-cols-2 mt-[20px] items-center">
              <div className="cart-tatol-title">Order total</div>
              <div className="cart-tatol-price"><div>$</div>{totalPrice.toFixed(2)}</div>
            </div>
            <div className="cart-carbon flex justify-center items-center mt-[15px]">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
              <div className="cart-carbon-text ml-[4px]">
                This is a <span>carbon-neutral</span> delivery
              </div>
            </div>
            <div onClick={() => setcompleteorder(true)} className="cart-btn mt-[20px] text-center">
              Confirm Order
            </div>
            {completeorder && (
              <Modal
                cart={cart}
                setcart={setcart}
                setcompleteorder={setcompleteorder}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
