import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = () => {
  return (
    <div className="pt-[10%] pb-[5%] px-[2%]">
      <div>
        <div>
          <h1 className="text-3xl font-myfont font-semibold py-[2%] border-b-[2px] w-1/3">
            About Us - Perfume Shop
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <p className="text-justify font-myfont px-[3%] py-[2%]">
            Welcome to our Perfume Store, your ultimate destination for the best
            and most popular perfumes. At our store, we believe that a fragrance
            is more than just a scent— it is an expression of your personality,
            a statement of your style, and a reflection of your individuality.
            We are dedicated to curating a diverse and exquisite collection of
            perfumes from renowned brands worldwide, ensuring that every
            customer finds their perfect match. Our mission is to provide an
            unparalleled shopping experience, offering not only a wide variety
            of high-quality perfumes but also expert advice and personalized
            recommendations to help you discover scents that resonate with you.
            Whether you are seeking a signature fragrance, a special gift, or
            simply exploring new aromas, our knowledgeable staff is here to
            guide you every step of the way.
          </p>
          <div className="flex justify-center items-center px-[3%] py-[2%] bg-purple-50">
            <img
              className="h-[250px] rounded-md shadow-xl shadow-purple-500"
              src={about1}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center px-[3%] py-[2%] bg-purple-50">
            <img
              className="h-[250px] rounded-md shadow-xl shadow-purple-500"
              src={about2}
              alt=""
            />
          </div>
          <p className="text-justify font-myfont px-[3%] py-[2%]">
            We take pride in our commitment to authenticity, ensuring that every
            perfume in our store is genuine and sourced directly from authorized
            distributors. Customer satisfaction is at the heart of everything we
            do, and we strive to exceed your expectations with exceptional
            service, competitive prices, and a seamless shopping experience.
            Thank you for choosing our Perfume Store. We invite you to explore
            our collection and find the fragrance that defines you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
