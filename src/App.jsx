import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Content from "./pages/Content"
import Shopping from "./pages/Shopping"
import LayOut from "./LayOut"
import cartModal from "./cartModal/CartModal"
import Modal from "./components/Modal"
function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <LayOut />, children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/content", element: <Content /> },
        { path: "shopping", element: <Shopping />},
        { path: "/cart", element: <cartModal /> }



      ]
    },
  ])
  return (
    <div className="container mx-auto">

        <RouterProvider router={router} />
      

    </ div>
  )
}
export default App
