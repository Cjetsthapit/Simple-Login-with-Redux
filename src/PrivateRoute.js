import React from "react";
import { Outlet,Navigate } from "react-router-dom";


function PrivateRoutes() {
  const isVerified = localStorage.getItem("token");
  return (
    isVerified? <Outlet/> :<Navigate to="/"/>
     
  );
}

export default PrivateRoutes;