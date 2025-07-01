import React from 'react';
function CreateTicket() {
    return (
        <div className='container ticket-creation'>
            <div className='row mt-5'>
                <h3 className='p-3'>To create a ticket, select a relevent topic</h3>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-sm-4 col-12 mb-3'>
                    <div className='d-flex gap-2'>
                        <i class="fa-solid fa-square-plus p-1"></i> <h5 className='fs-5 mb-5'>Account Opening</h5>
                    </div>

                    <div className='mb-2'><a href="#">Online Account Opening</a></div>
                    <div className='mb-2'><a href="#">Offline Account Opening</a></div>
                    <div className='mb-2'><a href="#">Company, Partnership and HUF Account Opening</a></div>
                    <div className='mb-2'><a href="#">NRI Account Opening</a></div>
                    <div className='mb-2'><a href="#">Charges at Zerodha</a></div>
                    <div className='mb-2'><a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a></div>
                </div>

                <div className='col-sm-4 col-12 mb-3'>

                    <div className='d-flex gap-2'><i class="fa-solid fa-user p-1"></i><h5 className='fs-5 mb-5'>Your Zerodha account</h5></div>
                    <div className='mb-2'><a href="#">Login Credentials</a></div>
                    <div className='mb-2'><a href="#">Account Modification and Segment Addition</a></div>
                    <div className='mb-2'><a href="#">DP ID and bank details</a></div>
                    <div className='mb-2'><a href="#">Your Profile</a></div>
                    <div className='mb-2'><a href="#">Transfer and conversion of shares</a></div>
                </div>

                <div className='col-sm-4 col-12 mb-3'>
                    <div className='d-flex gap-2'>
                        <i class="fa-solid fa-chart-column p-1"></i><h5 className='fs-5 mb-5'>Your Zerodha account</h5>
                    </div>

                    <div className='mb-2'><a href="#">Margin/leverage, Prodd...</a></div>
                    <div className='mb-2'><a href="#">Kite Web and Mobile</a></div>
                    <div className='mb-2'><a href="#">Trading FAQs</a></div>
                    <div className='mb-2'><a href="#">Corporate Actions</a></div>
                    <div className='mb-2'><a href="#">Sentinel</a></div>
                    <div className='mb-2'><a href="#">Kite API</a></div>
                    <div className='mb-2'><a href="#">Pi and other platforms</a></div>
                </div>


            </div>
            <div class="row mb-5">

                <div class="col-sm-4 col-12 mb-3">
                    <div className='d-flex gap-2'>
                        <i class="fa-solid fa-money-check p-1"></i><h5 className='fs-5 mb-5'>Funds</h5>
                    </div>
                    <div className='mb-2'><a href="#">Adding Funds</a></div>
                    <div className='mb-2'><a href="#">Fund Withdrawal</a></div>
                    <div className='mb-2'><a href="#">eMandates</a></div>
                    <div className='mb-2'><a href="#">Adding Bank Accounts</a></div>
                </div>

                <div class="col-sm-4 col-12 mb-3">
                    <div className='d-flex gap-2'>
                        <i class="fa-solid fa-circle-notch p-1"></i><h5 className='fs-5 mb-5'>Console</h5>
                    </div>
                    <div className='mb-2'><a href="#">Reports</a></div>
                    <div className='mb-2'><a href="#">Ledger</a></div>
                    <div className='mb-2'><a href="#">Portfolio</a></div>
                    <div className='mb-2'><a href="#">60 Day Challenge</a></div>
                    <div className='mb-2'><a href="#">IPO</a></div>
                    <div className='mb-2'><a href="#">Referral Program</a></div>
                </div>

                <div class="col-sm-4 col-12 mb-3">
                    <div className='d-flex gap-2'>
                        <i class="fa-regular fa-circle p-1"></i><h5 className='fs-5 mb-5'>Coin</h5>
                    </div>
                    <div className='mb-2'><a href="#">Understanding Mutual Funds</a></div>
                    <div className='mb-2'><a href="#">About Coin</a></div>
                    <div className='mb-2'><a href="#">Buying and Selling through Coin</a></div>
                    <div className='mb-2'><a href="#">Starting an SIP</a></div>
                    <div className='mb-2'><a href="#">Managing your Portfolio</a></div>
                    <div className='mb-2'><a href="#">Coin App</a></div>
                    <div className='mb-2'><a href="#">Moving to Coin</a></div>
                    <div className='mb-2'><a href="#">Government Securities</a></div>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;