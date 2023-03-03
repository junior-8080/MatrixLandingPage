import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../common/BaseContainer';


const LatestArticles = ({ articles }) => {
    return (
        <div className="py-32" id="blogs">
            <BaseContainer>
                <div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <p className="text-center text-3xl font-bold py-4">Latest Articles</p>
                        <p className="text-center text-sm py-4 text-primary_dark_200">Sharing is caring, thus we provide you with the latest information in our blog section.</p>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        {
                            articles.map(article => <div className="lg:w-[15%] w-[60%] mr-6" data-aos="fade-up" data-aos-delay="300" key={article.title}>
                                <div className="w-full">
                                    <img src={article.image} alt={article.title} className="w-full rounded-lg" />
                                </div>
                                <div className="ml-2 py-2">
                                    <div className="flex">
                                        <p className="w-10 h-[2px] bg-primary_orange mt-2 mr-1"></p>
                                        <div>
                                            <p className="text-sm font-medium text-primary_dark_200">{article.title}</p>
                                            <p className="text-sm font-medium text-primary_dark_200">{article.description}</p>
                                            <Link to={"/"} className="text-xs text-primary_blue">Continue Reading <i className="fa-sharp fa-solid fa-arrow-right text-xs"></i> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
}

export default LatestArticles;
