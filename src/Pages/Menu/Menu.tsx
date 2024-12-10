import { Link } from "react-router";
import style from "./Menu.module.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {

    return (
        <>
        <section className={style.firstSection}>
<div className={style.navTop}>

<Link to={"/"}>
<FontAwesomeIcon icon={faChevronLeft} />
Back Home</Link>

<Link to={"/"}>
Reservation
<FontAwesomeIcon icon={faChevronRight} />

</Link>

</div>

<h1>What we have today in menu </h1>


<div>
    <span>
        <input />
        <p>X</p>
    </span>
</div>


<div className={style.contentMenu}>






</div>

        </section>

        
        </>
    );
}
export default Menu ;