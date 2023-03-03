import React from 'react';
import About from '../components/Homepage/About';
import Footer from '../components/common/Footer';
import Banner from '../components/Homepage/Banner';
import Challenges from '../components/Homepage/Challenges';
import Solutions from '../components/Homepage/Solutions';
import Team from '../components/Homepage/Team';
import WaitList from '../components/Homepage/WaitList';
import LatestArticles from '../components/Homepage/LatestArticles';
import { aboutMrv, articles, challenges, members, socialHandles, solutions } from '../utils/data';




const Homepage = () => {
    return (
        <div>
            <div>
                <Banner />
                <About aboutMrv={aboutMrv} />
                <Challenges challenges={challenges} />
                <Solutions solutions={solutions} />
                <Team members={members} />
                <WaitList />
                <LatestArticles articles={articles} />
            </div>
            <Footer socialHandles={socialHandles} />
        </div>

    );
}

export default Homepage;
