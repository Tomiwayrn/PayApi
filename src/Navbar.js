
import hamburger from './assets/icon-hamburger.svg';
import close from './assets/icon-close.svg';
import logo from './assets/shared/logo.svg';
import React from 'react';
import {Link} from 'react-router-dom'


export default function Navbar({setModal}){
   

        const [nav, shownav] = React.useState(false)
         function handleClick (){
            shownav(prevState => !prevState)
            setModal(prevState=> !prevState)
        }

       let show = nav? 'flex' : '';

       if(nav){
        document.body.style.overflow = 'hidden'
       
      
       }

       else {
        document.body.style.overflow = ''
         
       }
       
    

            return(
                <div>
                    <nav>
                        <img src={logo} alt='logo' />
                       
                         <div className='navlinks' 
                         style={{display: show}}>
                            <ul>
                             <li onClick={()=> shownav(false)}><Link  to='/pricing'>Pricing</Link></li>

                             <li  onClick={()=> shownav(false)}>
                                <Link to='/about'>About</Link>
                                
                            </li>

                             <li  onClick={()=> shownav(false)}>
                                <Link to='/contact' ><button className='contact-btn'> Contact</button></Link>
                            </li>  

                            <li><Link to='/contact' ><button className='schedule'>Schedule a Demo</button></Link></li>
  

                            </ul>
                        </div>
                        { !nav && 
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={hamburger} alt="hamburger-icon"/>
                                </button>
                        }
                        { nav && <div >
                             <button className='nav-btn close' onClick={handleClick}>
                                <img src={close} alt="close-icon" />
                                </button>
                        </div>}
                        
                    </nav>
                </div>
            )
}