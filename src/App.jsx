import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import Landing from "./pages/landing"
import Auth from "./pages/auth"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"
import Redirect from "./pages/redirect-link"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "/auth",
        element: <Auth/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/link/:id",
        element: <Link/>,
      },
      {
        path: "/:id",
        element: <Redirect/>,
      },

    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
