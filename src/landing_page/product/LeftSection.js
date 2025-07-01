import React from 'react';
function LeftSection({
    imgURL,
    productName,
    productDescription
    }) {
    return ( 
        <div className='container p-5 '>
            <div className='row  component-left-product'>
                <div  className='col-12 col-sm-6 '>
                    <img style={{width:"80%"}} src={imgURL} alt='kite'></img>
                </div>
                <div className='col-12 col-sm-6 mt-4 '>
                    <h1 className='fs-2'>{productName}</h1>
                    <p style={{paddingRight:"15%"}} className='text-muted'>{productDescription}</p>
                    <div>
                        <a href="#">Try demo <i  class="fa-solid fa-arrow-right-long arrow"></i></a>
                        <a className='m-4' href='#'>Learn More <i  class="fa-solid fa-arrow-right-long arrow"></i></a>
                    </div>
                    
                    <div className='row mt-4'>
                        <img style={{width:'135px',height:'40px'}} src='media\images\googlePlayBadge.svg' alt='googleplaystore'></img>
                        <img style={{width:'135px',height:'40px'}}  src='media\images\appstoreBadge.svg' alt='appstore'></img>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;