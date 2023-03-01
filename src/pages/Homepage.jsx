import React from 'react';
import About from '../components/Homepage/About';
import Footer from '../components/common/Footer';
import Banner from '../components/Homepage/Banner';
import Challenges from '../components/Homepage/Challenges';
import Solutions from '../components/Homepage/Solutions';
import Team from '../components/Homepage/Team';
import WaitList from '../components/Homepage/WaitList';
import LatestArticles from '../components/Homepage/LatestArticles';
// import Navbar from '../components/Homepage/Navbar';



const Homepage = () => {
    return (
        <div>
            <div>
                <Banner />
                <About />
                <Challenges />
                <Solutions />
                <Team />
                <WaitList />
                <LatestArticles />
            </div>
            <Footer />
        </div>

    );
}

export default Homepage;
