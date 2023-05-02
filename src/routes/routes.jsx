import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home/Home/Home'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />,
                loader:() => fetch('http://localhost:4000/')
            }
        ]
    }
])

export default router