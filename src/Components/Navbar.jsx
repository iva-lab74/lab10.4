//link without refreshing
import { Link } from "react-router-dom";
//loggedin
import { useAuth } from "../Context/AuthContex";

//navv
export default function NavBar() {

    //logged in 
    const { isAuth, logout } = useAuth();

    return (
        <nav>
            <Link to="/blog">Blog</Link>
            {
                isAuth ? (
                    <>
                        <Link to="/admin">Admin</Link>
                        <button onClick={logout}>Log Out</button>
                    </>
                ) : (

                    <Link to="/login">Log In</Link>
                )}
        </nav>

    );
}