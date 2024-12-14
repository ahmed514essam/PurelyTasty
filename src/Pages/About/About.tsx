import styless from "./about.module.css"
import deliveryImg from "../../../public/images/delivery.avif" ;
import takeAway from "../../../public/images/takeAway.webp" ;
import aboutImg from "../../../public/images/resturantAbout.jpg" ;
import reservationImg from "../../../public/images/reservation.avif" ;
import { useNavigate } from "react-router";




const About = () => {
const navicate = useNavigate();
const reserv = () => {
    navicate("/reservation")
}
  
    return (
        <body className={styless.bodyies}>

            <div className={styless.sideBar}>
                <div className={styless.linksContentSide}>
                    <a className={styless.onelink} href="#oopp">Overview</a>
                    <a className={styless.twolink} href="#whyy">Why Savore</a>
                    <a className={styless.threelink} href="#whatt">What We Offer</a>
                    <a className={styless.fourlink} href="#reservation">Reserve a Table</a>
                </div>
            </div>

            <section className={styless.oneabout}>

                

                <div className={styless.contentPage}>

                    <h1 id="oopp">Overview</h1>

                    <p className={styless.overviewdetails}>
                        Welcome to GourmetEats, your destination for luxury dining and exceptional culinary experiences. Our mission is to bring the finest cuisines from Italy, France, England, and Spain to your table. Whether you choose to dine in our elegant restaurants or enjoy our dishes from the comfort of your home through our seamless delivery service, we promise an unforgettable gastronomic journey.
                    </p>

                    <img className={styless.firsImagesAbout} src={aboutImg} />

                    <h2 id="whyy" className={styless.whyi}>Why GourmetEats</h2>

                    <p className={styless.whyDetails}>
                        At GourmetEats, we redefine dining with our commitment to quality, flavor, and luxury. Our chefs are renowned for crafting exquisite dishes using only the freshest ingredients sourced from across the globe. With a menu inspired by the rich culinary traditions of Italy, France, England, and Spain, we deliver an unparalleled dining experience. Whether you're celebrating a special occasion or indulging in a moment of self-care, GourmetEats is here to make it extraordinary.
                    </p>

                    <p className={styless.secoWhyDeatails}>
                        From fine dining in our beautifully designed spaces to quick and reliable delivery for enjoying gourmet meals at home, we ensure every aspect of our service exceeds expectations. Our restaurants are designed with elegance in mind, featuring stunning interiors and an atmosphere of sophistication. When dining at home, you can rely on us to deliver your favorite meals with the same level of care and presentation.
                    </p>

                    <p className={styless.secoWhyDeatails}>
                        The GourmetEats experience is enhanced by our state-of-the-art online platform. Make reservations, explore our menu, and order delivery—all with just a few clicks. Our technology ensures a seamless and personalized experience for all our guests. Join us today to savor the best of gourmet dining, whether at our table or yours.
                    </p>

                    <div className={styless.threeImagesAbo}>
                        <img src={takeAway} />
                        <img src={deliveryImg} />
                        <img src={reservationImg} />
                    </div>

                    <h2 className={styless.whyi} id="whatt">What We Offer</h2>

                    <p className={styless.poi}>
                        Our offerings include:
                        <ul>
                            <li>Luxury dining with menus inspired by Italy, France, England, and Spain.</li>
                            <li>Reliable and prompt delivery service to bring gourmet meals to your home.</li>
                            <li>Online reservation system to book your table with ease.</li>
                            <li>Seasonal specials and tasting menus crafted by our chefs.</li>
                        </ul>
                        Explore our menu and reserve your table today to experience the pinnacle of dining excellence.
                    </p>

                    <button onClick={reserv} className={styless.btnGetAppAbou}>Reservation Now</button>

                    <h2 className={styless.whyi} id="reservation">Reserve a Table</h2>

                    <p className={styless.reservationDetails}>
                        Planning a special evening? Use our reservation system to secure your table at GourmetEats. Select your preferred time, date, and location to ensure an unforgettable dining experience. Our team will ensure every detail is perfect for your visit.
                    </p>
                </div>

            </section>
        </body>
    );
};

export default About;
