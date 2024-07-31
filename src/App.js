import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import router from "../src/routes/routes";

const queryClient = new QueryClient({});

function App() {


 

  const handleLogin = () => {


    console.log("Logging in");

  
  
  };

  const handleRegister = () => {

    console.log("Register");
   
  };

  return (


    // <Login/>
    // <Register />

    //<AdminLogin/>


    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="coloured" position="top-right" hideProgressBar />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>



    // <div>
    //   <h1>Welcome to My Website</h1>
    //   <button onClick={handleLogin}>Login</button>
    //   <button onClick={handleRegister}>Register</button>
    // </div>
  );




}

export default App;
