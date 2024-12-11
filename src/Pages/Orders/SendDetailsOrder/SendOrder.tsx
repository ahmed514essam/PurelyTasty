import { useEffect, useState } from "react";
import style from "./SendOrder.module.css" ;


  

const SendOrder = () => {
    interface Store {
        price: number;
      };
    const [price, setPrice] = useState<Store[]>();

  
const handelLocalStorge = () => {
    const storePrice = localStorage.getItem("pricess");
    if (storePrice) {
        setPrice(storePrice)
    }
}


useEffect(() => {
handelLocalStorge();
} ,[])


const [name , setName] = useState("");
const [address , setAddress] = useState("");
const [phone , setPhone] = useState<number>();

const sendhandel = () => {

}


    return (
        <>
        
<section className={style.contentSend}>
<h2>Your order will be delivered to you within two hours, and payment will be collected upon delivery.</h2>

<div className={style.formSending}>

    <h3>The Price <span>${price}</span></h3>

<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name " required />

<input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required/>

<input type="number" name="phone" value={phone} onChange={(e) => (e.target.value)} placeholder="Phone" required />


<div className={style.btns}>
<button onClick={sendhandel}>Send</button>
</div>


</div>



</section>

        </>
    );
};
export default SendOrder ;