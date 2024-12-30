import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/Common/useProductDetails";
import SectionTitle from "../../ReUseable-Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductDetails.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import cart from '../../assets/cart.png'


const ProductDetails = () => {
  const itemId = useParams();
  const [details, itemRefetch, isLoading] = useProductDetails(itemId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(details)
  return (
    <div className="pt-[10%] pb-[5%]">
      <SectionTitle title={"A Symphony of Aroma and Artistry"}></SectionTitle>
      <div className=" grid grid-cols-2 gap-10 px-[3%] py-[2%]">
        <div className="bg-purple-50 px-[10%] py-[3%]">
          <div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#1203e2",
                "--swiper-pagination-color": "#1203e2",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {
                details?.imgGallery?.map(img =><SwiperSlide key={img._id}>
                  <img className="h-[250px]" src={img} />
                </SwiperSlide>)
              }
              
              
            </Swiper>
            <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {
                details?.imgGallery?.map(img =><SwiperSlide key={img._id}>
                  <img className="h-[250px]" src={img} />
                </SwiperSlide>)
              }
        
       
      </Swiper>
          </div>
        </div>
        <div className="px-[5%] py-[3%]">
              <div>
                <div className="flex justify-start items-center gap-5">
                  <h1 className={`font-myfont font-semibold text-xl px-[2%] py-[1%] shadow-lg shadow-yellow-100 bg-red-800 text-white rounded-2xl ${details?.price.discount ? '': 'hidden'}`}>{details?.price.discount ? 'On Offer': ''}</h1>
                  <h1 className={`font-myfont font-semibold text-xl px-[2%] py-[1%] shadow-lg shadow-yellow-100 bg-purple-800 text-white rounded-2xl ${details?.popular ? '': 'hidden'}`}>{details?.popular ? 'Popular': ''}</h1>
                </div>
                <div className="py-[3%] flex flex-col justify-start gap-4">
                  <h1 className="font-myfont font-bold text-3xl">{details?.name}</h1>
                  <div className="flex justify-start items-center gap-3">
                    <p className={`font-myfont text-xl px-[2%] py-[1%] ${details?.price.discount ? 'line-through': 'hidden'}`}>{details?.price.previous_price}$</p>
                    <p className={`font-myfont font-semibold text-xl px-[2%] py-[1%]`}>{details?.price.present_price}$</p>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    {
                      details?.availableSizes?.map((size, i)=> <div className="flex flex-col justify-center items-center gap-2 font-myfont2 font-semibold px-[4%] py-[3%] bg-pink-100 rounded-md shadow-md" key={i}>
                        <p>{size.size}</p>
                        <p>{size.price}$</p>
                      </div>)
                    }
                  </div>
                  <div className="py-[3%]">
                    <button className="px-[3%] py-[2%] rounded-xl border-[1px] flex justify-center items-center gap-2 hover:bg-green-100 shadow-lg"><img className="h-[30px]" src={cart} alt="" /> <span>Add to Cart</span></button>
                  </div>
                </div>
                
              </div>
        </div>
      </div>
      <div className="px-[3%]">
        <div className="py-[2%]">
          <h1 className="font-myfont font-semibold text-2xl border-b-2 w-[50%] py-[2%]">Perfume Description</h1>
          <p className="font-myfont text-justify w-[80%]">{details?.description}</p>
        </div>
        <h1 className="font-myfont font-semibold text-2xl border-b-2 w-[50%] py-[2%]">Reviews</h1>
        <div className="flex flex-col justify-start items-start gap-5 pt-[2%]">
          
          {
            details?.reviews?.map((review, index)=>
              <div key={index} className="flex flex-col justify-start items-start gap-3 shadow-md px-[3%] py-[2%]">
                <div className="flex justify-start gap-5">
                  <h1 className="font-myfont2 font-semibold">{review.reviewer}</h1>
                  <p>{review.rating}</p>
                </div>
                <p className="font-myfont2">{review.comment}</p>
              </div>
            )
          }
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
