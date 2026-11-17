import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

//admin
export default function Admin() {

    //logged in?
    const { isAuth } = useAuth();

    //error
    if(!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    );
}