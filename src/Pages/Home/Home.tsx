import style from "./Home.module.css"
import Data from "../../european_meals_with_all_details.json"
const Home = () => {

console.log(Data)


    
    return (
        <>
        
<section className={style.sectionOne}>
<div className={style.divSectinOne}>
<h1>
Where Taste Meets Elegance
</h1>
</div>
</section>


<section className={style.secondSection}>
<h2>
An Unforgettable Culinary Journey
</h2>
<button>Reserve Now</button>
</section>


<section className={style.secondSectionh}>

<div className={style.content}>




</div>


</section>



        </>
    );
}
export default Home ;