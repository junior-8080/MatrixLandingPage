import React from 'react';
import Verified from "../../images/quality.png";
import BaseContainer from '../common/BaseContainer';


const Team = ({ members }) => {
    return (
        <BaseContainer>
            <div className="py-32" id="teams">
                <div data-aos="fade-up" data-aos-delay="300">
                    <p className="text-center text-4xl font-bold py-5">The Godfathers</p>
                    <p className="text-center text-lg font-semibold py-5 mb-8">We are a sustainability and tech experts building <br />digital solutions to scale carbon credits.</p>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {
                        members.map(member => <div className="bg-white shadow-lg p-10 mr-8" data-aos="fade-up" data-aos-delay="300" key={member.name}>
                            <div>
                                <img src={member.image} alt={member.name} className="rounded-full w-40" />
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
