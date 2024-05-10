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



    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element:<HomePage/>
                },
                {
                    path: 'available_food',
                    element:<AvaiableFood/>
                },
                {
                    path: 'add_food',
                    element:<AddFood/>
                },
                {
                    path: 'manage_my_food',
                    element:<ManageMyFood/>
                },
                {
                    path: 'my_food_request',
                    element:<MyFoodRequest/>
                },
                {
                    path: 'login',
                    element:<Login/>
                },
                {
                    path: 'sign_up',
                    element:<SignUp/>
                }
            ]
        }
    ])

export default routes