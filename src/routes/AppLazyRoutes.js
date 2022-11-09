import RequireAuth from "shared/components/RequireAuth";
import AuthRoutes from "modules/auth/AuthRoutes";
import LandingRoutes from "modules/landing/LandingRoutes";
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routes = [
    {
        path: "",
        element: <Navigate to="auth/signin" />,
    },
    {
        path: "/auth/*",
        element: <AuthRoutes />,
    },
    {
        path: "/landing/*",
        element: (
            <RequireAuth>
                <LandingRoutes />
            </RequireAuth>
        ),
    },
    {
        path: "*",
        element: <h1> The Page Not Found! </h1>,
    },
];

function AppLazyRoutes() {
    return (
        <section>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {routes.map((route) => {
                        return <Route key={route.path} path={route.path} element={route.element} />;
                    })}
                </Routes>
            </Suspense>
        </section>
    );
}

export default AppLazyRoutes;
