import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../views/home";
import { Config } from "../views/config";
import { Stats } from "../views/stats";
import { Quiz } from "../views/quiz";
import { QuizFeedback } from "../views/quizFeedback";
import { Hist } from "../views/hist"
import { HistFeedback } from "../views/histFeedback"
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
        path:"/hist",
        element: <Hist />
    },
    {
        path:"/quiz/feedback",
        element: <QuizFeedback/>
    },
    {
        path:"/hist/feedback",
        element: <HistFeedback />
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