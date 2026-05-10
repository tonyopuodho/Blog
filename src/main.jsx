import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/Blog",
        element:<Blog/>
      },{
        path:"/Service",
        element:<Service/>
      },{
        path:"/About",
        element:<About/>
      },{
        path:"/Contact",
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
