import React, { Component } from 'react'
import Sidebar from './sidebar'
import { json, Outlet } from 'react-router-dom'
import axios from 'axios'




export default class admindash extends Component {


    constructor(props){
        super(props)


        this.state={
            url:'http://localhost:3000/users/getallusers',
            userdata:[]
        }


    
    }


    componentDidMount=()=>{
       
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: this.state.url,
            headers: { 
              'Content-Type': 'application/json'
            },
            
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));

            this.setState({
                userdata:response.data
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }




  render() {
    return (
      <div>


<section className="body">


    <p>Admin Dash</p>


    <div class="row">
							<div class="col">
								<section class="card">
									<header class="card-header">
										<div class="card-actions">
											<a href="#" class="card-action card-action-toggle" data-card-toggle=""></a>
											<a href="#" class="card-action card-action-dismiss" data-card-dismiss=""></a>
										</div>

										<h2 class="card-title">All Users</h2>
									</header>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-responsive-lg table-bordered table-striped table-sm mb-0">
												<thead>
													<tr>
														<th>id</th>
														
														<th className="text-end">Firstname</th>
														<th className="text-end">Lastname</th>
														<th className="text-end">Company</th>
														<th className="text-end">Email</th>
														<th className="text-end">Role</th>
														
													</tr>
												</thead>
												<tbody>


                                                {this.state.userdata.map((data) => (
                          <tr key={data.id}> 
                            <td className="text-end">{data.id}</td>
                            <td className="text-end">{data.firstname}</td>
                            <td className="text-end">{data.lastname}</td>
                            <td className="text-end">{data.company}</td>
                            <td className="text-end">{data.email}</td>
                            <td className="text-end">{data.role}</td>
                          </tr>
                        ))}


                                                



            
													
													
													
																
							
												</tbody>
											</table>
										</div>
									</div>
								</section>
							</div>
						</div>

      </section>


      



      
    
       







      </div>
    )
  }
}
