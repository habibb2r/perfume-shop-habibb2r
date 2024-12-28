import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="fixed w-full mx-auto z-50 bg-yellow-200 bg-opacity-80">
            <div className="flex justify-between items-center gap-5 px-[2%] py-[1.5%] font-myfont">
                <div className="w-full">
                    <img className="h-[70px]" src={logo} alt="" />
                </div>
                <div className="flex justify-between items-center gap-5 w-full md:text-xl">
                    <div className="flex justify-center items-center gap-5">
                        <NavLink>Home</NavLink>
                        <NavLink>Perfumes</NavLink>
                    </div>
                    <div>
                        <Link>Login</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;