import  { useEffect, useState } from "react";
import style from "./SendOrder.module.css";
// import { useNavigate } from "react-router";

// interface Store {
//   price: number;
// }

const SendOrder = () => {
  const [price, setPrice] = useState<number | null>(null); 
// const navicate = useNavigate();
  useEffect(() => {
    const storePrice = localStorage.getItem("pricess"); 
    if (storePrice) {
      try {
        const parsedPrice = JSON.parse(storePrice); 
        if (typeof parsedPrice === "number") { 
          setPrice(parsedPrice);
        } else {
          console.error("Invalid price format in localStorage");
          setPrice(null); 
        }
      } catch (error) {
        console.error("Error parsing price from localStorage:", error);
        setPrice(null); 
      }
    }
  }, []);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(""); 

  


const nameResturant = "Savor" ;




  const sendOrder = async () => {
    // e.preventDefault();
    
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "ahmedessaam124@gmail.com",
            subject: `Message from ${nameResturant} `,
            message: `<p>name : ${name}</p>
                      <p>city : ${address}</p>
                      <p>Email : ${phone}</p>`,
        })
    })
    .then(res => res.json())
    .then(data => console.log(data));

    
setName("");
setAddress("");
setPhone("");

};














  return (
    <>
      <section className={style.contentSend}>
        <h2>
          Your order will be delivered to you within two hours, and payment will
          be collected upon delivery.
        </h2>

        <div className={style.formSending}>
          <h3>The Price <span>${price !== null ? price.toFixed(2) : "N/A"}</span></h3> 

          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />

          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />

          <input
            type="tel" 
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />





          <div className={style.btns}>
            <button onClick={sendOrder}>Send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SendOrder;