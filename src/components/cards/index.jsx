import "../cards/style.css";
const Card = ({ data, addcart ,cart,removecart}) => {
  const cartitem = cart.find((cartitem) => cartitem.name === data.name);
  const itemQuantity = cartitem ? cartitem.quantity : 0;
  return (
    <>
      <div className="">
        <div className="card-img">
          {/* ตรวจสอบการเข้าถึง property image */}
          <img
            className=""
            src={data.image.desktop} // เข้าถึง image ของ desktop หรืออื่นๆตามต้องการ
            alt={data.name}
          />
          {itemQuantity === 0 ? (
            <button
              onClick={() => addcart(data)}
              className="btn-addcart  "
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt="Add to Cart"
              />
              Add to Cart
          </button>
          ):(
            <div className="btn-addcart-quantity flex gap-[10px] " >
              <div className="plus"
              onClick={()=>removecart(data)}>
                <img className="" src="/assets/images/icon-decrement-quantity.svg" alt="" />
              </div>
              <div className="quelity">{itemQuantity}</div>
              <div className="minus"
               onClick={() => addcart(data)}
              >
                <img className="" src="/assets/images/icon-increment-quantity.svg" alt="" />
              </div>
            </div>
          )}
        </div>
        <div className="card-category mt-[30px]">{data.category}</div>
        <div className="card-name">{data.name}</div>
        <div className="card-price">
          <span>$</span>
          {data.price.toFixed(2)}
        </div>
      </div>
    </>
  );
};
export default Card;
