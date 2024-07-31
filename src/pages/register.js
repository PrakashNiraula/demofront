import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Button, { login } from "../../src/components/button";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

  const getYear = new Date().getFullYear();


  const onSubmit = (data) => {

    console.log("Submitting");
   // mutate(data);
  };

  return (
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
            <form onSubmit={onSubmit}>
              <div className="form-group mb-3">
                <label>First Name</label>
                <div className="input-group">
                  <input
                    name="firstname"
                    type="text"
                    placeholder="Enter your First Name"
                    className="form-control form-control-lg"
                    {...register("firstname", {
                      required: true,
                    })}
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
                    {...register("lastname", {
                      required: true,
                    })}
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
                    {...register("company", {
                      required: true,
                    })}
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
                    type="text"
                    placeholder="Enter your email"
                    className="form-control form-control-lg"
                    {...register("email", {
                      required: true,
                    })}
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
                    type="text"
                    placeholder="Enter your password"
                    className="form-control form-control-lg"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  
                </div>
              </div>


              <div className="w-full flex justify-center">

                <Button type="submit" title={"Register"}/> 
              
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-muted mt-3 mb-3">
          &copy; Copyright {getYear}. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Register;