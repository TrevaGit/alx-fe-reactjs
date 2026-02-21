import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change to true to simulate login
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
