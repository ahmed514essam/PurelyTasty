import styles from "./Meal.module.css"
import Data from "../../../european_meals_with_all_details.json"
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const MealProfile = () => {
    interface Info {
        meal: string;
        city: string;
        description: string;
        image?: string;
        components: string[];
        price: number;
        price_after_offer: number;
      }

const {meal} = useParams();
const [data , setData] = useState<Info[]>([])
const [ isthere , setIsthere ] = useState(false);
useEffect(() => {
setData(Data as Info[])
}, [])

const filteredData = data.find((item) => item.meal == meal);

useEffect(() => {
    if (filteredData) {
      const order = JSON.parse(localStorage.getItem("order") || "[]");
      const exists = order.some((item: Info) => item.meal === filteredData.meal);
      setIsthere(exists);
    }
  }, [filteredData]);


const addToOrdered = () => {
    if (!filteredData) return;

    const order = JSON.parse(localStorage.getItem("order") || "[]");
    const existingItemIndex = order.findIndex((item: Info) => item.meal === filteredData.meal);
    if (existingItemIndex !== -1) {
        order[existingItemIndex].quantity += 1;
      } else {
        order.push({ ...filteredData, quantity: 1 });
      }
  
      localStorage.setItem("order", JSON.stringify(order));
      setIsthere(true); 
      window.dispatchEvent(new Event("cartUpdated"));
}

const removeOrdered = () => {
    if (!filteredData) return;
    const order = JSON.parse(localStorage.getItem("order") || "[]");
    const updatedCart = order.filter((item: Info) => item.meal !== filteredData.meal);

    localStorage.setItem("order", JSON.stringify(updatedCart));
    setIsthere(false); 
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!filteredData) {
    return <h1>Please Create Order</h1>;

}

return (
        <>
<section className={styles.sectionProfile}>

<div className={styles.imgProfile}>
<img src={filteredData?.image} />
</div>

<div className={styles.detailsProfile}>

<h1>{filteredData?.meal}</h1>
<h2>From <span>{filteredData?.city}</span></h2>

<p className={styles.pDescription}>It is {filteredData?.description}</p>

<p className={styles.componMEal}>Include <span>{filteredData?.components.toString()}</span></p>

<h3 className={styles.pricess}>The Price <span> ${filteredData?.price_after_offer.toFixed(2)}</span> instead of <del>${filteredData?.price.toFixed(2)}</del></h3>
{isthere ? (<button onClick={removeOrdered}>Remove Order</button>
    ) : (
        <button onClick={addToOrdered}>Create Order</button>

)}

</div>
</section>


        </>
    );
}
export default MealProfile ;