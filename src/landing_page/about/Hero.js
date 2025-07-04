import React from 'react';
function Hero() {
    return (  
        <div className='container mt-5 d-flex align-items-center justify-content-center'>
            <div className='row'>
                 <h1 className='text-center fs-2 mt-5 mb-5'>We pioneered the discount model in India <br></br> Now, we are breaking ground with our technology</h1>
                 <hr className='mt-4 mb-5 text-muted'></hr>
                 <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-12 col-sm-4 text-muted '>
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and “Rodha”, the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                        </p>
                        <p>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes

                        </p>

                    </div>
                    
                    <div className='col-1'></div>
                    <div className=' col-12 col-sm-4 text-muted'>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                        </p>
                        <p>
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                        </p>
                        <p>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                        </p>
                    </div>
                    <div className='col-2'></div>
                 </div>
            </div>
           <hr></hr>
        </div>

    );
}

export default Hero;