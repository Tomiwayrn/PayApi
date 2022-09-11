import React from 'react';
import phone from '../assets/home/illustration-phone-mockup.svg'
import simple from '../assets/home/illustration-simple-ui.svg'
import easy from '../assets/home/illustration-easy-to-implement.svg'
;

import coverage from '../assets/home/icon-banking-and-coverage.svg'
;


import finance from '../assets/home/icon-personal-finances.svg'
;


import tesla from '../assets/shared/tesla.svg';
import microsoft from '../assets/shared/microsoft.svg';
import hawlett from '../assets/shared/hewlett-packard.svg';
import oracle from '../assets/shared/oracle.svg';
import google from '../assets/shared/google.svg';
import nvidia from '../assets/shared/nvidia.svg';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'> 
     <section className='home-main'>
        <div >
        <img src={phone} alt='phone' className='phone'/>
        <h1>Start building with our APIs for absolutely free.</h1>
        </div>
        <Form />
        <p>Have any questions? <Link to='/contact'>Contact us</Link></p>
      </section>

      <section className='socio'>
        <div className='svgs'>
        <img src={tesla} alt='tesla' />
        <img src={microsoft} alt='microsoft' />
        <img src={hawlett} alt='hawlett' />
        <img src={oracle} alt='oracle' />
        <img src={google} alt='google' />
        <img src={nvidia} alt='nvidia' />

        </div>

        <div className='info'>
            <h2>Who we work with</h2>
            <p>Today, millions of people around the world have successfully connected their account to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
        </div>
           <button className='about-btn'>
            About Us
           </button>
      </section>

      <section className='easy'>

         <div className='one'>
            <img src={easy} alt='easy' />
            <h1>Easy to implement</h1>
            <p>Our API comes with just a few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease</p>
            
            </div>

            <div className='two'>
            <img src={simple} alt='phone' className='phone' />
                <h1>Simple UI & UX </h1>
                <p>Our pre-built form is easy to integrate in your app or website's checkout flow and designed to optimize conversion.</p>
               
            </div>

            <div>
            <img src={finance} alt='finance' />
            <h2>Personal Finances</h2>
            <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. 
                Analyze reports to reconcile activities in your account.
            </p>
            </div>

            <div>
                <img src={coverage} alt='coverage' />
                <h2>Banking & Coverage </h2>
                <p>
                    With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts
                </p>
            </div>
        
      </section>
    </main>

  )
}

export default Home