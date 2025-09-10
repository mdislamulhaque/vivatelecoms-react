import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Services from "../pages/services/Services";
import Solutions from "../pages/solutions/Solutions";
import Partners from "../pages/partners/Partners";
import Team from "../pages/team/Team";
import Careers from "../pages/careers/Careers";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/careers",
        element: <Careers/>,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage/>,
  }
]);
