import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Button, { login } from "../../src/components/button";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

  const getYear = new Date().getFullYear();

  // const { mutate } = useMutation(login, {
  //   onSuccess: (data) => {
  //     toast.success("Logged In", { theme: "colored" });
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user-Info", JSON.stringify(data.userinfo));
  //     navigate("/");
  //   },
  //   onError: () => {
  //     toast.error("Check your Phone and Password", { theme: "colored" });
  //   },
  // });

  const onSubmit = (data) => {

    console.log("Submitting");
   //mutate(data);
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
            Admin Login
            </h2>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group mb-3">
                <label>Email</label>
                <div className="input-group">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Enter your email"
                    className="form-control form-control-lg"
                    {...register("email", {
                      required: true,
                    })}
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
                    type="text"
                    placeholder="Enter your Password"
                    className="form-control form-control-lg"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <span className="input-group-text">
                    <i className="bx bx-lock text-4"></i>
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-center">

                <Button type="submit" title={"Login"}/> 
              
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

export default Login;