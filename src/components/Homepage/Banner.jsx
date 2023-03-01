import React from 'react';
import Navbar from './Navbar';
import BannerImage from "../../images/BannerImage.svg";
import BaseContainer from '../common/BaseContainer';


const Banner = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)" }}>
            <BaseContainer>
                <Navbar />
            </BaseContainer>
            <hr />
            <BaseContainer>
                <div className="grid grid-cols-2 mt-10 pb-10">
                    <div className="flex items-center">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-primary_dark text-6xl font-bold">Digital solution for<br /> carbon projects<br /> MRV</h1>
                                <p className="text-primary_dark_200 py-2 leading-7">Helping project developers and carbon registries to produce carbon credits faster and cheaper.</p>
                            </div>
                            <div>
                                <button className="bg-primary_blue text-white px-6 py-3 rounded-lg mr-4">Go to Forum</button>
                                <button className=" text-primary_blue bg-white border-2 border-primary_blue px-6 py-3 rounded-lg">Go to Dashboard</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={BannerImage} alt="banner" width={"100%"} />
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
}

export default Banner;
