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
import PrivateRoute from "./PrivateRoute";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import SubmittedAssignmentDetails from "../pages/SubmittedAssignmentDetails/SubmittedAssignmentDetails";
import UpdateAssignments from "../pages/UpdateAssignments/UpdateAssignments";
// import SubmissionForm from "../pages/SubmissionForm/SubmissionForm";

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
                path: "/all-assignments/:id",
                element: <PrivateRoute>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5173/all-assignments/${params.id}`)
            },
            {
                path: "/create-assignments",
                element: <PrivateRoute>
                    <CreateAssignments></CreateAssignments>
                </PrivateRoute>
            },
            {
                path: "/my-assignments",
                element: <PrivateRoute>
                    <MyAssignments></MyAssignments>
                </PrivateRoute>
            },
            // {
            //     path: "/:id/submission-form",
            //     element: <PrivateRoute>
            //         <SubmissionForm></SubmissionForm>
            //     </PrivateRoute>
            // },
            {
                path: "/submitted-assignments",
                element: <PrivateRoute>
                    <SubmittedAssignments></SubmittedAssignments>
                </PrivateRoute>
            },
            {
                path: "/submitted-assignments/:id",
                element: <PrivateRoute>
                    <SubmittedAssignmentDetails></SubmittedAssignmentDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5173/submitted-assignments/${params.id}`)
            },
            {
                path: "/update-assignments/:id",
                element: <PrivateRoute>
                    <UpdateAssignments></UpdateAssignments>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5173/update-assignments/${params.id}`)
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