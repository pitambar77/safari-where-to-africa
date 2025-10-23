// import "./Footer.css";
// import logo from "../assets/whereto-logo.webp"; 

// const Footer =()=>{
//     return(
//         <>
//         <section className="footer-sec">
//             <div className=" max-w-[1320px] mx-auto px-4">
//                 <div className="foter_iner_box">
//                     <div className=" flex  gap-8 ">
//                         <div className="">
//                             <div className="africa_footer_logo">
//                                 <img src={logo} alt="" className=" w-1/2"/>
//                             </div>
//                         </div>
//                         <div className="">
//                             <div className=" flex justify-between gap-8 ">
//                                 <div className="col-md-3">
//                                     <div className="footer_list_box">
//                                         <h3>Travel Information</h3>
//                                         <ul className="footer_list">
//                                             <li><a href="#">First Time to Africa </a></li>
//                                             <li><a href="#">Sustainability</a></li>
//                                             <li><a href="#">The Wildebeest Migration</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-3">
//                                     <div className="footer_list_box">
//                                         <h3>About Us</h3>
//                                         <ul className="footer_list">
//                                             <li><a href="#">Our team</a></li>
//                                             <li><a href="#">Guest Reviews</a></li>
//                                             <li><a href="#">Why book with us?</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-3">
//                                     <div className="footer_list_box">
//                                         <h3>Who is Travelling?</h3>
//                                         <ul className="footer_list">
//                                             <li><a href="#">Couples and Honeymooners</a></li>
//                                             <li><a href="#">Family Safari</a></li>
//                                             <li><a href="#">Group of Friends</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-3">
//                                     <div className="footer_list_box">
//                                         <h3>Safaris:</h3>
//                                         <ul className="footer_list">
//                                             <li><a href="#">All Safaris</a></li>
//                                             <li><a href="#">Sample Safaris</a></li>
//                                             <li><a href="#">Set Departure Safaris</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
        // <section className="copywrite-sec">
        //     <div class="copyy-write">
        //         <p>AlI rights reserved© 2025 Where To Africa Travel Pty Ltd</p>
                
        //     </div>
            
        // </section>
//         </>
//     );
// };
// export default Footer;


import React from "react";
import logo from "../assets/whereto-logo.webp";  // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-[#d9d9d9] ">
      <div className="max-w-[1320px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="md:col-span-2 flex flex-col items-start">
          <img src={logo} alt="Where To Africa Logo" className="w-60 mb-4" />
          {/* <p className="text-sm text-[#c2bfae] tracking-wide">
            AFRICA TRAVEL AND TOURS
          </p> */}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:col-span-3 gap-8 font-cormorant">
          {/* Column 1 */}
          <div>
            <h4 className="text-[#c2bfae] text-lg font-semibold mb-4">
              Travel Information
            </h4>
            <ul className="space-y-2 text-sm font-quicksand">
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                First Time to Africa
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Sustainability
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                The Wildebeest Migration
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#c2bfae] text-lg font-semibold mb-4">
              About Us:
            </h4>
            <ul className="space-y-2 text-sm font-quicksand">
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Why book with us?
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Our team
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Guest Reviews
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#c2bfae] text-lg font-semibold mb-4">
              Who is Travelling?
            </h4>
            <ul className="space-y-2 text-sm font-quicksand">
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Couples and Honeymooners
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Family Safari
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Group of Friends
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#c2bfae] text-lg font-semibold mb-4">
              Safaris:
            </h4>
            <ul className="space-y-2 text-sm font-quicksand">
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                All Safaris
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Sample Safaris
              </li>
              <li className="hover:text-[#c2bfae] cursor-pointer transition">
                Set Departure Safaris
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div className=" bg-black/80 py-6 flex gap-4 justify-center font-quicksand">
        <p>AlI rights reserved© 2025 Where To Africa Travel Pty Ltd</p>
        <ul className=" flex gap-4">
                    <li><a href="#" className=" text-amber-300/80">Privacy Policy</a></li>
                    <li><a href="#" className="write_teram">Website Terms of Use</a></li>
                    <li><a href="#" className=" text-amber-300/80">Payment Conditions</a></li>
                    <li><a href="#">Al LLM Data</a></li>
                </ul>
     </div>
    </footer>
  );
};

export default Footer;
