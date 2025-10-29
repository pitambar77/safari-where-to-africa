import React from "react";

const ImpactSection = () => {
  return (
    <section className="bg-white py-20 px-6 text-gray-800 text-center">
      {/* Logo + Heading */}
      <div className="max-w-4xl mx-auto">
        {/* Replace with your logo SVG or image */}
        <div className="flex justify-center items-center mb-6">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            className="w-48 h-48 text-[#3b4b85]"
          >
            <circle cx="70" cy="50" r="25" fill="none" stroke="#f8d447" strokeWidth="4" />
            <circle cx="100" cy="50" r="25" fill="none" stroke="#5ac8aa" strokeWidth="4" />
            <circle cx="85" cy="50" r="25" fill="none" stroke="#7ac2f4" strokeWidth="4" />
          </svg>


        <h1 className="text-5xl font-cormorant text-[#1e2a57] mb-2">impact</h1> */}

        <img src="https://www.tauck.com/-/media/Tauck/Editorial/Images/Impact/Impact_logo_COLOR.jpg?rev=90ff7dd67525404eb17032a3d23d26af" alt="" className=" w-96" />
                </div>
        {/* <p className="italic text-gray-500 text-lg mb-10">supporting a thriving world</p> */}

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed font-quicksand  max-w-[820px]  mx-auto">
          For over six decades, we have been committed to making a positive impact – environmentally,
          socially and economically – in the places we travel to. At Tauck, we center our commitment
          to creating a thriving world on three key pillars: People, Places, and Planet. By focusing
          on these areas, we strive to contribute to a more sustainable and prosperous future for
          all, ensuring a healthy planet – and meaningful connections for travelers and local
          residents in the places we visit.
        </p>

        {/* Multi-color line */}
        <div className="h-[4px] w-full max-w-5xl mx-auto mt-10 flex">
          <div className="flex-1 bg-[#f8d447]" />
          <div className="flex-1 bg-[#b7e6a7]" />
          <div className="flex-1 bg-[#a5e1dc]" />
          <div className="flex-1 bg-[#c6f1ee]" />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-16 max-w-[820px] mx-auto">
        <p className="text-3xl text-[#a89f82] uppercase font-cormorant mb-6">
          Mission Statement
        </p>
        <p className="italic text-xl text-[#636363]  font-medium font-quicksand leading-relaxed ">
          Our mission is to inspire and enable sustainable travel experiences that protect our planet,
          preserve cultural heritage, and support local communities. We are committed to minimizing
          our environmental footprint, supporting local economies, and fostering meaningful
          connections between travelers and the destinations they visit. Through mindful and
          responsible practices and partnerships, we aim to create a positive impact that ensures
          future generations can enjoy and appreciate the beauty and diversity of our world.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
