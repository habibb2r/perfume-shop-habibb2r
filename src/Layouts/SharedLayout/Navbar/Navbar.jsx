import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import menu from '../../../assets/menu-bar.png'
import closemenu from '../../../assets/cancel.png'
import { useState } from "react";
import './Navbar.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="fixed w-full mx-auto max-w-screen-2xl  bg-yellow-200 bg-opacity-80 z-10">
            <div className="flex justify-between items-center md:gap-5 px-[3%] py-[1.5%] font-myfont">
                <div className="w-full">
                    <img className="h-[55px] md:h-[70px]" src={logo} alt="" />
                </div>
                <div className="resposive-nav">
                    <img onClick={() => setOpen(!isOpen)} className="h-[40px] w-[40px]" src={isOpen? closemenu : menu} alt="" />
                </div>
                <div className={`flex justify-center md:justify-between w-full items-center gap-5 font-semibold navbar-res ${isOpen ? ' ' : 'navbar-active'}`}>
                    <div className="flex md:flex-row flex-col justify-start md:items-center items-start gap-5">
                        <NavLink>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink>Contact Us</NavLink>
                    </div>
                    <div>
                        <Link to='/login' className="px-3 py-2 bg-black text-white rounded-2xl">Login</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;