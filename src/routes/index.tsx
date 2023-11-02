import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../views/home";
import { Config } from "../views/config";
import { Stats } from "../views/stats";

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
    },
    {
        path: "/stats",
        element: <Stats />
    }
]);