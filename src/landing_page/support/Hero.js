import React from 'react';
function Hero() {
    return (
        <footer style={{ backgroundColor: "#387ed1" }}>
            <div className='container p-5'>
                <div className='row '>
                    <div style={{ color: "white" }} className='col-12 col-sm-6 mb-4'>
                        <p> Support Portal</p>
                        <p  style={{paddingRight:"35%"}} className='fs-5'> Search for an answer or browse helf topics to create a ticket</p>
                        <input
                            className='mb-3'
                            style={{
                                width: "90%",
                                height: "50px", 
                                borderRadius: "5px",
                                border: "1px solid #387ed1",
                                backgroundColor: "white",
                                padding: "8px 12px", 
                                color: "#000",      
                            }}
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected."
                        />
                        <div style={{fontSize:"13px"}} className='d-flex gap-3'>
                            <a style={{ color: "white" }} href='#'>Track account opening</a>
                            <a style={{ color: "white" }} href='#'>Track segment activation</a>
                            <a style={{ color: "white" }} href='#'>Intraday</a>
                        </div>
                        <div style={{fontSize:"13px"}} className='d-flex gap-3'>
                            <a style={{ color: "white" }} href='#'>margins</a>
                            <a style={{ color: "white" }} href='#'>kite user manual</a>
                        </div>

                    </div>
                    <div style={{ color: "white" }} className='col-12 col-sm-6'>
                            <p>Featured</p>
                            <ol style={{ color: "white", fontSize:"13px" }}>
                                <li>
                                    <a  style={{ color: "white", fontSize:"13px" }} href='#'>Current takeovers and delisting - january 2024</a>
                                </li>
                                <li>
                                      <a  style={{ color: "white", fontSize:"13px" }}  href='#'>Latest intraday leverages - MIS & CO</a>
                                </li>
                            </ol>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Hero;