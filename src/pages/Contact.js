import React from 'react';
import tesla from '../assets/contact/tesla.svg';
import microsoft from '../assets/contact/microsoft.svg';
import hawlett from '../assets/contact/hewlett-packard.svg';
import oracle from '../assets/contact/oracle.svg';
import google from '../assets/contact/google.svg';
import nvidia from '../assets/contact/nvidia.svg';
import Form from '../components/Form';
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <section className='contact'>
        <div className='container'>
            <h1>Submit a help request and we'll get in touch shortly.

            </h1>

           <ContactForm />
           
            
        </div>

        
     <div className='two'>
     <h2>Join the thousands of innovators already building wih us</h2>
        <div className='svgs'>
            
            <img src={tesla} alt='tesla' />
            <img src={microsoft} alt='microsoft' />
            <img src={hawlett} alt='hawlett' />
            <img src={oracle} alt='oracle' />
            <img src={google} alt='google' />
            <img src={nvidia} alt='nvidia' />
           
        </div>

    </div>
    
         <div className='footer'>
             <h1>Ready to start?</h1>
             <Form />
         </div>
    </section>
  )
}

export default Contact