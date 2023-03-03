import React from 'react';
import Logo from "../../images/Logo.svg";
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { navs } from '../../utils/data';

const Navbar = () => {
    return (
        <div className="flex justify-between" id="home">
            <div>
                <HashLink smooth to="/">
                    <img src={Logo} alt="logo" width={"120px"} />
                </HashLink>
            </div>
            <div className="flex flex-wrap items-center">
                <ul className="flex flex-wrap lg:justify-start justify-center py-4 lg:py-0">
                    {
                        navs.map((nav) => <li className="mr-3 text-sm border-2 border-dashed px-2 mb-2 lg:mb-0" key={nav.name}>
                            <HashLink smooth to={nav.url}>{nav.name}</HashLink>
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
