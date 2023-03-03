import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../images/Logo.svg";
import BaseContainer from './BaseContainer';


const Footer = ({ socialHandles }) => {
    return (
        <div style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F1F6FD 36.46%)" }} >
            <BaseContainer>
                <div className="flex justify-between items-center py-5 lg:flex-row flex-col">
                    <div>
                        <p className="text-sm text-gray-400">SwiftSustain all rights reserved.</p>
                    </div>
                    <div>
                        <HashLink smooth to={"/#home"}>
                            <img src={Logo} alt="logo" width={"120px"} />
                        </HashLink>
                    </div>
                    <div>
                        {
                            socialHandles.map((item, index) => <Link to={item.url} className="mr-4" key={index}>
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
