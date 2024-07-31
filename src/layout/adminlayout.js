
import ProtectedRoutes from "../layout/protectedroutes";

function AdminLayout() {
  return (
    <ProtectedRoutes>

        <p>Admin Dashboard</p>
      
    </ProtectedRoutes>
  );
}

export default AdminLayout;