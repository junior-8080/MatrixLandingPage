import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import { socialHandles } from '../../utils/data';
import BaseContainer from './BaseContainer';


const Footer = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F1F6FD 36.46%)" }}>
            <BaseContainer>
                <div className="flex justify-between items-center py-5 lg:flex-row flex-col">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="text-sm text-gray-400">SwiftSustain all rights reserved.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <img src={Logo} alt="logo" width={"120px"} />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        {
                            socialHandles.map(item => <Link to={item.url} className="mr-4">
                                <i className={item.icon}></i>
                            </Link>)
                        }
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
}

export default Footer;
