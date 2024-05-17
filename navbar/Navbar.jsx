import React from 'react'
import NavbarCSS from "./Navbar.module.css"
import { Link,Outlet } from 'react-router-dom'
import ProfileCSS from '../profile/Profile.module.css';


function Navbar(){
  return (<>
  
    <div className={NavbarCSS.nav}>
        <h1>SS4S</h1>
        <ul className={NavbarCSS.navMenu}>
            <li><Link to="/" className={NavbarCSS.link}>Home</Link></li>
            
            
            <li> <Link to="/profile" className={NavbarCSS.link}> Blog  </Link></li>
            <li> <Link to="/about" className={NavbarCSS.link}>Services</Link> </li>
            
            <li> <Link to="/project" className={NavbarCSS.link}>Succes Story</Link> </li>
            <li> <Link to="/navbar" className={NavbarCSS.link}>About Us</Link> </li>
            <li> <Link to='/contact' className={NavbarCSS.link}>Contact Us</Link> </li>
        </ul>
        <div className={NavbarCSS.navConnect}>info@softsolutions4u.com</div>
        <div className={NavbarCSS.navConnect}>44 20 3239 0141</div>
        <Outlet/>
    </div>
    

    <div className={ProfileCSS.profile}>
       
        <h1>Get to Know us</h1>
       
    </div>
    <div className={ProfileCSS.class}>
       
        <h2>Address should be:</h2>
       <h5>Old No:39,New No:87<br></br>
       7th Floor,Padmini Building<br></br>
       2nd Main Road,Gandhi Nagar,Adyar<br></br>
       Chennai-6000 027</h5>
    </div>

    <div className={ProfileCSS.module}>
       
        <h3>"Let's Talk"  section should be:</h3>
       
       <h5>There is a wide range of diversity among our clients in term of size, market presence, and technological orientation.<br></br> However, everything start with a conversation.</h5>
    <h3>CONTACT US</h3>
    </div>
    <div className={ProfileCSS.module}>
       
       <h3>Check the following logos in "Meet our Industry leading clients"section</h3>
      
       <ul>
    <li><a href="#">Indian Oil</a></li><br></br>
    <li><a href="#">ONGC</a></li><br></br>
    <li><a href="#">KIA MOTORS</a></li><br></br>
    <li><a href="#">BMW</a></li><br></br>
    <li><a href="#">IBM</a></li><br></br>
   </ul>
   </div>
   <div className={ProfileCSS.module}>
       
       <h3>"Our Work" section should contain the following Projects</h3>
      
       <ul>
    <li><a href="#">Hotelcard</a></li><br></br>
    <li><a href="#">CVbrandme</a></li><br></br>
    <li><a href="#">Payrexx</a></li><br></br>
    <li><a href="#">Sportsparadise</a></li><br></br>
    <li><a href="#">Vivikola</a></li><br></br>
    <li><a href="#">ViviApple a bespoke CRM</a></li>
   </ul>
   </div>

    
    


    </>
  )
}

export default Navbar