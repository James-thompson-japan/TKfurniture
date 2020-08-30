import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Aboutus from './components/Contact us'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <div className="App text-gray-800">

      <Router>
        <Navbar/>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/Products" component = {Products}/>
        <Route path = "/Aboutus" component = {Aboutus}/>
      </Router>

    </div>
  );
}

export default App;
