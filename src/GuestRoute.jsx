// src/Auth/GuestRoute.jsx
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If user is logged in, redirect to dashboard
  if (token) {
    const user = JSON.parse(localStorage.getItem("user"));
    return <Navigate to={user?.role === "admin" ? "/admin" : "/user"} />;
  }

  // If not logged in, show the page
  return children;
};

export default GuestRoute;
