import perfumeIcon from "../../../assets/aroma.png";
import useGetPopular from "../../../Hooks/Common/useGetPopular";
import SectionTitle from "../../../ReUseable-Components/SectionTitle";

const BestProducts = () => {
  const [popularPerfumes, isLoading] = useGetPopular();
  console.log(popularPerfumes);
  return (
    <div>
      <div className="flex flex-wrap md:flex-row justify-center items-center gap-5 w-full bg-yellow-200 font-myfont font-semibold md:text-xl px-[2%] py-[3%]">
        <p>Fregrence Defined</p>
        <img className="h-[10px] md:h-[30px]" src={perfumeIcon} alt="" />
        <p>Scent Of Elegance</p>
        <img className="h-[10px] md:h-[30px]" src={perfumeIcon} alt="" />
        <p>Perfume Essence</p>
        <img className="h-[10px] md:h-[30px]" src={perfumeIcon} alt="" />
        <p>Aroma Inspirations</p>
        <img className="h-[10px] md:h-[30px]" src={perfumeIcon} alt="" />
        <p>Signature Scent</p>
      </div>

      <div className="px-[2%] py-[3%] bg-pink-100">
        <SectionTitle
          title={"The Most Popular and The best scent of the year"}
        ></SectionTitle>
        {isLoading ? (
          <div className="loading loading-spinner loading-lg flex justify-center"></div>
        ) : (
          ""
        )}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-[10%] py-[2%]">
          {popularPerfumes?.map((item) => (
            <div
              className="flex flex-col justify-center items-center gap-3"
              key={item._id}
            >
              <img
                loading="lazy"
                className="h-[350px] w-[250px] rounded-full shadow-2xl shadow-purple-600"
                src={item.image}
                alt=""
              />
              <p className="font-myfont text-xl font-semibold py-[2%]">{item.name}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-myfont2 font-thin text-center px-[15%]">
            Welcome to our Perfume Store, here we
            showcase a curated selection of our most beloved and highly rated
            fragrances. Discover the scents that our customers adore, featuring
            a range of exquisite aromas that cater to every taste. Whether you
            prefer floral, citrus, or exotic oud, these perfumes are celebrated
            for their captivating essence and lasting impression. Treat yourself
            to one of our top-rated fragrances and experience the allure that
            has made them customer favorites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
