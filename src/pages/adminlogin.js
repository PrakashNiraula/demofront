import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Button, { login } from "../../src/components/button";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React, { Component } from 'react'
import axios from "axios";

export default class AdminLogin extends Component {


  constructor(props) {
    super(props)

    this.state = {
      url:'http://localhost:3000/users/adminlogin',
         email:'',
         password:'',
         loggedStatus:false,
         role:'',
         userdetails:[]
    }
}




handleChange=(e)=>this.setState({[e.target.name]:e.target.value});


//this can be converted to action redux store and reducers//


handleSubmit=(e)=>{
  e.preventDefault();



  if(this.state.email=='' || this.state.password==''){
   return toast.error("Check your Email and Password", { theme: "colored" });
  }


  let data = JSON.stringify({
   
    "email":this.state.email,
    "password": this.state.password
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: this.state.url,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {

    console.log(response.data.allusers);

    this.setState({

      allusers:response.data.allusers,
      loggedStatus:true

    })


  })
  .catch((error) => {
   
      toast.error("Invalid credentials username or password does not match", { theme: "colored" });

    
    console.log(error);
  });
  









}


  render() {


    if(this.state.loggedStatus){

     return (

     <div>

    Admin logged in success
     </div>
     ) 
    }
    else{
      return (
        <div>
           <div>
    
    <section className="body-sign">
          <div className="center-sign">
            <a href="/" className="logo float-left">
             
            </a>
            <div className="panel card-sign">
              <div className="card-title-sign mt-3 text-end">
                <h2 className="title text-uppercase font-weight-bold m-0">
                  <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>
                  Admin Login
                </h2>
              </div>
              <div className="card-body">
              <img src="img/device.png" className="img-fluid appear-animation animated slideInUp appear-animation-visible" data-appear-animation="slideInUp" data-appear-animation-delay="0" data-appear-animation-duration="1s" style={{"animationDuration": "1s", "animationDelay":"0ms"}}/>
                {/* <form class="img-fluid appear-animation animated slideInUp appear-animation-visible" data-appear-animation="slideInUp" data-appear-animation-delay="0" data-appear-animation-duration="1s" style="animation-duration: 1s; animation-delay: 0ms > */}
                  
                  <form>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <div className="input-group">
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        className="form-control form-control-lg"
                        required="true"
                        value={this.state.email} onChange={this.handleChange}
                      />
                      <span className="input-group-text">
                        <i className="bx bx-user text-4"></i>
                      </span>
                    </div>
                  </div>
    
                  <div className="form-group mb-3">
                    <div className="clearfix">
                      <label className="float-left">Password</label>
                     
                    </div>
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        required="true"
                        placeholder="Enter your Password"
                        className="form-control form-control-lg"
                        value={this.state.password} onChange={this.handleChange}
                      />
                      <span className="input-group-text">
                        <i className="bx bx-lock text-4"></i>
                      </span>
                    </div>
                  </div>
    
                  <div className="w-full flex justify-center">
    
                    <Button type="submit" title={"Login"} onclick={this.handleSubmit}/> 
                  
                  </div>
                </form>
    
    
                <a href="/register">No account? Register here...</a>
              </div>
            </div>
    
            <p className="text-center text-muted mt-3 mb-3">
            2024. All Rights Reserved.
            </p>
          </div>
        </section>
    
    
            
          </div>
          
        </div>
      )

    }
   
  }
}
