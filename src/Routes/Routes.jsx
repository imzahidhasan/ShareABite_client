import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import HomePage from "../Pages/HomePage"
import ErrorPage from "../Pages/ErrorPage"
import AvaiableFood from "../Pages/AvaiableFood"
import AddFood from "../Pages/AddFood"
import ManageMyFood from "../Pages/ManageMyFood"
import MyFoodRequest from "../Pages/MyFoodRequest"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import PrivetRoute from "./PrivetRoute"
import Details from "../Pages/Details"
import Review from "../Pages/Review"
import GiveReview from "../Pages/GiveReview"



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'available_food',
                element: <AvaiableFood />
            },
            {
                path: 'add_food',
                element: <PrivetRoute><AddFood /></PrivetRoute>
            },
            {
                path: 'manage_my_food',
                element: <PrivetRoute><ManageMyFood /></PrivetRoute>
            },
            {
                path: 'my_food_request',
                element: <PrivetRoute> <MyFoodRequest /></PrivetRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign_up',
                element: <SignUp />
            },
            {
                path: 'details/:id',
                element:<PrivetRoute><Details/></PrivetRoute>
            },
            {
                path: '/reviews',
                element: <PrivetRoute><Review /></PrivetRoute>
            },
            {
                path: '/give_review',
                element:<GiveReview/>
            }
        ]
    }
])

export default routes