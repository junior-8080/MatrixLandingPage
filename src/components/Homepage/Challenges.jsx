import React from 'react';
import { challenges } from '../../utils/data';
import BaseContainer from '../common/BaseContainer';

const Challenges = () => {
    return (
        <div className="py-32" data-aos="fade-up" data-aos-delay="300">
            <BaseContainer>
                <div>
                    <p className="text-center text-4xl font-bold py-5">Current Challenges</p>
                    <p className="text-center text-lg font-semibold py-5 mb-8">Achieving net zero requires capturing 12 GT of carbon per year until 2030,<br /> but there is a bottleneck in the current process.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        challenges.map(challenge => <div className="shadow-lg w-[60%] mr-auto ml-auto py-10 px-5 rounded-lg" style={{ backgroundImage: `${challenge.cardBg}` }}>
                            <p className="text-center font-semibold">{challenge.title}</p>
                            <p className="text-center">{challenge.description}</p>
                        </div>)
                    }
                </div>
            </BaseContainer>

        </div>
    );
}

export default Challenges;
