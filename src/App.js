import React from 'react';
 import Navbar from './Navbar';
 import Home from './pages/Home';
 import Pricing from './pages/Pricing';
 import Contact from './pages/Contact';
 import About from './pages/About';
 import Footer  from './components/Footer';
 import { BrowserRouter, Route, Routes} from 'react-router-dom';





function App() {
  
 
  const [modal, setModal] = React.useState(false)

  return (
    <> 
    <BrowserRouter>
     <Navbar setModal={setModal} /> 
     <Routes>
     <Route path='/' element={<Home /> } />
     <Route path='/pricing' element={ <Pricing />} />
     <Route path='/about' element={ <About />} />
     <Route path='/contact' element={ <Contact />} />
     </Routes>
     <Footer />
     </BrowserRouter>
  </>
       
 
  );
}

export default App;
