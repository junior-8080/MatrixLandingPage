import React from 'react';
import Navbar from './Navbar';
import BannerImage from "../../images/BannerImage.svg";
import BaseContainer from '../common/BaseContainer';


const Banner = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(311.76deg, #80E0FF 20.53%, #FFFFFF 60.72%)" }}>
            <BaseContainer>
                <Navbar />
            </BaseContainer>
            <hr />
            <BaseContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-10" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-primary_dark lg:text-6xl text-4xl lg:py-0 py-8 font-bold">Digital solution for<br /> carbon projects<br /> MRV</h1>
                                <p className="text-primary_dark_200 py-2 leading-7">Helping project developers and carbon registries to produce carbon credits faster and cheaper.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 lg:justify-start justify-center">
                                <button className="bg-primary_blue text-white lg:px-6 px-3 py-3 rounded-lg mr-4 hidden lg:block">Go to Forum</button>
                                <button className=" text-primary_blue bg-white border-2 border-primary_blue px-6 py-3 rounded-lg hidden lg:block">Go to Dashboard</button>
                                <div className="lg:hidden block">
                                    <button className="bg-primary_blue  text-white px-4 py-3 rounded-lg">Join Waitlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={BannerImage} alt="banner" width={"100%"} />
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
}

export default Banner;
