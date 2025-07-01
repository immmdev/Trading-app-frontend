import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5 p-5 d-flex align-items-center justify-content-center'>
            <div className='row'>
                <div className='col-12 col-sm-6 mb-5 d-flex align-items-center justify-content-center'>
                    <img  style={{width:'90%'}} src='media\images\largestBroker.svg'/>
                </div>
                <div className='col-12 p-5 col-sm-6 left-part'>
                    <h1 className='fs-2'> Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    
                    <div className='unordered-list'>
                        <div>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivaties</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivaties</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='press-logos' className='press'/>
                </div>
            </div> 
        </div>
    );
}

export default Awards;