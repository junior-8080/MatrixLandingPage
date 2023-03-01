import React from 'react';
import { challenges } from '../../utils/data';

const Challenges = () => {
    return (
        <div className="py-12">
            <div>
                <p className="text-center text-3xl font-bold py-5">Current Challenges</p>
                <p className="text-center text-lg font-semibold py-5 mb-8">Achieving net zero requires capturing 12 GT of carbon per year until 2030,<br/> but there is a bottleneck in the current process.</p>
            </div>
            <div className="grid grid-cols-3">
                {
                    challenges.map(challenge => <div className="bg-white shadow-lg w-[60%] mr-auto ml-auto py-10 px-5">
                        <p className="text-center">{challenge.title}</p>
                        <p className="text-center text-primary_blue">{challenge.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Challenges;
