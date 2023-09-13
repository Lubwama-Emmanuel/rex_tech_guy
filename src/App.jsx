import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Homepage from "./pages/Homepage"

export default function App() {


  const router = createBrowserRouter([{
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Homepage />
    }]
  }])

  return <RouterProvider router={router} />
  
}

