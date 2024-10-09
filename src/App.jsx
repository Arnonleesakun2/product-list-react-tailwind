import { useState } from "react"
import {data} from "../data.js"
import Card from "./components/cards"
import Cart from "./components/carts/index.jsx"
function App() {
  const [cartitem,setcartitem] = useState([]);
  const addcart = (item) => {
    setcartitem((previtem)=> {
      const listitem = previtem.find((cartitem) => cartitem.name === item.name)
      if(listitem){
        return previtem.map((cartitem) =>
          cartitem.name === item.name
          ? {...cartitem, quantity: cartitem.quantity + 1}
          :cartitem
        )
      }
      return [...previtem, { ...item, quantity: 1 }];
    });
  };
  const removecart = (item) =>{
    setcartitem((previtem) =>{
      const listitem = previtem.find((cartitem) => cartitem.name === item.name)
      if(listitem.quantity === 1){
        return previtem.filter(
          (cartitem) => cartitem.name !== item.name
        )
      }
      return previtem.map((cartitem) => 
        cartitem.name === item.name
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
      );
    });
  };
  return (
    <div className="w-[90%] mx-auto h-[100vh]">
      <div className="lg:grid lg:grid-cols-[70%,30%] h-[100vh]">
        <div className="leftsection flex items-center justify-center ">
            <div className="w-[90%] h-[100%]">
                <div className="cardtopic mt-[5px]">
                    Desserts
                </div>
                <div className="card-con lg:grid lg:grid-cols-3 lg:gap-[30px] mt-[10px]">
                  {
                    data.map((data,index)=>(
                      <Card
                        key={index}
                        data={data}
                        addcart={addcart}
                        cart={cartitem}
                        removecart={removecart}
                      />
                    ))
                  }
                </div>
            </div>
        </div>
        <div className="rightsection ">
          <Cart
            cart={cartitem}
            setcart={setcartitem}
            removecart={removecart}
          />
        </div>  
      </div>
    </div>
  )
}

export default App
