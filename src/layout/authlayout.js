import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

function AuthLayout() {
  const auth = useAuth();

  if (auth) {
    <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthLayout;