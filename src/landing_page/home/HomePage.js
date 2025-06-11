import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Pricing from './pricing';
function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default HomePage;