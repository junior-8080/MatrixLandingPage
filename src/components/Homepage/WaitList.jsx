import React from 'react';
import BaseContainer from '../common/BaseContainer';

const WaitList = () => {
    return (
        <div className="py-32" style={{backgroundImage:"linear-gradient(262.96deg, #FFFFFF 0%, #80E0FF 100%)"}}>
            <BaseContainer>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="text-primary_blue text-sm py-4">Get Our Aplication</p>
                        <p className="text-4xl font-bold py-4">Sign up now for early access</p>
                        <p className="text-sm text-primary_dark_200">Get early access to use the latest technology in carbon projects MRV.</p>
                    </div>
                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
                        <div>
                            <button className="bg-primary_blue text-white text-4xl lg:px-28 px-16 lg:py-16 py-8 rounded-lg">Join Waitlist</button>
                        </div>
                    </div>
                </div>
            </BaseContainer>
        </div>


    );
}

export default WaitList;
