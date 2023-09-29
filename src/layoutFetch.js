import React from "react";
//import batman from './batman2Unplash.jpg'
import { Outlet, Link } from "react-router-dom";
//import "../Navbar.css"

const Layout = () => {
  return ( 
      
   
    <>  

<nav className="navbar navbar-expand-sm bg-light fixed-top" >
               <div className="container-fluid">  
                   <a className="navbar-brand" href="#"> 
                   {/* <img src={batman} style={{height :'100px'}} alt="Logo"  className="rounded-pill" /> */}
                    </a>  
                    <h3>React Fetch Todo</h3>  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                 </button> 
                     
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav "> 
                <li className="nav-item">
                  
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todo" >ToDO</Link>
                </li>
                <li className="nav-item">
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myRegister">
                      Register
                </button> */} 
                     <Link className="nav-link" to="/register">Register</Link>
                </li>
                 
                <li className="nav-item ms-1">
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                      Login
                </button> */}
                {/* <Link className="nav-link" to="/login">Login</Link> */}
                </li>
            </ul>
           </div>
      </div>  
     </nav> 

      <Outlet />  


                             {/* <nav> working code of deviate
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/heros">Heros</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li> 
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav> */}
    </>
  )
};

export default Layout;