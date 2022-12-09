import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Installation from './components/pages/Installation';
import Statics from './components/pages/Statics';
import Widget from './components/pages/Widget';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
<Route path ="/" element ={<Dashboard/>}/>
<Route path ="/Widget" element ={<Widget/>}/>
<Route path ="/Installation" element ={<Installation/>}/>
<Route path ="/Statics" element ={<Statics/>}/>
</Routes>
</Sidebar>
      
      </BrowserRouter>
  );
}

export default App;
