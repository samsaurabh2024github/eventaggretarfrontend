import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { token, role } = useSelector((state) => state.auth);

  // 1. If no token, the user is logged out -> Redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. If user is logged in but has the wrong role -> Redirect to home
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;