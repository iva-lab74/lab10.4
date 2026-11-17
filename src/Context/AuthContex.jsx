import { useState, useContext, createContext } from "react";

// Context 
const AuthContext = createContext();

//access to the provider
export function AuthProvider({ children }) {

    //make sure logged in
    const [Auth, setAuth] = useState(false);

    const login = () => setAuth(true);
    const logout = () => setAuth(false);

    return (
        <AuthContext.Provider value={{ Auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}