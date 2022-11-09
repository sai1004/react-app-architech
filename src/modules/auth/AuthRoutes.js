// import AuthLayout from "layouts/AuthLayout";
import { Route, Routes } from "react-router-dom";
import SigninPage from "../auth/SigninPage";
import SignupContinuePage from "./SignupContinuePage";
import SignupPage from "./SignupPage";

const routes = [
    {
        path: "signin",
        element: <SigninPage />,
    },
    {
        path: "signup",
        element: <SignupPage />,
    },
    {
        path: "signup-continue",
        element: <SignupContinuePage />,
    },
];

const AuthRoutes = () => {
    return (
        <>
            <Routes>
                {routes.map((route, index) => {
                    return <Route key={route.path} path={route.path} element={route.element} />;
                })}
            </Routes>
        </>
    );
};

export default AuthRoutes;
