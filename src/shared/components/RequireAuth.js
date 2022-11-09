import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "shared/hooks/AuthContext";

const RequireAuth = ({ children }) => {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/auth/signin" />;
    }

    return children;
};

export default RequireAuth;
