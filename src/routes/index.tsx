import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../views/home";
import { Config } from "../views/config";
import { Stats } from "../views/stats";
import { Quiz } from "../views/quiz";

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
        path:"/quiz",
        element: <Quiz />
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