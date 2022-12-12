import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Installation from './components/pages/Installation';
import Profile from './components/pages/Profile';
import Statics from './components/pages/Statics';
import Subscription from './components/pages/Subscription';
import Widget from './components/pages/Widget';
import W_menu from './components/pages/W_menu';
import Edit from './components/pages/Edit';
import Sidebar from './components/Sidebar';
import Feedback from './components/pages/Feedback';

function App() {
  return (
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
<Route path ="/" element ={<Dashboard/>}/>
<Route path ="/Widget" element ={<Widget/>}/>
<Route path ="/Installation" element ={<Installation/>}/>
<Route path ="/Statics" element ={<Statics/>}/>
<Route path ="/W_menu" element ={<W_menu/>}/>
<Route path ="/Subscription" element ={<Subscription/>}/>
<Route path ="/Profile" element ={<Profile/>}/>
<Route path='/Edit' element={<Edit/>}/>
<Route path='/Feedback' element={<Feedback/>}/>
</Routes>
</Sidebar>
      
      </BrowserRouter>
  );
}

export default App;
