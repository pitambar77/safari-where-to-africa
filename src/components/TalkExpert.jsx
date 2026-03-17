
import "./TalkExpert.css";
import export1 from "../assets/expo1.avif";
import export2 from "../assets/expo2.avif";
import export3 from "../assets/expo3.avif";
import { Link } from "react-router-dom";



const experts = [
  {
    name: "LION",
    img: '/wildlife-lion.webp'
  },
  {
    name: "ELEPHANT",
    img: '/wildlife-elephant.webp',
  },
  {
    name: "ZEBRA",
    img: '/wildlife-zebra.webp',
  },

];

const TalkExpert = () => {
    return (
  

    <section className="bg-[#f8f4ec] py-16 ">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* LEFT SIDE — 2/5 */}
        <div className="md:col-span-2">
          <p className="uppercase font-quicksand   text-gray-700 mb-3">
            Get Started
          </p>
          <h5 className=" font-cormorant text-6xl mb-8 mt-4 text-[#636363] capitalize font-normal">
            Want to chat?
          </h5>
          <p className="text-gray-700 mb-6 text-lg font-quicksand leading-relaxed max-w-md">
            Talk with our team and start planning your African journey
          </p>

          <Link to={'/enquiry'} className="bg-[#b1a47f] hover:bg-[#a0916d] font-quicksand text-white  text-sm uppercase py-2 px-5 rounded-sm transition">
            Help Me Plan
          </Link>

          <p className="mt-4 font-quicksand text-sm text-gray-900 font-medium">
            <span className="font-bold">or call us on:</span>{" "}
           +27(0)315352811
          </p>
        </div>

        {/* RIGHT SIDE — 3/5 */}
        <div className="md:col-span-3 flex flex-col sm:flex-row gap-6 justify-center">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group relative rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
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