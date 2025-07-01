import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection 
            imgURL='media\images\kite.png'
            productName='Kite'
            productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
            />
            <RightSection
            imgURL='media\images\console.png'
            productName='Console'
            productDescription='The central dashboard for your Zerodha. Gain insights into your traders and investments with in-depth reports and visualisations.'
            />
            <LeftSection
            imgURL='media\images\coin.png'
            productName='Coin'
            productDescription='Buy direct mutual funds, commision-free, delivered directly your Demat account. Enjoy the investment experience on your Android and iOS devices'
            />
            <RightSection
            imgURL='media\images\kiteconnect.png'
            productName='Kite Connect API'
            productDescription='Build poerful trading platforms and experiences with our super simplle HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
            />
            <LeftSection
            
            imgURL='media\images\varsity.png'
            productName='Varsity mobile'
            productDescription='Our ultra-fast flagship trading platform  with streaming market data,
            advanced charts, an elegant UI, and more, Enjoy the Kite experience seamlessly on your Android and iOS devices.'
            />
            <Universe/>
        </>
     );
}

export default ProductPage;