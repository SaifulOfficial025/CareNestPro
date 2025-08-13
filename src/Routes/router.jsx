import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPageCareSeekerElder from "../Pages/CareSeekerElder/LoginPage";
import  SignupPageCareSeekerElder from "../Pages/CareSeekerElder/signup/Signup";
import LoginPageCareSeekerChild from "../Pages/CareSeekerChild/LoginPage";
import  SignupPageCareSeekerChild from "../Pages/CareSeekerChild/signup/Signup";
import LoginPageCareSeekerTutoring from "../Pages/CareSeekerTutoring/LoginPage";
import  SignupPageCareSeekerTutoring from "../Pages/CareSeekerTutoring/signup/Signup";
import LoginPageCareSeekerHomeKeeper from "../Pages/CareSeekerHomekeeper/LoginPage";
import  SignupPageCareSeekerHomeKeeper from "../Pages/CareSeekerHomekeeper/signup/Signup";
import LoginPageCareProviderHomeKeeper from "../Pages/CareProviderHomekeeper/LoginPage";
import SignupPageCareProviderHomeKeeper from "../Pages/CareProviderHomekeeper/signup/Signup";
import CareSeekerLoginPage from "../Pages/CareSeekers/LoginPage"; 
import CareSeekerSignupPage from "../Pages/CareSeekers/Signup/Signup";
import CareProviderLoginPage from "../Pages/CareProviders/LoginPage";
import CareProviderSignupPage from "../Pages/CareProviders/Signup/Signup"; 
import CareProvidersNearYouDashboard from "../Pages/CareSeekers/Dashboard/CareProvidersNearYou";
import ViewDetails from "../Pages/CareSeekers/Dashboard/ViewDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
  },
  {
    path: "/login_care_seeker_tutoring",
    element: <LoginPageCareSeekerTutoring />,
  },
  {
    path: "/signup_care_seeker_tutoring",
    element: <SignupPageCareSeekerTutoring />,
  },
  {
    path: "/login_care_seeker_home_keeper",
    element: <LoginPageCareSeekerHomeKeeper />,
  },
  {
    path: "/signup_care_seeker_home_keeper",
    element: <SignupPageCareSeekerHomeKeeper />,
  },
  {
    path: "/login_care_provider_home_keeper",
    element: <LoginPageCareProviderHomeKeeper />,
  },
  {
    path: "/signup_care_provider_home_keeper",
    element: <SignupPageCareProviderHomeKeeper />,
  },
  {
    path: "/careseekers/login",
    element: <CareSeekerLoginPage />,
  },
  {
    path: "/careseekers/signup",
    element: <CareSeekerSignupPage />,
  },
  {
    path: "/careproviders/login",
    element: <CareProviderLoginPage />,
  },
  {
    path: "/careproviders/signup",
    element: <CareProviderSignupPage />,
  },
  {
    path: "/careseekers/dashboard",
    element: <CareProvidersNearYouDashboard />,
  },
  {
    path: "/careseekers/dashboard/details",
    element: <ViewDetails />,
  }
]);
