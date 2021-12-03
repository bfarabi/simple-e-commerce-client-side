import React, { useContext } from "react";
import { Navigate , useLocation} from "react-router-dom";
import { userContext } from "./../../App";

function PrivateRoute({ children }) {
const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return loggedInUser.email ? children : <Navigate to="/login" 
  state={{ from: location.pathname }}
   />;
}

export default PrivateRoute;
