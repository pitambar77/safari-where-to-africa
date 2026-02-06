import founder from "../../assets/fonder.webp";

const Founder = () => {
  return (
    <>
      <div className=" px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-32 ">
          <div className="">
            <h2 className=" font-cormorant mb-4 text-lg uppercase text-[#aaa086]">
              John McMillan, CEO at Where to Africa:
            </h2>
            <h5 className=" font-cormorant font-semibold text-6xl text-[#636363] mb-4">
              "Travel That Respects Africa’s Future"
            </h5>
            <p className=" font-quicksand mb-4">
              Spending time across Africa revealed how tourism decisions affect
              people and nature. Responsible travel begins with listening to
              local voices and understanding natural limits.
            </p>
            <p className="font-quicksand mb-4">
              “Where to Africa” was created around the belief that travel should
              benefit the places it touches. Supporting local communities,
              protecting wildlife, and respecting cultural heritage remain
              central to every journey offered.
            </p>
            <p className="font-quicksand mb-4">
              Across Africa, responsible tourism has demonstrated its ability to
              create opportunities. When local guides lead, conservation is
              prioritized, and communities benefit directly; travel becomes
              meaningful and lasting.
            </p>
            <p className="font-quicksand mb-4">
              Journeys designed by “Where to Africa” are built on trust and
              long-term partnerships across Southern and East Africa. Each trip
              considers the land, the people, and what remains after visitors
              leave. The goal is simple: ensure travelers return home more
              aware, while destinations gain lasting value through protection,
              partnership, and respect. This approach guides decisions daily and
              reflects a commitment to Africa’s future, its communities, and its
              wildlife for generations to come.
            </p>
            {/* <h6 className=" font-quicksand font-medium">
              Let's make the world a little wilder, one safari at a time.
            </h6> */}
          </div>
          <div>
            <div className=" ">
              <img
                src={founder}
                alt=""
                className=" w-full  object-cover rounded-sm "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Founder;
