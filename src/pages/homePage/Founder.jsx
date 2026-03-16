import founder from "../../assets/fonder.webp";

const Founder = () => {
  return (
    <>
      <div className=" px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-32 ">
          <div className="">
            {/* <h2 className=" font-cormorant text-2xl text-[#a89f82] uppercase">
              John McMillan, CEO at Where to Africa:
            </h2> */}
                <p className=" font-quicksand text-[#a89f82] uppercase">
              John McMillan, CEO at Where to Africa:
            </p>
            <h5 className=" font-cormorant text-6xl mb-8 mt-4 text-[#636363] capitalize font-normal">
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
              Journeys designed by “Where to Africa” are built on trust and
              long-term partnerships across Southern and East Africa. Each trip
              considers the land, the people, and what remains after visitors
              leave. The goal is simple: ensure travelers return home more
              aware, while destinations gain lasting value through protection,
              partnership, and respect. This approach guides decisions daily and
              reflects a commitment to Africa’s future, its communities, and its
              wildlife for generations to come.
            </p>
            
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
