import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPageCareSeekerElder from "../Pages/CareSeekerElder/LoginPage";
import  SignupPageCareSeekerElder from "../Pages/CareSeekerElder/signup/Signup";
import LoginPageCareSeekerChild from "../Pages/CareSeekerChild/LoginPage";
import  SignupPageCareSeekerChild from "../Pages/CareSeekerChild/signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/login_care_seeker_elder",
    element: <LoginPageCareSeekerElder />,
  },
  {
    path: "/signup_care_seeker_elder",
    element: <SignupPageCareSeekerElder />,
  },
  {
    path: "/login_care_seeker_child",
    element: <LoginPageCareSeekerChild />,
  },
  {
    path: "/signup_care_seeker_child",
    element: <SignupPageCareSeekerChild />,
  }
]);
