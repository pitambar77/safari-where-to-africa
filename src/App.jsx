// import React from "react";
// // import {Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Header from "./components/header";
// import Testimonial from "./components/Testimonial";
// // import Home from "./pages/homePage/Home";
// import SafariItinerary from "./pages/safariItinerary/SafariItinerary";
// import TalkExpert from "./components/TalkExpert";
// import Partner from "./components/Partner";
// import Footer from "./components/Footer";
// // import { RouterProvider } from "react-router-dom";

// const App = () => {
//   return(
// <div className="max-size-box">
//    <Header />
//     {/* <Home /> */}
//     <SafariItinerary />
//     <Testimonial />
//     <TalkExpert />
//     <Partner />
//     <Footer />
// </div>
//   );
// };

// export default App;

import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SafariItinerary from "./pages/safariItinerary/SafariItinerary";
import Layout from './Layout';
import AccomodationLanding from './pages/Accomodation/LandingPage/AccomodationLanding';
import Home from './pages/homePage/Home';
import AccomodationDetails from './pages/Accomodation/AccomodationDetails/AccomodationDetails';
import Experience from './pages/experiencePage/Experience';
import ExperienceDetails from './pages/experiencePage/experienceDetails/ExperienceDetails';
import DestinationDetails from './pages/destinationPage/destinationDetailsPage/DestinationDetails';



const App = () => {
    const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
       <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>

        <Route path="itinerary" element={<SafariItinerary />}/>
        <Route path="experience" element={<Experience />}/>
        <Route path="experience-details" element={<ExperienceDetails />}/>
        <Route path="destination-details" element={<DestinationDetails />}/>

        <Route path="accomodation-landing" element={<AccomodationLanding/>}/>
        <Route path="accomodation-details" element={<AccomodationDetails/>}/>


       </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App