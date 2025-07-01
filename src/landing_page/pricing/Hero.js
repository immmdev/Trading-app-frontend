import React from 'react';
function Hero() {
    return ( 
        <div className='conatiner'>
            <div className='row text-center'>
                <h1 className='fs-2 mt-5 mb-4'>Pricing</h1>
                <p className='text-muted'>Free equity investments and flat ₹20 intraday and F&O trades </p>
            </div>
            <hr className='mt-5 mb-5 text-muted'></hr>
            <div className='row p-5 text-center'>
                <div className='col-12 col-sm-4'>
                    <img style={{ width: "60%"}}src='media\images\pricing0.svg' alt='free-equity-delivery'/>
                    <h3>Free equity delivery</h3>
                    <p style={{paddingRight:"20%",paddingLeft:"20%"}} className='text-muted '>All equity investments (NSE, BSE), are absolutely free - ₹0 brokrage. </p>
                </div>
                <div className='col-12 col-sm-4'>
                    <img style={{ width: "60%"}} src='media\images\intradayTrades.svg' alt='intraday-f&q'/>
                    <h3>Intraday and F&O trades</h3>
                    <p style={{paddingRight:"20%",paddingLeft:"20%"}} className='text-muted'>Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades.</p>
                </div>
                <div className='col-12 col-sm-4'>
                    <img style={{ width: "60%"}} src='media\images\pricingMF.svg' alt='fdi'/>
                    <h3>Free direct investments</h3>
                    <p style={{paddingRight:"20%",paddingLeft:"20%"}} className='text-muted'>All direct mutual fund investments aree absolutely free - ₹0 commissions & DP charges</p>
                </div>
            </div>

        </div>
     );
}

export default Hero;