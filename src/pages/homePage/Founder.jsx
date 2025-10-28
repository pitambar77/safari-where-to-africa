import "./Founder.css";
import founder from "../../assets/fonder.webp";

const Founder = () => {
  return (
 
    <>
      <div className=" px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-48 py-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-32 ">
          <div className="">
            <h2 className=" font-cormorant mb-4 text-lg uppercase text-[#aaa086]">
              John Mcmillan, Co-Founder Of Where To Africa:
            </h2>
            <h5 className=" font-cormorant font-semibold text-6xl text-[#636363] mb-4">
              "We're in the dreams- business."
            </h5>
            <p className=" font-quicksand mb-4">
              At Where to africa, we're not just planning trips - we're in the
              business of making dreams come true. Every safari we design is a
              labour of love, crafted by our team of passionate safari- planners
              who know Africa like the back of their hand.
            </p>
            <p className="font-quicksand mb-4">
              We truly believe that a safari changes you for good.
            </p>
            <p className="font-quicksand mb-4">
              We've experienced it firsthand - getting out in the wild brings
              people closer to each other and to nature. That's because there's
              a bit of wild in all of us, and a safari brings it out. When it
              does, we naturally want to keep that wildness safe - in the world
              and in ourselves. We hope your journey instils in you the same
              love for "Safari Africa" that inspired us to start this company.
            </p>
            <h6 className=" font-quicksand font-medium">
              Let's make the world a little wilder, one safari at a time.
            </h6>
          </div>
          <div>
            <div className=" ">
              <div className="">
                <img src={founder} alt="" className=" w-full  object-cover " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Founder;
