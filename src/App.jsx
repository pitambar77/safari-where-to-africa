import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🌍 Main site imports
import Layout from "./Layout";
import Home from "./pages/homePage/Home";
import SafariItinerary from "./pages/safariItinerary/SafariItinerary";
import AccomodationLanding from "./pages/Accomodation/LandingPage/AccomodationLanding";
import AccomodationDetails from "./pages/Accomodation/AccomodationDetails/AccomodationDetails";
import Experience from "./pages/experiencePage/Experience";
import ExperienceDetails from "./pages/experiencePage/experienceDetails/ExperienceDetails";
import DestinationDetails from "./pages/destinationPage/destinationDetailsPage/DestinationDetails";
import AboutUs from "./pages/AboutUs/AboutUs";
import ImpactPage from "./pages/Impact/ImpactPage";
import ViewItineraries from "./pages/ViewItineraries";
import BotswanaLandingPage from "./pages/Botswana/BotswanaLandingPage";
// import NamibiaLanding from "./pages/Namibia/NamibiaLanding";
// import ZimbabweLanding from "./pages/Zimbabwe/ZimbabweLanding";
// import ZambiaLanding from "./pages/Zambia/ZambiaLanding";
// import MozambiqueLanding from "./pages/Mozambique/MozambiqueLanding";
// import KenyaLanding from "./pages/Kenya/KenyaLanding";
// import TanzaniaLanding from "./pages/Tanzania/TanzaniaLanding";
import Icondisplay from "./components/Icondisplay";
import AccommodationAdmin from "./pages/AccommodationAdmin";

// 🧭 Dashboard imports
import DashboardLayout from "./components/DashboardLayout";
import DestinationPage from "./pages/DestinationPage";
import Experiences from "./pages/Experiences";
import Trips from "./pages/Trips";
import AccommodationForm from "./components/AccommodationForm";
import ItineraryForm from "./components/ItineraryForm";
import TravelGuideDetailsPage from "./pages/TravelGuide/TravelGuideDetailsPage";
import TravelguideForm from "./pages/TravelGuide/TravelguideForm";
import TravelguideList from "./pages/TravelGuide/TravelguideList";
import TravelguideDetails from "./pages/TravelGuide/TravelguideDetails";
import PackageLanding from "./pages/safariItinerary/PackageLanding";
import ExperienceLanding from "./pages/experiencePage/ExperienceLanding";
import ContactUs from "./pages/ContactUs/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import InquiryForm from "./components/InquiryForm";
// import ProtectedRoute from "./components/ProtectedRoute";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {/* 🌍 Main Website Routes */}
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         {/* <Route path="south-africa" element={<Experience />} /> */}
//         <Route
//           path=":destinationSlug/:regionSlug"
//           element={<DestinationDetails />}
//         />
//         <Route path="accommodations" element={<AccomodationLanding />} />
//         <Route path="packages" element={<PackageLanding />} />
//         <Route path="experiences" element={<ExperienceLanding />} />
//         <Route path="contact-us" element={<ContactUs />} />

//         <Route path="about-us" element={<AboutUs />} />
//         <Route path="conservation" element={<ImpactPage />} />
//         <Route path="accommodation-admin" element={<AccommodationAdmin />} />
//         <Route path="icondisplay" element={<Icondisplay />} />
//         <Route path="viewitinery" element={<ViewItineraries />} />
//         {/* <Route path="namibia" element={<NamibiaLanding />} />
//         <Route path="zimbabwe" element={<ZimbabweLanding />} />
//         <Route path="zambia" element={<ZambiaLanding />} />
//         <Route path="mozambique" element={<MozambiqueLanding />} />
//         <Route path="kenya" element={<KenyaLanding />} />
//         <Route path="tanzania" element={<TanzaniaLanding />} /> */}
//         <Route path="travel-guide" element={<TravelGuideDetailsPage />} />

//         {/* Dynamic destination & details */}
//         <Route path=":slug" element={<BotswanaLandingPage />} />
//         <Route path="package/:slug" element={<SafariItinerary />} />
//         {/* <Route path="/accommodation/:id" element={<AccomodationDetails />} /> */}
//         <Route path="accommodation/:slug" element={<AccomodationDetails />} />
//         <Route path="experience/:slug" element={<ExperienceDetails />} />
//         <Route path="travel-guide/:slug" element={<TravelguideDetails />} />
//       </Route>

//       {/* 🧭 Admin Dashboard Routes */}
//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route index element={<Navigate to="/dashboard/destinations" />} />
//         <Route path="destinations" element={<DestinationPage />} />
//         <Route path="experiences" element={<Experiences />} />
//         <Route path="trips" element={<Trips />} />
//         <Route path="accommodations" element={<AccommodationForm />} />
//         <Route path="itineraries" element={<ItineraryForm />} />
//         <Route path="travelguide" element={<TravelguideForm />} />
//         <Route path="blog" element={<TravelguideList />} />
//         <Route path="blog/edit/:id" element={<TravelguideForm />} />
//       </Route>
//       <Route path="*" element={<PageNotFound />} />
//     </>,
//   ),
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* ===== MAIN WEBSITE WITH LAYOUT ===== */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="accommodations" element={<AccomodationLanding />} />
        <Route path="packages" element={<PackageLanding />} />
        <Route path="experiences" element={<ExperienceLanding />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="conservation" element={<ImpactPage />} />
        <Route path="travel-guide" element={<TravelGuideDetailsPage />} />
        <Route path="enquiry" element={<InquiryForm />} />


        <Route
          path=":destinationSlug/:regionSlug"
          element={<DestinationDetails />}
        />
        <Route path="package/:slug" element={<SafariItinerary />} />
        <Route path="accommodation/:slug" element={<AccomodationDetails />} />
        <Route path="experience/:slug" element={<ExperienceDetails />} />
        <Route path="travel-guide/:slug" element={<TravelguideDetails />} />
        {/* ===== DESTINATION LANDING WITHOUT LAYOUT ===== */}
        <Route path="/:slug" element={<BotswanaLandingPage />} />
      </Route>

      {/* ===== DASHBOARD ===== */}
      {/* <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/destinations" />} />
        <Route path="destinations" element={<DestinationPage />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="trips" element={<Trips />} />
        <Route path="accommodations" element={<AccommodationForm />} />
        <Route path="itineraries" element={<ItineraryForm />} />
        <Route path="travelguide" element={<TravelguideForm />} />
        <Route path="blog" element={<TravelguideList />} />
        <Route path="blog/edit/:id" element={<TravelguideForm />} />
      </Route> */}

      {/* ===== LOGIN ROUTE ===== */}
      <Route path="/login" element={<Login />} />

      {/* ===== DASHBOARD (PROTECTED) ===== */}
      <Route
        path="/dashboard"
        element={
          // <ProtectedRoute>
            <DashboardLayout />
          // </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard/destinations" />} />
        <Route path="destinations" element={<DestinationPage />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="trips" element={<Trips />} />
        <Route path="accommodations" element={<AccommodationForm />} />
        <Route path="itineraries" element={<ItineraryForm />} />
        <Route path="travelguide" element={<TravelguideForm />} />
        <Route path="blog" element={<TravelguideList />} />
        <Route path="blog/edit/:id" element={<TravelguideForm />} />
      </Route>

      {/* ===== GLOBAL 404 ===== */}
      <Route path="*" element={<PageNotFound />} />
    </>,
  ),
);

const App = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-right" autoClose={2000} />
  </>
);

export default App;
