import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Widget from './components/pages/Widget';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
<Route path ="/" element ={<Dashboard/>}/>
<Route path ="/Widget" element ={<Widget/>}/>
</Routes>
</Sidebar>
      
      </BrowserRouter>
  );
}

export default App;
