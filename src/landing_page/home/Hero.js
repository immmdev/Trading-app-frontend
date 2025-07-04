import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-5 '>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero-image' className='mb-5' />
                <h1 className='mt-3'>
                    Invest in everything
                </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>
                <button className='btn p-2 btn-primary hero-btn fs-5' onClick={() => {
                    window.location.href = "https://trading-app-dashboard-ebon.vercel.app/signup";
                }}>
                    Signup now
                </button>
            </div>
        </div>

    );
}

export default Hero;