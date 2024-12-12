import style from "./Contact.module.css"
import image from "../../../public/images/beautyIMg.png" ;
import { useState } from "react";

const Contact = () => {



    const [result, setResult] = useState("");



    const onSubmit = async (e) => {
      e.preventDefault();
      setResult("Sending....");
      const formData = new FormData(e.target);
  
      formData.append("access_key", "88b30d4b-08dd-4867-9c85-b279e94bfa82");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
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

<form onSubmit={onSubmit}>

<div className={style.oneLabel}>
<input id="name" name="name" placeholder="Your Name" type="text" />
</div>


<div className={style.oneLabel}>
<input name="email" placeholder="Email" type="email" />
</div>


<div className={style.oneLabel}>
<input name="address" placeholder="Your Address" type="text" />
</div>


<div className={style.oneLabel}>
<textarea placeholder="Your Suggest" />
</div>

<button type="submit">Send</button>

</form>


</div>


</div>


</section>



        </>
    );
}
export default Contact ; 