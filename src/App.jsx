// import React from 'react'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import SafariItinerary from "./pages/safariItinerary/SafariItinerary";
// import Layout from './Layout';
// import AccomodationLanding from './pages/Accomodation/LandingPage/AccomodationLanding';
// import Home from './pages/homePage/Home';
// import AccomodationDetails from './pages/Accomodation/AccomodationDetails/AccomodationDetails';
// import Experience from './pages/experiencePage/Experience';
// import ExperienceDetails from './pages/experiencePage/experienceDetails/ExperienceDetails';
// import DestinationDetails from './pages/destinationPage/destinationDetailsPage/DestinationDetails';
// import AboutUs from './pages/AboutUs/AboutUs';
// import ImpactPage from './pages/Impact/ImpactPage';
// import AccommodationAdmin from './pages/AccommodationAdmin';
// import AccommodationLanding from './pages/Practice/AccommodationLanding';
// import AccommodationDetails from './pages/Practice/AccommodationDetails';
// import Icondisplay from './components/Icondisplay';
// import AdminPanel from './pages/AdminPanel';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ViewItineraries from './pages/ViewItineraries';
// // import AddExperience from './pages/ExperienceBackend/AddExperience';
// // import EditExperience from './pages/ExperienceBackend/EditExperience';
// // import ViewExperiences from './pages/ExperienceBackend/ViewExperiences';
// import BotswanaLandingPage from './pages/Botswana/BotswanaLandingPage';
// import NamibiaLanding from './pages/Namibia/NamibiaLanding';
// import ZimbabweLanding from './pages/Zimbabwe/ZimbabweLanding';
// import ZambiaLanding from './pages/Zambia/ZambiaLanding';
// import MozambiqueLanding from './pages/Mozambique/MozambiqueLanding';
// import KenyaLanding from './pages/Kenya/KenyaLanding';
// import TanzaniaLanding from './pages/Tanzania/TanzaniaLanding';


// const App = () => {
//     const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
      
//        <Route path="/" element={<Layout/>}>
//         <Route path="" element={<Home/>}/>

//         {/* <Route path="itinerary" element={<SafariItinerary />}/> */}
//         <Route path="south-africa" element={<Experience />}/>
     
//         {/* <Route path="experience-details" element={<ExperienceDetails />}/> */}
//         {/* <Route path="cape-town" element={<DestinationDetails />}/> */}

//        <Route
//   path="/destinations/:destinationSlug/:regionSlug"
//   element={<DestinationDetails />}
// />


//         <Route path="accomodation-landing" element={<AccomodationLanding/>}/>
//         {/* <Route path="accomodation-details" element={<AccomodationDetails/>}/> */}
//         <Route path='about-us' element={<AboutUs/>}/>
//         <Route path='conservation' element={<ImpactPage/>}/>
//         <Route path='accommodation-admin' element={<AccommodationAdmin/>}/>

// <Route path="la" element={<AccommodationLanding />} />
//         {/* <Route path="accommodation/:id" element={<AccommodationDetails />} /> */}
//         <Route path="admin/accommodation" element={<AccommodationAdmin />} />
//         <Route path='icondisplay' element = {<Icondisplay/>}/>

//         {/* <Route path='dashbord' element = {<AdminPanel/>}/> */}

//   <Route path='viewitinery' element = {<ViewItineraries/>}/>

//       {/* <Route path='add-experience' element={<AddExperience/>}/>
//       <Route path='edit-experience/:id' element={<EditExperience/>}/>
//       <Route path='view-experience' element ={<ViewExperiences/>}/> */}

//         {/* <Route path="botswana" element={<BotswanaLandingPage />}/> */}
//         <Route path="namibia" element={<NamibiaLanding/>}/>

//         <Route path="zimbabwe" element={<ZimbabweLanding/>}/>
//         <Route path="zambia" element={<ZambiaLanding/>}/>
// <Route path="mozambique" element={<MozambiqueLanding/>}/>
// <Route path="kenya" element={<KenyaLanding/>}/>
// <Route path="tanzania" element={<TanzaniaLanding/>}/>


// {/* Dynamic destination page */}
//         <Route path="/destination/:slug" element={<BotswanaLandingPage />} />

//     {/* Trip Details Page */}
//         <Route path="/trip/:id" element={<SafariItinerary />} />

//             {/* Accommodation Details Page */}
//         <Route path="/accommodation/:id" element={<AccomodationDetails/>} />

//           {/* Experience Details Page */}
//         <Route path="/experience/:id" element={<ExperienceDetails/>} />
//        </Route>

       
//       </>
//     )
//   );

//   return <RouterProvider router={router} />;
// }

// export default App


// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import Layout from "./Layout";
// import Home from "./pages/homePage/Home";
// import SafariItinerary from "./pages/safariItinerary/SafariItinerary";
// import Experience from "./pages/experiencePage/Experience";
// import ExperienceDetails from "./pages/experiencePage/experienceDetails/ExperienceDetails";
// import DestinationDetails from "./pages/destinationPage/destinationDetailsPage/DestinationDetails";
// import AccomodationLanding from "./pages/Accomodation/LandingPage/AccomodationLanding";
// import AccomodationDetails from "./pages/Accomodation/AccomodationDetails/AccomodationDetails";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import ImpactPage from "./pages/Impact/ImpactPage";

// // --- Admin imports ---
// import AdminLayout from "./pages/AdminLayout";
// import Dashboard from "./pages/Dashboard";
// import DestinationPage from "./pages/DestinationPage";
// // import TripPage from "./pages/TripPage";
// // import ExperiencePage from "./pages/ExperiencePage";
// // import AccommodationPage from "./pages/AccommodationPage";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {/* Public Website */}
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="itinerary" element={<SafariItinerary />} />
//         <Route path="experience" element={<Experience />} />
//         <Route path="experience-details" element={<ExperienceDetails />} />
//         <Route path="destination-details" element={<DestinationDetails />} />
//         <Route path="accommodation" element={<AccomodationLanding />} />
//         <Route path="accommodation-details" element={<AccomodationDetails />} />
//         <Route path="about-us" element={<AboutUs />} />
//         <Route path="impact" element={<ImpactPage />} />
//       </Route>

//       {/* Admin Dashboard */}
//       <Route path="/admin" element={<AdminLayout />}>
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="destinations" element={<DestinationPage />} />
//         {/* <Route path="trips" element={<TripPage />} />
//         <Route path="experiences" element={<ExperiencePage />} />
//         <Route path="accommodations" element={<AccommodationPage />} /> */}
//       </Route>
//     </>
//   )
// );

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//       <ToastContainer position="top-right" />
//     </>
//   );
// };

// export default App;


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import DashboardLayout from "./components/DashboardLayout";
// import DestinationPage from "./pages/DestinationPage";
// import Experiences from "./pages/Experiences";
// import AccommodationForm from './components/AccommodationForm'
// import ItineraryForm from './components/ItineraryForm'
// // import Accommodations from "./pages/Accommodations";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Trips from "./pages/Trips";
// // import Accommodations from "./pages/Accommodations";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/destinations" />} />
//         <Route element={<DashboardLayout />}>
//           <Route path="/destinations" element={<DestinationPage />} />
//           <Route path="/experiences" element={<Experiences />} />
//          <Route path="/trips" element={<Trips/>} />
//            <Route path="/accommodations" element={<AccommodationForm/>} />
//         </Route>
//       </Routes>
//       <ToastContainer position="bottom-right" autoClose={2000} />
//     </Router>
//   );
// };

// export default App;




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
import NamibiaLanding from "./pages/Namibia/NamibiaLanding";
import ZimbabweLanding from "./pages/Zimbabwe/ZimbabweLanding";
import ZambiaLanding from "./pages/Zambia/ZambiaLanding";
import MozambiqueLanding from "./pages/Mozambique/MozambiqueLanding";
import KenyaLanding from "./pages/Kenya/KenyaLanding";
import TanzaniaLanding from "./pages/Tanzania/TanzaniaLanding";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌍 Main Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="south-africa" element={<Experience />} />
        <Route
          path="/destinations/:destinationSlug/:regionSlug"
          element={<DestinationDetails />}
        />
        <Route path="accomodation-landing" element={<AccomodationLanding />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="conservation" element={<ImpactPage />} />
        <Route path="accommodation-admin" element={<AccommodationAdmin />} />
        <Route path="icondisplay" element={<Icondisplay />} />
        <Route path="viewitinery" element={<ViewItineraries />} />
        <Route path="namibia" element={<NamibiaLanding />} />
        <Route path="zimbabwe" element={<ZimbabweLanding />} />
        <Route path="zambia" element={<ZambiaLanding />} />
        <Route path="mozambique" element={<MozambiqueLanding />} />
        <Route path="kenya" element={<KenyaLanding />} />
        <Route path="tanzania" element={<TanzaniaLanding />} />
        <Route path="travel-guide" element={<TravelGuideDetailsPage/>}/>

        {/* Dynamic destination & details */}
        <Route path="/destination/:slug" element={<BotswanaLandingPage />} />
        <Route path="/trip/:id" element={<SafariItinerary />} />
        <Route path="/accommodation/:id" element={<AccomodationDetails />} />
        <Route path="/experience/:id" element={<ExperienceDetails />} />
      </Route>

      {/* 🧭 Admin Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/destinations" />} />
        <Route path="destinations" element={<DestinationPage />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="trips" element={<Trips />} />
        <Route path="accommodations" element={<AccommodationForm />} />
        <Route path="itineraries" element={<ItineraryForm />} />
      </Route>
    </>
  )
);

const App = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-right" autoClose={2000} />
  </>
);

export default App;

