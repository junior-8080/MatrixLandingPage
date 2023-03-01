import React from 'react';
import BaseContainer from '../common/BaseContainer';

const WaitList = () => {
    return (
        <div className="py-32" style={{backgroundImage:"linear-gradient(262.96deg, #FFFFFF 0%, #80E0FF 100%)"}}>
            <BaseContainer>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-primary_blue text-sm py-4">Get Our Aplication</p>
                        <p className="text-4xl font-bold py-4">Sign up now for early access</p>
                        <p className="text-sm text-primary_dark_200">Get early access to use the latest technology in carbon projects MRV.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <button className="bg-primary_blue text-white text-4xl px-28 py-16 rounded-lg">Join Waitlist</button>
                        </div>
                    </div>
                </div>
            </BaseContainer>
        </div>


    );
}

export default WaitList;
