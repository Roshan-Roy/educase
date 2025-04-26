import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Profile from "./pages/profile/Profile"
import Wrapper from "./components/Wrapper/Wrapper"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "signup",
      element: <Signup />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "profile",
      element: <Profile />
    }
  ])
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App