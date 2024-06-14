import { useContext } from "react";
import { UserContext } from "../context/userContext.jsx"
import { Navigate, Outlet } from "react-router-dom"

export const  ProtectedRoute = () => {
    const { isAuthenticated } = useContext(UserContext)  

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return (
        <Outlet/>
      )
}