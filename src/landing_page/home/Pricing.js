import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-5 d-flex align-items-center justify-content-center'>
            <div className='row '>
                <div className='col-12 col-sm-4 mb-5'>
                <h1 className='fs-2'>Unbeatable pricing</h1>
                <p>we pioneered the concep of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a href='#'>See princing <i class="fa-solid fa-arrow-right-long arrow"></i></a>
            </div>
            <div className='col-2'>

            </div>
             <div className='col-6 left-part mt-5 mb-5 d-flex align-items-center justify-content-center'>
                <div className='row text-center'>
                    <div className='col-6 p-3  border'>
                        <h1 className='mb-3 '>₹0</h1>
                        <p>Free equality delivery and direct mutual funds</p>
                    </div>
                    <div className='col-6 p-3 border'>
                        <h1 className='mb-3 '>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
     );
}

export default Pricing;