import perfumeIcon from '../../../assets/aroma.png'

const BestProducts = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-5 w-full bg-yellow-200 font-myfont font-semibold text-xl px-[2%] py-[3%]'>
                <p>Fregrence Defined</p> 
                <img className='h-[30px]' src={perfumeIcon} alt="" />
                <p>Scent Of Elegance</p> 
                <img className='h-[30px]' src={perfumeIcon} alt="" />
                <p>Perfume Essence</p> 
                <img className='h-[30px]' src={perfumeIcon} alt="" />
                <p>Aroma Inspirations</p> 
                <img className='h-[30px]' src={perfumeIcon} alt="" />
                <p>Signature Scent</p> 
                
            </div>
        </div>
    );
};

export default BestProducts;