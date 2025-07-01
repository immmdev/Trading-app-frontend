import React from 'react';
import {Link} from 'react-router-dom';
function Team() {
    return ( 
        <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center'>
            <div className='row'>
                <h1 className='fs-2 text-center mb-5'>People</h1>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-12 col-sm-4 text-center mt-2'>
                        <img style={{width:"50%",borderRadius:"50%"}}src='media\images\nithinKamath.jpg' alt='founder'></img>
                        <h4>Nithin Kamath</h4>
                        <h6>Founder, CEO</h6>
                    </div>
                    <div className=' col-12 col-sm-4 text-muted mt-2'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.<br></br>Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisor (MDAC).

                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p> Connect on <Link to='/'>Homepage</Link> / <Link to='/twitter'>Twitter</Link> / <Link to='/tradingqna'>TradingQnA</Link></p>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
            
        </div>
     );
}

export default Team;