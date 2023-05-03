import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home/Home/Home'
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />,
                loader:() => fetch('http://localhost:4000/')
            },
            {
                path:"/chef/:id",
                element:<ChefRecipes />,
                loader:({params})=> fetch(`http://localhost:4000/chef/${params.id}`)
            }
        ]
    }
])

export default router