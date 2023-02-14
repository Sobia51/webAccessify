import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Inventory from "../pages/inventory";
 import Customers from "../pages/customers";
 import Statics from "../pages/statics";
import Installations from "../pages/Installations";
import Subscription from "../pages/Subscription";
import Widget from "../pages/widget";


function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/statics"  element ={<Statics/>}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/customers" element={<Customers />}></Route>  
      <Route path='/Installations' element={<Installations/>}></Route>
      <Route path="/Subscription" element={<Subscription/>}></Route>
      <Route path="/widget" element={<Widget/>}></Route>
    </Routes>
 
  );
}
export default AppRoutes;