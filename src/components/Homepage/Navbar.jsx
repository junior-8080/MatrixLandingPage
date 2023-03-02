import React from 'react';
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { navs } from '../../utils/data';

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <img src={Logo} alt="logo" width={"100px"} />
            </div>
            <div className="flex flex-wrap items-center">
                <ul className="flex flex-wrap lg:justify-start justify-center">
                    {
                        navs.map((nav) => <li className="mr-3 text-sm">
                            <Link to={"/"}>{nav.name}</Link>
                        </li>)
                    }

                </ul>
                <div className="lg:block hidden">
                    <button className="bg-primary_blue  text-white px-4 py-3 rounded-lg">Join Waitlist</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
