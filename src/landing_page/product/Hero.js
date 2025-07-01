import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center mt-5'>
                <h1 className='fs-3'>Technology</h1>
                <p className='text-muted'>Seek, modern and intitutiive trading platforms</p>
                <p style={{fontSize:".75rem"}} className='text-muted'>check out our <Link to='/product/investmentoffers'>investment offerings <i  class="fa-solid fa-arrow-right-long arrow"></i></Link></p>
            </div>
            <hr className='mb-5 mt-5 text-muted'></hr>
        </div>
     );
}

export default Hero;