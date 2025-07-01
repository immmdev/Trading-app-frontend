import React from 'react';
function RightSection(
    {imgURL,
    productName,
    productDescription}
) {
    return (
        <div className='container p-5 '>
            <div className='row component-right-product'>
                <div className='col-12 col-sm-6 mt-5'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a  href='#'>Learn More <i class="fa-solid fa-arrow-right-long arrow"></i></a>
                    </div>
                </div>
                <div className='col-12 col-sm-6 text-center '>
                    <img  style={{ width: "80%"}} src={imgURL} alt={productName}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;