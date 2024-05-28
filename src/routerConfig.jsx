import Home from "./components/Home"
import Game from "./components/Game"

export const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/game',
        element:<Game/>
    }
]