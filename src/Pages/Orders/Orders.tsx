import { useEffect, useState } from "react";
import  Style  from "./Orders.module.css";
import { useNavigate } from "react-router";


const Order = () => {



    interface Info {
        meal: string;
        city: string;
        description: string;
        image?: string;
        components: string[];
        price: number;
        price_after_offer: number;
        

      }

const [order , setOrder] = useState<Info[]>([])

const navicate = useNavigate();

useEffect(() => {

const updateOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem("order") || "[]");
    setOrder(storedOrders)
}

updateOrders();

window.addEventListener("orderedUpdated", updateOrders);
return () => {
    window.removeEventListener("orderedUpdated", updateOrders);
  };



},[])


const saveCartToLocalStorage = (updateOrders: Info[]) => {
    localStorage.setItem("order", JSON.stringify(updateOrders));
    setOrder(updateOrders);
    window.dispatchEvent(new Event("updateOrders"));
  };


  const removeFromCart = (meal : string) => {
    const updateOrders = order.filter((item) => item.meal !== meal);
    saveCartToLocalStorage(updateOrders);
  };

  

  const calculateTotalPrice = () => {
    return order.reduce((total, item) => total + item.price_after_offer  , 0).toFixed(2);
  };


  const handleBuyAll = () => {
    if (order.length === 0) {
      alert("Your cart is empty!");
      return;
    }
navicate("/complete-order")
    localStorage.removeItem("order");
    setOrder([]);
    window.dispatchEvent(new Event("updateOrders"));
localStorage.setItem("pricess" , calculateTotalPrice())
  };





    return (<>
    
    <section className={Style.contentSiction}>
      <h1 className={Style.head}>Orders</h1>

      <div className={Style.kl}>
          <h2 className={Style.totalPrice}>
            Total Price: <span>${calculateTotalPrice()}</span>
          </h2>
          <button className={Style.buyAllButton} onClick={handleBuyAll}>
            Order Now
          </button>
          </div>

      {order.length === 0 ? (
        <p>Please Choese What you want </p>
      ) : (
        <>
          <div className={Style.prodOne}>
            {order.map((item) => (
              <div className={Style.oneP} key={item.meal}>
                <img
                  className={Style.imgPro}
                  src={item.image}
                  alt={item.meal}

                />
                <div className={Style.detailsOrderOne}>
                  <h3 className={Style.hj}>{item.meal}</h3>
                 
                  <p>Price: ${item.price_after_offer.toFixed(2)}</p>
                 
                  <button
                  className={Style.removeFrom}
                  onClick={() => removeFromCart(item.meal)}
                >
                 Remove
                </button>
                  

                </div>
              
              </div>
            ))}
          </div>
         
        
        </>
      )}
    </section>




    </>);
};
export default Order ;