import React from 'react'
import ProfileCSS from './Profile.module.css';

import { useParams } from 'react-router-dom';


function Profile(){
  return (
    <div>
   <p>Check the following logos in "Meet our Industry leading clients"section</p>
   
   
   <ul>
    <li><a href="#">Software Devlopment</a></li><br></br>
    <li><a href="#">ERP Development</a></li><br></br>
    <li><a href="#">CRM</a></li><br></br>
    <li><a href="#">Plugin and API</a></li><br></br>
    <li><a href="#">Web Devlopment</a></li><br></br>
   </ul>
   </div>
  );

    
  
}

export default Profile