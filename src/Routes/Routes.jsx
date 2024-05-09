import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import HomePage from "../Pages/HomePage"
import ErrorPage from "../Pages/ErrorPage"



    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element:<HomePage/>
                }
            ]
        }
    ])

export default routes