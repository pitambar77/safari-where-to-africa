
import "./TalkExpert.css";
import export1 from "../assets/expo1.avif";
import export2 from "../assets/expo2.avif";
import export3 from "../assets/expo3.avif";



const experts = [
  {
    name: "MEG",
    img: export1, // replace with your image path
  },
  {
    name: "KEVIN",
    img: export2,
  },
  {
    name: "JOANNA",
    img: export3,
  },

];

const TalkExpert = () => {
    return (
    //     <section className="bg-[#f8f4ec] py-16 px-6 md:px-12 lg:px-20">
    //   <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //     {/* Left Side: Text */}
    //     <div className="">
    //       <p className="uppercase text-lg font-quicksand tracking-widest text-gray-700 mb-3">
    //         Our Experts
    //       </p>
    //       <h2 className="text-4xl md:text-6xl font-cormorant text-gray-900 mb-4">
    //         Want to chat?
    //       </h2>
    //       <p className="text-gray-700 mb-6 font-quicksand leading-relaxed max-w-md">
    //         Get advice and suggestions to make this your perfect trip.
    //       </p>
    //       <button className="bg-[#b1a47f] hover:bg-[#a0916d] font-quicksand text-black font-semibold text-sm uppercase tracking-widest py-2 px-5 rounded-sm transition">
    //         Help Me Plan
    //       </button>
    //       <p className="mt-4 text-sm text-gray-900 font-quicksand font-medium">
    //         <span className="font-bold">or call us on:</span>{" "}
    //         +263 (0)77 5386228
    //       </p>
    //     </div>


    //  <div className="  flex flex-col sm:flex-row gap-6 justify-center ">
    //       {experts.map((expert, index) => (
    //         <div
    //           key={index}
    //           className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
    //         >
    //           {/* Image with zoom effect */}
    //           <img
    //             src={expert.img}
    //             alt={expert.name}
    //             className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
    //           />

    //           {/* Dark overlay */}
    //           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>

    //           {/* Name text with smooth fade + move */}
    //           <div className="absolute inset-0 flex items-center justify-center">
    //             <p className="text-white text-lg font-semibold tracking-[0.2em] uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
    //               {expert.name}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </section>

    <section className="bg-[#f8f4ec] py-16 ">
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* LEFT SIDE — 2/5 */}
        <div className="md:col-span-2">
          <p className="uppercase font-cormorant text-lg tracking-widest text-gray-700 mb-3">
            Our Experts
          </p>
          <h2 className="text-4xl md:text-6xl font-cormorant text-gray-900 mb-4">
            Want to chat?
          </h2>
          <p className="text-gray-700 mb-6 text-lg font-quicksand leading-relaxed max-w-md">
            Get advice and suggestions to make this your perfect trip.
          </p>

          <button className="bg-[#b1a47f] hover:bg-[#a0916d] font-quicksand text-white font-semibold text-sm uppercase tracking-widest py-2 px-5 rounded-sm transition">
            Help Me Plan
          </button>

          <p className="mt-4 font-quicksand text-sm text-gray-900 font-medium">
            <span className="font-bold">or call us on:</span>{" "}
            +263 (0)77 5386228
          </p>
        </div>

        {/* RIGHT SIDE — 3/5 */}
        <div className="md:col-span-3 flex flex-col sm:flex-row gap-6 justify-center">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >
              {/* Image with zoom effect */}
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>

              {/* Name text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold tracking-[0.2em] uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {expert.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    );
};
export default TalkExpert;