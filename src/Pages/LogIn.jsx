import { useAuth } from "../Context/AuthContex";

//sends user elsewhere after login
import { useNavigate } from "react-router-dom";

//log in
export default function Login() {

    // get login!
    const { login } = useAuth();
    //navigate
    const navigate = useNavigate();

    //button, event handling , what happens next
    const handleLogin = () => {
        login();
        navigate("/admin");

    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}