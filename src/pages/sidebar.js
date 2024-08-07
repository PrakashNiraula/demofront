import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Sidebar() {


    const [showSidebar, setShowSidebar] = useState(true);

    const handleLogout = () => {
     
    };
  return (
    <div>





<div
      className={showSidebar ? "inner-wrapper w-[15%]" : "inner-wrapper w-0"}
    >
      <aside id="sidebar-left" className="sidebar-left">
        <div className="sidebar-header">
          <div className="sidebar-title">Admin Panel</div>
          <div
            className="sidebar-toggle d-none d-md-block"
            data-toggle-className="sidebar-left-collapsed"
            data-target="html"
            data-fire-event="sidebar-left-toggle"
          >
            <button onClick={() => setShowSidebar(!showSidebar)}>
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </button>
          </div>
        </div>

       

        <div className="nano">
          <div className="nano-content flex flex-col justify-between">
            <nav id="menu" className="nav-main" role="navigation">
            <Link to="/admindash">
               
               <ul className="nav nav-main">
                 <li className="">
                   <a
                     className="nav-link flex items-center "
                     href=""
                   >
                     
                     <span className="ml-2">Dashboard</span>
                   </a>
                 </li>
               </ul>
                       </Link>
              <Link to="/viewallusers">
               
      <ul className="nav nav-main">
        <li className="">
          <a
            className="nav-link flex items-center "
            href=""
          >
            
            <span className="ml-2">Users</span>
          </a>
        </li>
      </ul>
              </Link>

             
             
            </nav>

            <hr className="separator" />

            <div className="sidebar-widget ">
            
            </div>
          </div>
        </div>
      </aside>
    </div>
    </div>
  )
}
