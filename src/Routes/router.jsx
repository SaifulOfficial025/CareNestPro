import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/CareSeekerElder/LoginPage";
import Signup from "../Pages/CareSeekerElder/signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);
