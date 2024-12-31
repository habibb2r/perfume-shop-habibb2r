import Banner from "../../Pages/HomePage/Banner/Banner";
import BestProducts from "../../Pages/HomePage/BestProducts/BestProducts";
import Discount from "../../Pages/HomePage/Discount/Discount";
import Products from "../../Pages/HomePage/Products/Products";
import Subscribe from "../../Pages/HomePage/SubscribeNow/Subscribe";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <BestProducts></BestProducts>
           <Discount></Discount>
           <Products></Products>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;