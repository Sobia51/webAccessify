import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/Sidebar';
import About from './components/pages/About';
function App() {
  return (
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
<Route path ="/" element ={<Dashboard/>}/>
<Route path ="/about" element ={<About/>}/>
</Routes>
</Sidebar>
      
      </BrowserRouter>
  );
}

export default App;
