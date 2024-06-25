import { useNavigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ user, children, redirect }) => {
  const navigate = useNavigate();

  const authenticate = localStorage.getItem('token') ? true : false;
  const location = useLocation();
  return authenticate ? (
    children
  ) : (
    navigate('/login', { state: { from: location.pathname } }, { replace: true })
  );
};

export default PrivateRoute;