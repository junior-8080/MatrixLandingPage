import React from 'react';
import About from '../components/Homepage/About';
import Footer from '../components/common/Footer';
import Banner from '../components/Homepage/Banner';
import Challenges from '../components/Homepage/Challenges';
import Solutions from '../components/Homepage/Solutions';
// import Navbar from '../components/Homepage/Navbar';


const Homepage = () => {
    return (
        <div>
            <div>
                <Banner />
                <About />
                <Challenges />
                <Solutions />
            </div>
            <Footer />
        </div>

    );
}

export default Homepage;
