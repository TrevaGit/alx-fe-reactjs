import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // import hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // use hook
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
