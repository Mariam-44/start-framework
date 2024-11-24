import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import Layout from "./components/Layout/Layout"

function App() {
 
  const router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
       {path:"/",element: <Home/>},
       {path:"/about",element:<About/>},
       {path:"/portfolio",element:<Portfolio/>},
       {path:"/contact",element:<Contact/>},
    ]}
   
  ])
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
