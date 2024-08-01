import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Button, { login } from "../../src/components/button";
//import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";





import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

export default class Register extends Component {




  constructor(props) {
    super(props)

    this.state={
      firstname:'',
      lastname:'',
      company:'',
      email:'',
      password:'',
      registered:false,
      url:'http://localhost:3000/users/register'
    }
  }
 

  handleChange=(e)=>this.setState({[e.target.name]:e.target.value});


  onSubmit=(e)=>{
    e.preventDefault();




    if(!this.state.firstname){
      return toast.error("First name is required", { theme: "colored" });
    }


    if(!this.state.lastname){
      return toast.error("Last name is required", { theme: "colored" });
    }



    if(!this.state.company){
      return toast.error("Company is required", { theme: "colored" });
    }

    if(!this.state.email){
      return toast.error("Email is required", { theme: "colored" });
    }

    if(!this.state.password){
      return toast.error("Password is required", { theme: "colored" });
    }
    let data = JSON.stringify({
      "firstname": this.state.firstname,
      "lastname": this.state.lastname,
      "company": this.state.company,
      "email": this.state.email,
      "password": this.state.password
    });
    
    let config = {
      method: 'post',
      url:this.state.url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      this.setState({registered:true})
    
    })
    .catch((error) => {
      console.log(error);
    });
    
  }


  render() {


    if(this.state.registered==true){
      return <Navigate to='/login'/>
    }else{

      return (
        <div>
  
  <section className="body-sign">
        <div className="center-sign">
          <a href="/" className="logo float-left">
           
          </a>
          <div className="panel card-sign">
            <div className="card-title-sign mt-3 text-end">
              <h2 className="title text-uppercase font-weight-bold m-0">
                <i className="bx bx-user-circle me-1 text-6 position-relative top-5"></i>
                Register
              </h2>
            </div>
            <div className="card-body">
              <form >
                <div className="form-group mb-3">
                  <label>First Name</label>
                  <div className="input-group">
                    <input
                      name="firstname"
                      type="text"
                      placeholder="Enter your First Name"
                      className="form-control form-control-lg"
                      value={this.state.firstname} onChange={this.handleChange}
                    />
                   
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label>Last Name</label>
                  <div className="input-group">
                    <input
                      name="lastname"
                      type="text"
                      placeholder="Enter your Last Name"
                      className="form-control form-control-lg"
                      value={this.state.lastname} onChange={this.handleChange}
                    />
                  
                  </div>
                </div>
  
  
                <div className="form-group mb-3">
                  <label>Company</label>
                  <div className="input-group">
                    <input
                      name="company"
                      type="text"
                      placeholder="Enter your Company"
                      className="form-control form-control-lg"
                      value={this.state.company} onChange={this.handleChange}
                    />
                   
                  </div>
                </div>
  
                <div className="form-group mb-3">
                  <div className="clearfix">
                    <label className="float-left">Email</label>
                   
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="form-control form-control-lg"
                      value={this.state.email} onChange={this.handleChange}
                    />
                    
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
                      placeholder="Enter your password"
                      className="form-control form-control-lg"
                      value={this.state.password} onChange={this.handleChange}
                    />
                    
                  </div>
                </div>
  
  
                <div className="w-full flex justify-center">
  
                  <Button type="submit" title={"Register"} onclick={this.onSubmit}/> 
                
                </div>
              </form>
  
              <a href="/login">Have account? Login here...</a>
            </div>
          </div>
  
          <p className="text-center text-muted mt-3 mb-3">
          2024. All Rights Reserved.
          </p>
        </div>
      </section>
          
        </div>
      )

    }

   
   
  }
}


