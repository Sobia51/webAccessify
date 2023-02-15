import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
 import Customers from "../pages/customers";
 import Statics from "../pages/statics";
import Installations from "../pages/Installations";
import Subscription from "../pages/Subscription";
import Widget from "../pages/widget";
import Profile from "../pages/profile";
import Edit from "../pages/Edit";
import Feedback from "../pages/Feedback";


function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/statics"  element ={<Statics/>}></Route>
      <Route path="/customers" element={<Customers />}></Route>  
      <Route path='/Installations' element={<Installations/>}></Route>
      <Route path="/Subscription" element={<Subscription/>}></Route>
      <Route path="/widget" element={<Widget/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path="/Feedback" element={<Feedback/>}></Route>


    </Routes>
 
  );
}
export default AppRoutes;