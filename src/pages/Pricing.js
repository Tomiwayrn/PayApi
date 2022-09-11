import React from 'react';
import check from '../assets/shared/icon-check.svg';

const Pricing = () => {

    const priceArr = ['Trasanctions', 'Auth', 'Identity', 'Investments' , 'Assets', 'Liabilities', 'Income']

    const PriceInfo=({amount})=>{
       const output =  priceArr.map((item)=>{

       
        return(
        <div style={{display:'flex', alignItems: 'center', gap: '10px'}}>
        {priceArr.indexOf(item) <= amount &&   <img alt='check' src={check} />
        }

         <p  style = {priceArr.indexOf(item) <= amount?{}:{marginLeft:'20px'}}>{item}</p>
        </div>)

       })

       return output
       
    }

  return (
    <div className='pricing'>
        <h2>Pricing</h2>
        <div className='price'>
            <h2>Free Plan</h2>
            <p>Build and test using our core set of products with up to 160 API requests</p>
            <h1>$0.00</h1>
            <div  className='container'>
            {<PriceInfo amount= {3} />} 
            </div>
           
            <button>Request Access</button>
        </div>

        
        <div className='price'>
            <h2>
                Basic Plan
            </h2>

            <p>
                Launch your project with unlimited requests and no contractual minimums
            </p>
            <h1>
                $249.00
            </h1>
            <div  className='container'>
            {<PriceInfo amount= {5} />} 
            </div>
            <button>Request Access</button>
        </div>

        <div className='price'>
             <h2>
                Premium Plan
            </h2>

            <p>
                Get tailored solutions, volume pricing and dedicated support for your team
            </p>
            <h1>
                $499.00
            </h1>

            <div  className='container'>
            {<PriceInfo amount= {7} />} 
            </div>
             <button>Request Access</button>
        </div>
    </div>
  )
}

export default Pricing