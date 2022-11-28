import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Contact from './Contact/Contact';
import Business from './Business/Business';
import Blog from './Blog/Blog';
import Invest from './Invest/Invest';
import Product from './Product/Product';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Invest' element={<Invest/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      
      
      </Routes>
      <Footer/>

     
    </div>
  );
}

export default App;
