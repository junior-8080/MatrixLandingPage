import React from 'react';
import { aboutMrv } from '../../utils/data';
import BaseContainer from '../common/BaseContainer';
import BulletIcon from "../../images/BulletIcon.svg";
import Img1 from "../../images/img1.jpeg";
import Img2 from "../../images/img2.jpeg";



const About = () => {
    return (

        <BaseContainer>
            <div className="grid grid-cols-2 py-20">
                <div>
                    <p className="text-4xl mb-6">What is MRV?</p>
                    {
                        aboutMrv.map(item => <div className="mb-6">
                            <div className="flex mb-1">
                                <img src={BulletIcon} alt="bullet" />
                                <p className=" text-lg ml-3">{item.title}</p>
                            </div>
                            <div className="flex">
                                <img src={BulletIcon} alt="bullet" className="invisible" />
                                <p className="ml-3 text-primary_dark_200">{item.description}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="flex items-center mr-6">
                        <img src={Img2} alt="challenges" className="rounded-lg"/>
                    </div>
                    <div>
                        <div className="mb-6 rounded-lg">
                            <img src={Img1}alt="challenges"  className="rounded-lg"/>
                        </div>
                        <div>
                            <img src={Img1} alt="challenges" className="rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
}

export default About;
