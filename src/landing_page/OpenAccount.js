import React from 'react';
function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-3'>
                    Open a Zerodha account
                </h1>
                <p className='text-muted'>
                    Modern platforms and apps,₹0 investments, and flat ₹20 intraday and F&O traders.
                </p>
                <button className='btn p-2 btn-primary hero-btn fs-5' onClick={() => {
                    window.location.href = "http://localhost:3001";
                }}>
                    Signup now
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;