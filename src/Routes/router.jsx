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
import Requests from "../Pages/CareSeekers/Dashboard/Requests";
import Message from "../Pages/CareSeekers/Dashboard/Message";
import Settings from "../Pages/CareSeekers/Dashboard/Settings";
import VerifyIdentity from "../Pages/CareSeekers/Dashboard/VerifyIdentity";
import PersonalInformation from "../Pages/CareSeekers/Dashboard/PersonalInformation";
import Password from "../Pages/CareSeekers/Dashboard/Password";
import MessageDetails from "../Pages/CareSeekers/Dashboard/MessageDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/careseekers/dashboard/settings",
    element: <Settings />,
  },
  {
    path: "/careseekers/dashboard/verify-identity",
    element: <VerifyIdentity />,
  },
  {
    path: "/careseekers/dashboard/personal-information",
    element: <PersonalInformation />,
  },
  {
    path: "/careseekers/dashboard/password",
    element: <Password />,
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
  },
  {
    path: "/careseekers/dashboard/requests",
    element: <Requests />,
  },
  {
    path: "/careseekers/dashboard/message",
    element: <Message />,
  },
  {
    path: "/careseekers/dashboard/setting",
    element: <Settings />,
  },
  {
    path: "/careseekers/dashboard/message_provider",
    element: <MessageDetails />,
  }

]);
