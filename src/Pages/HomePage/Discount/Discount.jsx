import React from 'react';
import { Link } from 'react-router-dom';
import dis1 from '../../../assets/discount1.webp'
import dis2 from '../../../assets/discount2.webp'

const Discount = () => {
    return (
        <div className='px-[2%] py-[5%] '>
            <div className='flex justify-center items-center gap-5 font-myfont font-semibold text-xl px-[2%] py-[3%]'>
                <div className='relative'>
                    <div className='flex justify-center items-center px-[10%]'>
                        <img className='h-[350px] w-[250px] rounded-full shadow-2xl shadow-purple-500' src={dis1} alt="" />
                        <img className='h-[250px] w-[180px] rounded-full absolute top-[15%] left-[80%] shadow-2xl shadow-purple-500' src={dis2} alt="" />
                    </div>
                    <div className='absolute top-[-5%] left-[45%]'>
                        <h1 className='font-normal font-title text-2xl rotate-[-30deg]'>Best Perfume to for you</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-5  px-[15%]'>
                    <h1 className='text-3xl w-[450px]'>Explore our deals and discounts upto 20%</h1>
                    <p className='font-normal font-myfont2'>Unlock the Essence of Elegance with Every Spritz</p>
                    <Link className='text-sm px-[2%] py-[1%] bg-black rounded-2xl text-white'>Explore More</Link>
                </div>
            </div>
        </div>
    );
};

export default Discount;