import { Link } from "react-router";
import style from "./Menu.module.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft , faChevronRight , faX} from "@fortawesome/free-solid-svg-icons";
import Data from "../../european_meals_with_all_details.json"
import { useEffect, useState } from "react";
const Menu = () => {


    interface Info {
        meal: string;
        city: string;
        description: string;
        image?: string;
        components: string[];
        price: number;
        price_after_offer: number;
      }


const [data , setData] = useState<Info[]>([])

const [ search , setSearch ] = useState<string>("");


useEffect(() => {
setData(Data as Info[])
} ,[])


const filteredData = search
? data.filter((item) =>
    item.meal.toLowerCase().includes(search.toLowerCase())
  )
: data;

const clearSearch = () => setSearch("") ;



    return (
        <>
        <section className={style.firstSection}>
<div className={style.navTop}>

<Link className={style.linkMenues} to={"/"}>
<FontAwesomeIcon icon={faChevronLeft} />
<FontAwesomeIcon icon={faChevronLeft} />
<span className={style.contentSpanLink}>

Back Home
</span>
</Link>

<Link className={style.linkMenues} to={"/"}>
<span className={style.contentSpanLink}>
Reservation
</span>
<FontAwesomeIcon icon={faChevronRight} />
<FontAwesomeIcon icon={faChevronRight} />

</Link>

</div>

<h1 className={style.firstHOne}>What we have today ? </h1>


<div className={style.divSearching}>
    <span className={style.spanSearching}>
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <p onClick={clearSearch}><FontAwesomeIcon icon={faX} /></p>
    </span>
</div>


<div className={style.contentMenu}>

{filteredData.map((item ) => (

<Link to={`/${item.meal}`} className={style.oneMeal} key={item.meal}> 





<div className={style.imageOfFood}>

{item.image ? (
  <img className={style.imgg} src={item.image} alt={item.meal} />
) : (
  <p>Image not available</p>
)}
</div> 
<h3 className={style.nameOfMeal}>{item.meal}</h3>


<span className={style.pricesSpans}> 
    <del>{item.price.toFixed(2)} $</del>
<p>{item.price_after_offer.toFixed(2)} $</p>


</span>


</Link>

    



))}




</div>

        </section>

        
        </>
    );
}
export default Menu ;