// import "./PositiveImpact.css";


// const PositiveImpact = () => {
//     return (
//         <section class="positive_impact_secsec">
//             <img src={posipico} alt="" className="w-100" />
//             <div className="container">
//                 <div className="common-heading positive-imp-coon">
//                     <h2>Travel With A Purpose</h2>
//                     <h5>We're proud to be making a positive impact</h5>
//                     <p>We’re big believers in leaving a positive impact in the
//                         countries in which we operate. We’re proud to donate $50 for
//                         every booking to projects focusing on female empowerment,
//                         tech education, and conservation.</p>

//                     <p>Our dream is to empower our guests to travel with a purpose.</p>
//                     <h6>So far, we've donated $78,000 to projects across Africa.</h6>
//                     <div className="common-button">
//                         <a href="#">Learn More</a>
//                     </div>
//                     <h2 className="moving-text"><i class="fa-solid fa-location-pin"></i>Ilearn About. Photo By: Francois D'elbee</h2>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default PositiveImpact;

import "./PositiveImpact.css";
import posipico from "../../assets/positive-pico.jpg";

const PositiveImpact = () => {
    return (
        <div className="relative bg-cover bg-center h-[600px] md:h-[700px] flex items-center "
     
      style={{ backgroundImage: `url('https://manoramaseoservice.com/scenic/assests/images/family-bush-beach-safari-banner.webp')` }} // Replace with actual path
    >

      <div className="absolute inset-0 bg-black opacity-30"></div> 
      
    
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center py-20">
        
      
        <div className="text-white md:w-1/2 lg:w-3/5 p-6 md:p-0">
          
         
          <div className="absolute left-[-2rem]  top-0 hidden md:block text-xs uppercase tracking-widest transform rotate-90 origin-top-left text-teal-200/70">
            ILEARNABOUT. PHOTO BY: FRANCOIS D'ELBEE 💡
          </div>

          <p className="text-sm uppercase font-quicksand  tracking-widest mb-4 ">
            TRAVEL WITH A PURPOSE
          </p>

          <h1 className="text-4xl md:text-5xl  font-cormorant  mb-6">
            We're proud to be making a positive impact
          </h1>

          <p className="text-lg mb-4 font-quicksand text-gray-200">
            We're big believers in leaving a positive impact in the countries in which we operate. We're proud to donate $50 for every booking to projects focusing on female empowerment, tech education, and conservation.
          </p>

          <p className="text-lg font-quicksand mb-8 text-gray-200">
            Our dream is to empower our guests to travel with a purpose.
          </p>
          
          <p className="text-xl font-quicksand font-bold mb-6 ">
            So far, we've donated $78,000 to projects across Africa.
          </p>

          {/* Learn More Button */}
          <button className="px-6 py-3 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
            LEARN MORE
          </button>
        </div>

        {/* Right-Side Image/Visual Element (Simulated) */}
        {/* The image component (the smiling boy) is part of the background/main image 
           in the original design, but for structure, we can imagine a visual area */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5">
          {/* In a real scenario, you'd place a figure/image overlay here if it wasn't the background */}
          {/* We'll use this space to implicitly show the background image is visible here */}
        </div>

        {/* The stars and boy are part of the main background image in the original.
            If you wanted to add the stars as overlays for a dynamic look: */}
        <div className="absolute right-1/4 top-1/4 animate-pulse text-yellow-300 text-3xl hidden md:block">
            ⭐️ 
        </div>
        <div className="absolute right-10 top-1/3 animate-pulse text-yellow-300 text-3xl hidden md:block">
            ⭐️
        </div>
        <div className="absolute right-1/4 bottom-1/4 animate-pulse text-yellow-300 text-3xl hidden md:block">
            ✨
        </div>

      </div>
    </div>
    );
};
export default PositiveImpact;