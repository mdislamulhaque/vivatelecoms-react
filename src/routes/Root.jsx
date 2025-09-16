import { createBrowserRouter } from "react-router"; // 'react-router-dom' ব্যবহার
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
import PageTransition from "../components/PageTransition";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
      {
        path: "/our-services",
        element: (
          <PageTransition>
            <Services />
          </PageTransition>
        ),
      },
      {
        path: "/our-solutions",
        element: (
          <PageTransition>
            <Solutions />
          </PageTransition>
        ),
      },
      {
        path: "/our-partners",
        element: (
          <PageTransition>
            <Partners />
          </PageTransition>
        ),
      },
      {
        path: "/team",
        element: (
          <PageTransition>
            <Team />
          </PageTransition>
        ),
      },
      {
        path: "/careers",
        element: (
          <PageTransition>
            <Careers />
          </PageTransition>
        ),
      },
      {
        path: "/about-us",
        element: (
          <PageTransition>
            <AboutUs />
          </PageTransition>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <PageTransition>
            <ContactUs />
          </PageTransition>
        ),
      },
      {
        path: "/*",
        element: (
          <PageTransition>
            <NotFoundPage />
          </PageTransition>
        ),
      },
    ],
  },
]);
