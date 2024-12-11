import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import MealProfile from "./Pages/Menu/MealProfile/MealProfile";
import Order from "./Pages/Orders/Orders";
import SendOrder from "./Pages/Orders/SendDetailsOrder/SendOrder";





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


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;