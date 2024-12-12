import { useState } from "react";
import styles from "./EnsureReserviation.module.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const EnsureReserviation = () => {

    const [email , setEmail] = useState("");
    const [erroralert , setErroralert] = useState<boolean>(false) ;

    const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

const navicate = useNavigate();
const confirmEmail = () => {


if (email.match(validEmail))
    {
localStorage.setItem("emailuser" , JSON.stringify(email)) ;
navicate("/reservation/selecttime")
}else {
    
setErroralert(true)
}
}

const closeAlert = () => {
    setErroralert(false)
}

    return (
        <>
        <section className={styles.sectionEnsure}>
<div className={styles.contentEnsure}>
<h2 className={styles.headTittle}>Enter Your Email</h2>

<span className={styles.spanEmail}>
    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    <button onClick={confirmEmail}>Confirm</button>
</span>

</div>
        </section>





        {erroralert ? (

<div className={styles.Alert}>
    <div className={styles.alertContent}>
<span>
<FontAwesomeIcon onClick={closeAlert} icon={faX} />

    <p>OOPS!</p>
</span>
<hr/>
<h3>Write a valid email</h3>
<hr/>
<span className={styles.btnAler}>
<button onClick={closeAlert}>OK</button>

</span>

    </div>

    
</div>


        ) : null}
        </>
    );
};
export default EnsureReserviation ;