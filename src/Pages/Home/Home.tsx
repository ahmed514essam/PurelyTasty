import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Data from "../../european_meals_with_all_details.json";
import imgOffer from "../../../public/images/KitchenOffer.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck , faHotdog , faClock} from "@fortawesome/free-solid-svg-icons";
import England from "../../../public/images/england.jpg" ;
import Germany from "../../../public/images/germani.jpg" ;
import Italy from "../../../public/images/italy.jpg" ;
import Spain from "../../../public/images/spain.jpg" ;
import France from "../../../public/images/france.jpg" ;
import { useNavigate } from "react-router";


const Home: React.FC = () => {
  interface Info {
    meal: string;
    city: string;
    description: string;
    image?: string;
    components: string[];
    price: number;
    price_after_offer: number;
  }

  const [data, setData] = useState<Info[]>([]);

  useEffect(() => {
    setData(Data as Info[]);
  }, []);

  const filteredData = data.filter((item) => item.city === "England");

const navicate = useNavigate();
const goResev = () => {
  navicate("/reservation/confirm-email")
}


  return (
    <>
      {/* Hero Section */}
      <section className={style.sectionOne}>
        <div className={style.divSectinOne}>
          <h1>Where Taste Meets Elegance</h1>
        </div>
      </section>

      <section className={style.secondSection}>
        <h2>An Unforgettable Culinary Journey</h2>
        <button onClick={goResev}>Reserve Now</button>
      </section>

      <section className={style.secondSectionh}>
        <div className={style.content}></div>
      </section>






      <section className={style.sectionShowFoods}>
        
<div className={style.content}>

        {filteredData.map((item, index) => (

          <div key={index} className={style.foodItem}>

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


          </div>
        ))}


</div>
      </section>


<section className={style.fourthSection}>

<div className={style.contentSection}>

<div className={style.imgHalf}>
<img src={imgOffer} />
</div>

<div className={style.detailsImageHalf}>
<p>

I always say that Savore is more than just a name ,it's a full-fledged brand that represents the finest and most exquisite cuisine from across Europe. With expert chefs and food connoisseurs, our mission is to ensure every customer leaves delighted. To make your experience even more enjoyable, we offer a 30% discount on meals, letting you savor exceptional food while saving money. We're eagerly waiting to welcome you, so why wait? Book your table today and reach out to us anytime!
</p>
</div>

</div>

</section>

<div className={style.fiveSecService}>

<div className={style.oneServ}>
  <span>
  <FontAwesomeIcon className={style.iconServ} icon={faTruck} />
  </span>
  <p>delivery</p>
</div>

<div className={style.oneServ}>
  <span>
  <FontAwesomeIcon className={style.iconServ} icon={faHotdog} />
  </span>
  <p>Take away</p>
</div>

<div className={style.oneServ}>
  <span>
  <FontAwesomeIcon className={style.iconServ} icon={faClock} />
  </span>
  <p>reservation</p>
</div>


</div>



<section className={style.brandsFoodsSection}>

<div className={style.onebrandCity}>
  <img src={England} />
  <h3>England</h3>
</div>

<div className={style.onebrandCity}>
  <img src={France} />
  <h3>France</h3>
</div>

<div className={style.onebrandCity}>
  <img src={Italy}/>
  <h3>Italy</h3>
</div>

<div className={style.onebrandCity}>
  <img src={Spain}/>
  <h3>Spain</h3>
</div>

<div className={style.onebrandCity}>
  <img src={Germany} />
  <h3>Germany</h3>
</div>
</section>



    </>
  );
};

export default Home;
