import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg"
import { socialHandles } from '../../utils/data';


const Footer = () => {
    return (
        <div className="flex justify-between bg-primary_dark py-5">
            <div>
                <p className="text-gray-300">MrVix all rights reserved.</p>
            </div>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                {
                    socialHandles.map(item => <Link to={item.url}>
                        <i className={item.icon}></i>
                    </Link>)
                }
            </div>
        </div>
    );
}

export default Footer;
