function Stats() {
    return ( 
        <div className='container p-5 d-flex align-items-center justify-content-center'>
            <div className='row'> 
                <div className='col-12 col-sm-6 mb-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-muted'>That's why 1.3 crores customers trust Zerodha with $3.5+ lakh crores worth of eqality investments.</p>
                <h3 className='fs-4'>No spam or gimmicks</h3>
                <p className='text-muted'>No gimmics, spam, "gamification", or annoying push notification. High quality apps that you use at you pace, the way you like.</p>
                <h3 className='fs-4'>The Zerodha universe</h3>
                <p className='text-muted'>Not jsut an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h3 className='fs-4'>do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 stats-img mt-4'>
                    <img className='d-flex align-items-center justify-content-center' src='media/images/ecosystem.png' className='ecosystem-image'/>
                    <div className='text-center'>
                        <a  href='#'>Explore our products <i class="fa-solid fa-arrow-right-long arrow"></i></a>
                        <a className='mx-3'href='#'>Try</a>
                    </div>
                </div>
               
            </div>
        </div>
     );
}

export default Stats;