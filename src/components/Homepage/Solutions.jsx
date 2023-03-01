import React from 'react';
import { solutions } from '../../utils/data';

const Solutions = () => {
    return (
        <div>
            <div className="py-12" style={{ backgroundImage: "linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)" }}>
                <div className="mx-5">
                    <p className="text-center text-3xl font-bold py-5">Our Solution</p>
                    <p className="text-center text-lg font-semibold py-4 mb-8">We don't have much time for solving climate change, that's why we are developing a digital for <br /> automating Measuring, Reporting, and Verification process of carbon offsets.</p>
                </div>
                <div className="grid grid-cols-2">
                    {
                        solutions.map(solution => <div className="flex bg-white shadow-lg w-[60%] mr-auto ml-auto py-10 px-5 mb-4">
                            <div>
                                <img src={solution.icon} alt={solution.title} />
                            </div>
                            <div className="pt-4">
                                <p className=" text-lg font-bold">{solution.title}</p>
                                <p className=" text-primary_blue">{solution.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Solutions;
