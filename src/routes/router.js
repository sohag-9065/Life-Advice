import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
]);


export default router;