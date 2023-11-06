import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, isLoading, } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;