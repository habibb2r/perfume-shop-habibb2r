import logo from '../../../assets/logo.png'
import fb from '../../../assets/facebook.png'
import linkedin from '../../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='flex justify-between items-center gap-5 px-[5%] py-[1.5%] bg-purple-50'>
            <img className='h-[70px]' src={logo} alt="" />
            <div>
                <h1 className='font-myfont font-semibold'>Follow Me On</h1>
                <div className='flex justify-center items-center gap-3 py-2'>
                <a  href="https://www.facebook.com/habibb2r"><img className='h-[45px]' src={fb} alt="" /></a>
                <a  href="https://linkedin.com/in/habibb2r"><img className='h-[45px]' src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;