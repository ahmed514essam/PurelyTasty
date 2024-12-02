import style from "./Header.module.css"
import "./Header.css"
import iconImage from "../../../public/favIcon.png"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {



    const navicate = useNavigate();

    function goHome()  {
      navicate("/")
    }
    
    return (
        <>


    <nav>
  
<div className={style.leftSide}>

{/* ============================================================================================================================= */}
{/* ============================================================================================================================= */}

<span className={style.HideInNaturalState}>
<button className="btn listSides " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<FontAwesomeIcon className="fontAwsemList"  icon={faBars} />
</button>

<div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">

  <span  onClick={goHome} className={style.IconTittle}>
        <img src={iconImage}/>
    <h1 className="fontTiltle">PurelyTasty </h1>
    </span>

    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   

  <div className={style.ilnksContents
}>
<Link className={style.linkNavs} to={""}>Library</Link>
<Link className={style.linkNavs} to={"/contactus"}>Contact Us</Link>
<Link className={style.linkNavs} to={"/account"}>Account</Link>

<div className="dropdown d-block">
  <button className="btn secondbtnf  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Restaurant
  </button>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item " href="#">Services</a></li>
    <li><Link className="dropdown-item" to={"/aboutus"}>About Us</Link></li>
  </ul>
</div>


</div>

{/* <div className={style.listdisplayBuuton}> */}
    <button className={style.btnGetAppp}>Get The APP</button>


     
  </div>
</div>
</span>

{/* =================================================================================================================================
=========================================================================================================================== */}

    <span  onClick={goHome} className={style.IconTittle}>
        <img src={iconImage}/>
    <h1 className="fontTiltle">PurelyTasty </h1>
    </span>

<div className={style.ilnksContent
}>
<Link className={style.linkNav} to={""}>Library</Link>


<Link className={style.linkNav} to={"/contactus"}>Contact Us</Link>

<Link className={style.linkNav} to={"/account"}>Account</Link>
<div className="dropdown d-block">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Restaurant
  </button>
  <ul className="dropdown-menu ">
    <li><Link className="dropdown-item " to="#">Services</Link></li>
    <li><Link className="dropdown-item" to={"/aboutus"}>About Us</Link></li>
  </ul>
</div>


</div>



    
</div>


<div className={style.rightSide}>
    <button className={style.btnGetApp}>Get The APP</button>
</div>

    </nav>

        </>
    );
}
export default Header ;