import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import MealProfile from "./Pages/Menu/MealProfile/MealProfile";
import Order from "./Pages/Orders/Orders";
import SendOrder from "./Pages/Orders/SendDetailsOrder/SendOrder";
import Contact from "./Pages/ContactUs/Contact";
import EnsureReserviation from "./Pages/Reserviation/EnsureEmailReserviation/EnsureReserviation";
import SelectReserviation from "./Pages/Reserviation/SelectReserviatin/SelectReserviation";
import About from "./Pages/About/About";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
       <Route path="/" element={<Home/>}/>
        <Route path="/menu-foods" element={<Menu/>} />
        <Route path="/:meal" element={<MealProfile/>} />
        <Route path="/your-order" element={<Order/>} />
<Route path="/complete-order" element={<SendOrder/>} />
<Route path="/contactus" element={<Contact/>} />
<Route path="/reservation/confirm-email" element={<EnsureReserviation/>} />
<Route path="/reservation/selecttime" element={<SelectReserviation/>} />
<Route path="/about" element={<About/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;