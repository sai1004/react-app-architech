const { createContext, useState, useContext } = require("react");

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
        localStorage.setItem("sessionUser", JSON.stringify(user));
    };

    const logOut = () => {
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
