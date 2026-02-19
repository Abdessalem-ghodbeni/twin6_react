import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ isauthentificated }) {
  if (isauthentificated) {
    return <Outlet />;
  } else {
    return <Navigate to="/IsNotAuthentificated" replace />;
  }
}

export default PrivateRoute;
