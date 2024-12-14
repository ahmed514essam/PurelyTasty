import style from "./Contact.module.css"
import image from "../../../public/images/beautyIMg.png" ;
import { useState } from "react";

const Contact = () => {


const [name , setName] = useState("");

const [emi , setEmi] = useState("");
const [address , setAddress] = useState("");
const [sugest , setSuggest] = useState("");


const contactUs = "Contact US" ;
  

  const sendOrder = async () => {
    // e.preventDefault();
    
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "ahmedessaam124@gmail.com",
            subject: `Message from ${contactUs} `,
            message: `<p>name : ${name}</p>
                      <p>city : ${address}</p>
                      <p>Email : ${emi}</p>
                      <p> Suggest : ${sugest}</p>`,
                      
        })
    })
    .then(res => res.json())
    .then(data => console.log(data));

    
setName("");
setEmi("");
setSuggest("");
setAddress("");

};



    return (
        <>
        
<section className={style.sectionConyact}>
<div className={style.content}>

<div className={style.imgContent}>
    <img src={image}/>
</div>

<div className={style.det}>

<h2>Contact With Us Dear</h2>

<div className={style.form}>

<div className={style.oneLabel}>
<input id="name" name="name " value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" />
</div>


<div className={style.oneLabel}>
<input name="email" value={emi} onChange={(e) => setEmi(e.target.value)} placeholder="Email" type="email" />
</div>


<div className={style.oneLabel}>
<input name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your Address" type="text" />
</div>


<div className={style.oneLabel}>
<textarea value={sugest} onChange={(e) => setSuggest(e.target.value)} placeholder="Your Suggest" />
</div>

<button onClick={sendOrder} type="submit">Send</button>

</div>


</div>


</div>


</section>



        </>
    );
}
export default Contact ; 