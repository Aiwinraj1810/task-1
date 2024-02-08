import React from 'react'
import UserStatus from './UserStatus'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = ({children}) => {
    const menuItem=[

        {
            path:"/",
            name:"Home",
        },
        {
            path:"/dashboard",
            name:"Dashboard",
        },
        {
            path:"/contacts",
            name:"Contacts",
        },
    ]
  return (
    
      <div className='container'>
        <div className="sidebar">
            <div className="top-section">
                
                <UserStatus />
            </div>
            {
                menuItem.map((item, index)=>(
                  <NavLink to={item.path} key={index} className={"link"} activeclassName="active" >
                    <div className="linkText">
                        {item.name}
                    </div>
                  </NavLink> 
                ))
            }
        </div>
        <main>{children}</main>
      </div>
    
  )
}

export default Sidebar
