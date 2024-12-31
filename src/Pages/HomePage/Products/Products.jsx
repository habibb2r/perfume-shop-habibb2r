import { useEffect, useState } from "react";
import SectionTitle from "../../../ReUseable-Components/SectionTitle";
import useGetProducts from "../../../Hooks/Common/useGetProducts";
import { Link } from "react-router-dom";

const Products = () => {
    const [category, setCategory] = useState('All');
    const [products, isLoading, refetch] = useGetProducts({ category });

    useEffect(() => {
        refetch();
    }, [category, refetch]);

    const handleCategory = (category) => {
        setCategory(category);
    };

    return (
        <div className="px-[2%] py-[5%] bg-pink-50">
            <div>
                <SectionTitle title={"Experience the Art of Perfume – Crafted for the Connoisseur"}></SectionTitle>
                <div>
                    <div className="flex justify-center items-center font-myfont font-semibold md:text-xl py-[2%]">
                        {['All', 'New', 'Best', 'Top'].map(cat => (
                            <button
                                key={cat}
                                className={`px-[2%] py-[1%] border-[1px] border-purple-700 ${
                                    category === cat ? 'bg-black text-white' : 'bg-transparent text-black'
                                }`}
                                onClick={() => handleCategory(cat)}
                            >
                                {cat === 'All' ? 'Grab Yours' : cat === 'New' ? 'New Coming' : cat === 'Best' ? 'Best Selling' : 'Top Brand'}
                            </button>
                        ))}
                    </div>
                    {isLoading ? (
                        <div className="flex justify-center items-center py-[5%]"><div className="loading loading-spinner loading-lg"></div></div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-10 px-[15%]">
                            {products?.results.map(product => (
                                <Link to={`/perfumedetails/${product._id}`} className="bg-white shadow-lg flex flex-col justify-center items-center" key={product._id}>
                                    <img className="h-[300px] shadow-inner hover:shadow-2xl hover:scale-105 ease-in-out duration-300" src={product.image} alt={product.name} />
                                    <div className="flex justify-between items-center bg-white px-[2%] py-[3%] w-full">
                                        <h2 className="font-myfont font-semibold">{product.name}</h2>
                                        <p className="font-semibold">${product.price.present_price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
