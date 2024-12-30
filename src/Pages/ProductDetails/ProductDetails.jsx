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

const ProductDetails = () => {
  const itemId = useParams();
  const [details, itemRefetch, isLoading] = useProductDetails(itemId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(details)
  return (
    <div className="pt-[10%]">
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
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
