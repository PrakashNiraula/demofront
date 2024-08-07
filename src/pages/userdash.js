import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';


export default function UserDash() {
    const location = useLocation();
    const data = location.state?.data; 

    console.log(data); 

    return (
        <div>
      <div>User Dash</div>

      <p>{data}</p>
      </div>
    );
  
 

  }

