import React from 'react';
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { navs } from '../../utils/data';

const Navbar = () => {
    return (
        <div className="flex justify-between py-2">
            <div className="flex flex-wrap items-center">
                <img src={Logo} alt="logo" />
                <p>MRVix</p>
            </div>
            <div className="flex flex-wrap items-center">
                <ul className="flex flex-wrap">
                    {
                        navs.map((nav) => <li className="mr-3">
                            <Link to={"/"}>{nav.name}</Link>
                        </li>)
                    }

                </ul>
                <div>
                    <button className="bg-primary_blue text-white px-4 py-3 rounded-lg">Join Waitlist</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
