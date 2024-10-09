import "../modals/style.css";
const Modal = ({ cart, setcart, setcompleteorder }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  function handleresetall(){
    setcompleteorder(false);
    setcart([]);
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
      <div className="modal w-[100%] h-[90%] lg:max-w-[35%] lg:max-h-[80%] ">
        <div className="w-[90%] mx-auto mt-[40px]">
          <div className="modal-header">
            <img src="/assets/images/icon-order-confirmed.svg" alt="" />
            <div className="modal-title">Order Confirmed</div>
            <div className="modal-des">we hope you enjoy your food!</div>
          </div>
          <div className="modal-product ">
            <div className="modal-product-con space-y-4 overflow-auto h-[150px]">
              {cart.map((data, index) => (
                <div key={index} className="grid grid-cols-[70%,30%]">
                  <div className="grid grid-cols-[25%,75%]">
                    <div className="modal-product-image ">
                      <img src={data.image.desktop} alt="" />
                    </div>
                    <div className="">
                      <div className="modal-product-text">{data.name}</div>
                      <div className="flex">
                        <div className="modal-product-amount">
                          {data.quantity}x
                        </div>
                        <div className="ml-[20px]">
                          @ $ <span>{data.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-product-price flex justify-end items-center">
                    ${data.price * data.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-totalorder ">
            <div className="grid grid-cols-2 w-[95%] mx-auto">
              <div className="flex items-center">Order Total</div>
              <div className="modal-totalorder-price flex justify-end items-center">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
          <div onClick={() => handleresetall()} className="modal-btn cursor-pointer">
             <div  className="modal-btn-new mt-[20px] text-center">
              Start New Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
