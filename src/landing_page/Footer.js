import React from 'react';
function Footer() { // here the last w-100 p-0 m-0 container-fluid are to occupy full screen on small devices
    return (
        <footer className='border-top bg-light container-fluid w-100 p-0 m-0'>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-3 d-none d-sm-block'>
                        <img style={{ width: "60%" }} src='media/images/logo.svg' alt='logo'></img>
                        <p className='text-muted mt-3 '>© 2010-2014, Not Zerodha Broking Ltd.<br></br> All rights reserved. </p>
                        <i class="fa-brands fa-twitter mx-1 text-muted"></i>
                        <i class="fa-brands fa-square-facebook mx-1 text-muted"></i>
                        <i class="fa-brands fa-instagram mx-1 text-muted"></i>
                        <i class="fa-brands fa-linkedin-in mx-1 text-muted"></i>
                        <i class="fa-brands fa-telegram mx-1 text-muted"></i>
                    </div>
                    <div className='col-1 '></div>
                    <div className='col-2'>
                        <p className='text-muted fs-'><b>Company</b></p>
                        <p className='text-muted'>About</p>
                        <p className='text-muted'>Products</p>
                        <p className='text-muted'>Pricing</p>
                        <p className='text-muted'>Referral programme</p>
                        <p className='text-muted'>Careers</p>
                        <p className='text-muted'>Zerodha.tec</p>
                        <p className='text-muted'>Press & media</p>
                        <p className='text-muted'>Zerodha cares (CSR)</p>
                    </div>
                    <div className='col-1 '></div>
                    <div className='col-2'>
                        <p className='text-muted'><b>Support</b></p>
                        <p className='text-muted'>Contact</p>
                        <p className='text-muted'>Support portal</p>
                        <p className='text-muted'>Z-Connect blog</p>
                        <p className='text-muted'>List of charges</p>
                        <p className='text-muted'>Downloads & resources</p>
                    </div>

                    <div className='col-1'></div>
                    <div className='col-2 '>
                        <p className='text-muted'><b>Account</b></p>
                        <p className='text-muted'>Open an account</p>
                        <p className='text-muted'>Fund transfer</p>
                        <p className='text-muted'>60 day challenge</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mt-3'>
                        <p className='text-muted support-text'>Zerodha Broking Ltd. is India’s largest stockbroker, offering retail and institutional broking services through its powerful in-house platforms. Founded with the vision to break all barriers that traders and investors face in India in terms of cost, support, and technology, Zerodha has redefined how financial markets are accessed. With a focus on transparency, minimal brokerage fees, and innovation-driven trading tools like Kite and Coin, Zerodha has empowered millions of Indians to take control of their financial future. Registered with SEBI as a stockbroker, depository participant, and mutual fund distributor, Zerodha is a member of NSE, BSE, MCX, and CDSL.</p>
                        <p className='text-muted support-text'>Investments in the securities market are subject to market risks. Please read all the related documents carefully before investing. Brokerage will not exceed SEBI-prescribed limits.Zerodha does not guarantee returns on investments and strongly recommends clients to make informed decisions.</p>
                        <p className='text-muted support-text'>For complaints or queries, please reach out to support.zerodha.com.</p>
                        <p className='text-muted support-text'>© 2010–2025 Zerodha Broking Ltd. All rights reserved. Registered office: #153/154, 4th Cross, J.P Nagar 4th Phase, Opp. Clarence Public School, Bengaluru – 560078, Karnataka, India. CIN: U65100KA2010PLC056320.</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;