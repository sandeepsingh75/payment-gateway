import React from 'react';
import './Sidebar.css';
import logo from '../../images/Aspire Logo/Aspire Logo.png';
import {menus} from '../../Data/Data';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           <p className='details'> Trusted way of banking for 3,000+ 
                    MSMEs and startups in Singapore. </p>
        
       {menus.map((menu)=>
        (
            <div className="menu">
            <div className="menuItem">
                <div>
                    <img src={menu.img} alt="" />
                </div>
                <span className='items'> {menu.item} </span>
            </div>
        </div>
        )
       )}
        
        </div>
    );
};

export default Sidebar;