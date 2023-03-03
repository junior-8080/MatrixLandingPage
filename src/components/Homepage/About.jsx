import React from 'react';
import BulletIcon from "../../images/BulletIcon.svg";
import Img1 from "../../images/img1.jpeg";
import Img2 from "../../images/img2.jpeg";
import BaseContainer from '../common/BaseContainer';



const About = ({ aboutMrv }) => {
    return (
        <BaseContainer>
            <div className="flex  flex-wrap justify-center mt-4 lg:hidden">
                <button className="bg-primary_blue text-white lg:px-6 px-3 py-3 rounded-lg mr-4">Go to Forum</button>
                <button className=" text-primary_blue bg-white border-2 border-primary_blue px-6 py-3 rounded-lg">Go to Dashboard</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-20" data-aos="fade-up" data-aos-delay="200" id="about">
                <div>
                    <p className="text-4xl mb-6 font-bold">What is MRV?</p>
                    {
                        aboutMrv.map(item => <div className="mb-6" key={item.title}>
                            <div className="flex mb-1">
                                <img src={BulletIcon} alt="bullet" />
                                <p className=" text-lg ml-3">{item.title}</p>
                            </div>
                            <div className="flex">
                                <img src={BulletIcon} alt="bullet" className="invisible" />
                                <p className="ml-3 text-primary_dark_200">{item.description}</p>
                            </div>
                            <div className="lg:hidden">
                                <img src={BulletIcon} alt="bullet" className="invisible" />
                                <img src={Img1} alt="challenges" className="rounded-lg ml-5" />
                            </div>

                        </div>)
                    }
                </div>
                <div className=" lg:block hidden">
                    <div className="flex flex-wrap justify-center lg:mt">
                        <div className="flex items-center mr-6 lg:mb-0 mb-2">
                            <img src={Img2} alt="challenges" className="rounded-lg" />
                        </div>
                        <div>
                            <div className="mb-6 rounded-lg">
                                <img src={Img1} alt="challenges" className="rounded-lg" />
                            </div>
                            <div>
                                <img src={Img1} alt="challenges" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </BaseContainer>
    );
}

export default About;
