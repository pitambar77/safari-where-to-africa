// import WhyTravelCard from "../homePage/WhyTravelCard";

import whyus1 from "../../assets/why-us1.webp";
import whyus2 from "../../assets/why-us2.webp";
import whyus3 from "../../assets/why-us3.webp";

// const travelCardsData = [
//     {
//         id: 1,
//         image: whyus1,
//         title: "African Heritage",
//         content:"We are African-born conservationists and storytellers, guiding travelers through authentic landscapes and wildlife, sharing culture, traditions, and experiences while preserving the continent’s natural and cultural heritage.",
//     },
//     {
//         id: 2,
//         image: whyus2,
//         title: "Your Dreams Come First",
//         content:"With decades of safari expertise, we design luxury African journeys tailored to your vision, ensuring unforgettable, personalized adventures blending comfort, adventure, and authentic experiences throughout your safari.",
//     },
//     {
//         id: 3,
//         image: whyus3,
//         title: "Safaris For Good",
//         content:"We craft ethical, independent luxury safaris, partnering only with responsible providers to deliver immersive, authentic African experiences while supporting local communities, wildlife, and sustainable conservation efforts.",
//     },
// ];

// const WhyTravel = () => {
//     return (
//         <section className="why-travel-sec">
//             <div className="container">
//                 <div className="common-heading">
//                     <h2>Family Passion Meets Safari Expertise</h2>
//                     <h5>Why travel with Where to Africa</h5>
//                     <p>while tasting wines carefully cultivated and expertly poured. At
//                         safari lodges, tented camps and members' clubs luxuriously appoint...
//                     </p>
//                 </div>
//                 <div className="">
//                     {travelCardsData.map((card) => (
//                         <div className="" key={card.id}>
//                             <WhyTravelCard image={card.image} title={card.title} content={card.content} />
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };
// export default WhyTravel;

// import React from "react";

// const WhyTravel = () => {
//   const reasons = [
//     {
//       image: whyus1,
//       title: "African Heritage",
//       description:
//         "We’re conservationists, educators and storytellers, and we’re proudly born and bred Africans with over 25 years of experience navigating and exploring the African wilderness.",
//     },
//     {
//       image: whyus2,
//       title: "Your Dreams Come First",
//       description:
//         "Born from family heritage and guided by safari expertise, we deliver luxury African safaris curated just for you. Your vision becomes our blueprint as we create extraordinary experiences beyond what you thought possible.",
//     },
//     {
//       image: whyus3,
//       title: "Safaris For Good",
//       description:
//         "We design luxury safaris to suit you without the influence of commercial agreements or cooperations. We work with ethical providers to give you the most authentic African safari possible.",
//     },
//   ];

//   return (
//     <div className=" max-w-[1320px] mx-auto px-4 flex flex-col items-center bg-white py-16 ">
//       <div className="font-cormorant text-center">
//         <h2 className="text-3xl text-[#a89f82] uppercase">
//           Family Passion Meets Safari Expertise
//         </h2>
//         <h5 className="text-6xl  mb-10 mt-4 text-[#636363] font-normal">
//           Why travel with Where to Africa
//         </h5>
//         <p className=" font-quicksand max-w-xl mx-auto mb-12 ">
//           while tasting wines carefully cultivated and expertly poured. At
//           safari lodges, tented camps and members' clubs luxuriously appoint...
//         </p>
//       </div>

//       {/* Decorative Wavy Line */}
//       {/* <div className="mb-12">
//         <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M1 10C18.6667 3.33333 41 0 50 10C59 20 81.3333 16.6667 99 10" stroke="#A89F82" strokeWidth="2" strokeLinecap="round"/>
//         </svg>
//       </div> */}

//       {/* Feature Cards Container */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
//         {reasons.map((reason, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center bg-gray-50  shadow-sm"
//           >
//             {/* Image */}
//             <img
//               src={reason.image}
//               alt={reason.title}
//               className="w-full h-60 object-cover mb-6"
//             />
//             <div className=" p-6">
//               <h3 className="text-3xl font-cormorant font-medium text-[#636363] mb-4 ">
//                 {reason.title}
//               </h3>

//               <p className=" text-[#636363] font-quicksand  ">
//                 {reason.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyTravel;

import React from "react";


const WhyTravel = () => {
  const reasons = [
    {
      image: whyus1,
      title: "African Heritage",
      description:
        "We’re conservationists, educators and storytellers, and we’re proudly born and bred Africans with over 25 years of experience navigating and exploring the African wilderness.",
    },
    {
      image: whyus2,
      title: "Your Dreams Come First",
      description:
        "Born from family heritage and guided by safari expertise, we deliver luxury African safaris curated just for you. Your vision becomes our blueprint as we create extraordinary experiences beyond what you thought possible.",
    },
    {
      image: whyus3,
      title: "Safaris For Good",
      description:
        "We design luxury safaris to suit you without the influence of commercial agreements or cooperations. We work with ethical providers to give you the most authentic African safari possible.",
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-4 flex flex-col items-center bg-white py-16">
      <div className="font-cormorant text-center">
        <h2 className="text-3xl text-[#a89f82] uppercase">
          Family Passion Meets Safari Expertise
        </h2>
        <h5 className="text-6xl mb-10 mt-4 text-[#636363] capitalize font-normal">
          Why travel with Where to Africa
        </h5>
        <p className="font-quicksand max-w-xl mx-auto mb-12">
          while tasting wines carefully cultivated and expertly poured. At
          safari lodges, tented camps and members' clubs luxuriously appoint...
        </p>
      </div>

      {/* Feature Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-sm overflow-hidden transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden w-full h-60">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-3xl font-cormorant font-medium text-[#636363] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#636363] font-quicksand">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTravel;
