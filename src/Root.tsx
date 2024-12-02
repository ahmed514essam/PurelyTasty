import { Outlet } from "react-router";
import Header from "./MainComponents/Header/Header";
import Footer from "./MainComponents/Footer/Footer";

const Root = () => {
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
);
}
export default Root ;