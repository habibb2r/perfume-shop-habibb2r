import { Outlet } from "react-router-dom";
import Navbar from "../SharedLayout/Navbar/Navbar";
import Footer from "../SharedLayout/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;