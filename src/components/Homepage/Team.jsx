import React from 'react';
import { members } from '../../utils/data';
import BaseContainer from '../common/BaseContainer';
import Verified from "../../images/quality.png";


const Team = () => {
    return (
        <BaseContainer>
            <div className="py-32">
                <div data-aos="fade-up" data-aos-delay="300">
                    <p className="text-center text-4xl font-bold py-5">The Godfathers</p>
                    <p className="text-center text-lg font-semibold py-5 mb-8">We are a sustainability and tech experts building <br />digital solutions to scale carbon credits.</p>
                </div>
                <div className="flex justify-center ">
                    {
                        members.map(member => <div className="bg-white shadow-lg p-10 mr-8" data-aos="fade-up" data-aos-delay="300">
                            <div>
                                <img src={member.image} alt={member.name} className="rounded-full lg:w-40 w-52" />
                                <img src={Verified} alt="verified" width={"25px"} className="mr-auto ml-auto -mt-2" />
                                <p className="text-center text-lg font-semibold">{member.name}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </BaseContainer>

    );
}

export default Team;
