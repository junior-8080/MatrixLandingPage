import React from 'react';
import BaseContainer from '../common/BaseContainer';

const Solutions = ({ solutions }) => {
    return (
        <div className="py-32" style={{ backgroundImage: "linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)" }} id="solutions">
            <BaseContainer>
                <div className="mx-5" data-aos="fade-up" data-aos-delay="300">
                    <p className="text-center text-4xl font-bold py-5">Our Solution</p>
                    <p className="text-center text-lg font-semibold py-4 mb-8">We don't have much time for solving climate change, that's why we are developing a digital for <br /> automating Measuring, Reporting, and Verification process of carbon offsets.</p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    {
                        solutions.map(solution => <div className="flex lg:flex-row flex-col bg-white shadow-lg lg:w-[60%] w-full mr-auto ml-auto py-10 px-5 mb-4" data-aos="fade-up" data-aos-delay="400" key={solution.title}>
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
            </BaseContainer>
        </div>

    );
}

export default Solutions;
