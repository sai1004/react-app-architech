import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

const routes = [
    {
        path: "welcome",
        element: <LandingPage />,
    },
];

const LandingRoutes = () => {
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

export default LandingRoutes;
