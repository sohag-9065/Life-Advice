import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../layout/Main";
import AddAService from "../pages/AddAService/AddAService";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyReview from "../pages/MyReview/MyReview";
import Services from "../pages/Services/Services";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/faq",
                element: <Faq/>
            },
            {
                path: "/my-review",
                element: <MyReview/>
            },
            {
                path: "/add-service",
                element: <AddAService/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            }
        ]
    }
]);


export default router;