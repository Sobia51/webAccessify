import React, { useState } from 'react';
import ".//Sidebar.css"
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
 FaCcAmazonPay,
    FaShoppingBag,
    FaThList,
    FaCogs,
    FaDownload
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"My_Sites#",
            icon:<FaTh/>
        },
        {
            path:"/Widget",
            name:"Widget_Settings ",
            icon:<FaCogs/>
        },
        {
            path:"/Installs",
            name:"Installations",
            icon:<FaDownload/>
        },
        {
            path:"/Statics",
            name:"Usage_Statics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/W_Menu",
            name:"Widget_Menu",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Subscriptions",
            name:"Subscriptions",
            icon:<FaCcAmazonPay/>
        },
        {
            path:"/Feedback",
            name:"Feedback",
            icon:<FaThList/>
        },
        {
            path:"/Profile",
            name:"Profile",
            icon:<FaUserAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;