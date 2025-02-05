import coverimg from "../../../assets/cover.png";
import coverimgPhone from "../../../assets/cover-phone.png";
import banner1 from "../../../assets/bannerimg-1.jpg";
import banner2 from "../../../assets/bannerimg-2.webp";
import hotdeal from "../../../assets/hot-deal.png";
import original from "../../../assets/original.png";
import { Link } from "react-router-dom";
import './Banner.css'
const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full h-[100vh]">
        <img
          className="w-full h-full object-fill hidden md:block"
          src={coverimg}
          alt=""
        />
        <img
          className="w-full h-full object-cover block md:hidden"
          src={coverimgPhone}
          alt=""
        />
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 absolute top-[30%] md:top-[20%] w-full px-[5%] md:px-0">
        <div className="hidden md:flex flex-col justify-between items-center gap-5 w-full">
            <h1 className="font-title text-black text-xs md:text-2xl md:pb-[25%]">Welcome to our store <br /> <span className="ml-5">Enjoy your shopping..!</span></h1>
          <div className="relative">
            <img
              className="h-[100px] md:h-[250px] md:w-[200px] rounded-full shadow-2xl shadow-black"
              src={banner1}
              alt=""
            />
            <img
              src={hotdeal}
              className="h-[50px] md:h-[100px] absolute top-[-30%] right-1"
              alt=""
            />
          </div>
        </div>


        <div className="flex flex-col justify-between items-center gap-5 w-full">
          <h1 className="font-myfont font-bold text-2xl md:text-4xl text-center pb-[7%]">
            Step into a World of Fragrance <br /> Where Dreams Blossom.{" "}
          </h1>
          <p className="font-myfont text-center md:text-xl">
            Let Your Fragrance Speak Volumes Before You Say a Word.
          </p>
          <Link className="px-[3%] py-[2%] bg-black font-myfont text-white rounded-2xl">Buy Now</Link>
          <div>
            <h1 className="font-title text-black md:text-2xl">Discover Your Signature Scent</h1>
            <div className="flex flex-col justify-center items-center gap-3 font-myfont py-2">
                <p>Scroll Down</p>
                <div className="scroll"></div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex flex-col justify-center items-center gap-5 w-full">
          <div className="relative">
            <img
              className="h-[100px] md:h-[250px] w-[80px] md:w-[200px] rounded-full shadow-2xl shadow-black"
              src={banner2}
              alt=""
            />
            <img
              src={original}
              className="h-[50px] md:h-[100px] absolute top-[-20%] left-1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
