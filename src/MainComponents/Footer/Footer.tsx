import { Link, useNavigate } from "react-router-dom";
import style from "./Footer.module.css"
import iconImage from "../../../public/favIcon.png"
function Footer() {
const navicate = useNavigate();
const goHome = () => {
    navicate("/")
}
    return (
    
        <>
        <footer>

<div className={style.FirstHalfFooter}>


<span className={style.IconTittle}>
        <img src={iconImage} alt=""/>
    <h1 onClick={goHome} className={style.fontTiltle}>Savore </h1>
    </span>


<div className={style.contentLinks}>

    <span className={style.oneRowLinksFooter}>
<Link className={style.decorationnone} to={"/menu-foods"}>Foods</Link>
<Link className={style.decorationnone} to={"/about"}>About US</Link>
<Link className={style.decorationnone} to={"/contactus"}>Contact Us</Link>
</span>

<span className={style.twoRowLinksFooter}>
<Link className={style.decorationnone} to={"/your-order"}>Orders</Link>
<Link className={style.decorationnone} to={"/reservation/confirm-email"}>Reservation</Link>
</span>


</div>


</div>



<hr />



<div className={style.SecondHalfFooter}>
<p>At GreenNest, we are committed to empowering farmers and plant enthusiasts with cutting-edge technology to ensure healthier crops and a sustainable future. Simply upload a photo of your plant, and our advanced diagnostic tool will identify potential diseases and offer tailored solutions. With our mobile app and Join us to use our site to discover your plant, you can access this innovative service anytime, anywhere. Join us in cultivating healthier plants and stronger communities today!" Feel free to customize the tone or details to better fit your project. Let me know if you'd like help refining this further!
</p>

<span className={style.imgGooglePlay}>
    </span>

</div>
<hr/>

<div className={style.thirdHalfFooter}>
<p>© 2024 Savore
</p>

</div>


   </footer>
        </>
    );
    }
    export default Footer ;