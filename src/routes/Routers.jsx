import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllAssignments from "../pages/AllAssignments/AllAssignments";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-assignments",
                element: <AllAssignments></AllAssignments>
            },
            {
                path: "/create-assignments",
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path: "/my-assignments",
                element: <MyAssignments></MyAssignments>
            },
            {
                path: "/submitted-assignments",
                element: <SubmittedAssignments></SubmittedAssignments>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;