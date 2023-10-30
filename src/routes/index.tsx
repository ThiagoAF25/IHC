import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../views/home";
import { Config } from "../views/config";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Navigate to="/home"/>,
        errorElement: <ErrorPage />,
    },
    {
        path:"/home",
        element: <Home />
    },
    {
        path: "/config",
        element: <Config />
    }
]);