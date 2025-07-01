import React from 'react';

function Brokrage() {
    return (
        <div className='container mb-5'>
            <hr className='text-muted mb-5'></hr>
            <div className='row'>
                
                <div className=' col-12 col-sm-6 mt-5'>
                    <h4 className='text-center mb-4' style={{color:"#387ed1"}}>Brokrage calculator</h4>
                    <ul className='text-muted'>
                        <li><p>The Zerodha Brokerage Calculator helps you calculate all charges before placing a trade.</p></li>
                        <li><p>It includes brokerage, STT, exchange transaction charges, GST, SEBI charges, and stamp duty.</p></li>
                        <li><p>You can use it for equity delivery, intraday, futures and options, currency, and commodities.</p></li>
                        <li><p>Zerodha charges zero brokerage on equity delivery and direct mutual funds.</p></li>
                        <li><p>A flat ₹20 or 0.03% per executed order is charged for intraday, F&O, currency, and commodities.</p></li>
                        <li><p>The calculator shows net profit or loss after deducting all charges.</p></li>
                        <li><p>It is simple to use — just enter buy price, sell price, quantity, and product type.</p></li>
                        <li><p>There are no hidden charges; everything is transparent.</p></li>
                        <li><p>It helps you understand the break-even point for your trades.</p></li>
                    </ul>

                </div>
                <div className=' col-12 col-sm-6 mt-5'>
                    <h4 style={{color:"#387ed1"}} className='text-center mb-4'>Brokrage calculator</h4>
                    <ul className='text-muted'>
                        <li><p>Stamp duty is now uniform across all states as per new regulations.</p></li>
                        <li><p>GST is updated to 18% on brokerage and exchange charges.</p></li>
                        <li><p>Support for commodity and currency segments has been added.</p></li>
                        <li><p>The calculator now shows break-even price automatically.</p></li>
                        <li><p>The user interface has been improved for better experience.</p></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Brokrage;