


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createAccommodation } from "../api/accommodationAPI";
import ImageUpload from "./ImageUpload";
import QnASection from "./QnASection";
import IconDropdown from "./IconDropdown";

// Match backend enums
const DESTINATIONS = ["Africa", "Asia", "Europe", "South America", "North America"];
const SUBDESTINATIONS = {
  Africa: ["Kenya", "Tanzania", "South Africa", "Namibia"],
  Asia: ["Japan", "Thailand", "Vietnam", "India"],
  Europe: ["France", "Italy", "Spain", "Greece"],
  "South America": ["Peru", "Brazil", "Chile"],
  "North America": ["USA", "Canada", "Mexico"],
};

const AccommodationForm = () => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [aboutBooking, setAboutBooking] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [subDestList, setSubDestList] = useState([]);

  const selectedDestination = watch("destination");

  // Update subdestination options when destination changes
  useEffect(() => {
    if (selectedDestination) {
      setSubDestList(SUBDESTINATIONS[selectedDestination] || []);
      setValue("subdestination", ""); // reset subdestination
    }
  }, [selectedDestination, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all string fields
    Object.keys(data).forEach((key) => {
      if (key !== "bannerImages" && key !== "galleryImages") {
        formData.append(key, data[key]);
      }
    });

    // Add images
    Array.from(data.bannerImages || []).forEach((file) =>
      formData.append("bannerImages", file)
    );
    Array.from(data.galleryImages || []).forEach((file) =>
      formData.append("galleryImages", file)
    );

    // Add Q&A sections
    formData.append("aboutBooking", JSON.stringify(aboutBooking));
    formData.append("requirements", JSON.stringify(requirements));

    try {
      await createAccommodation(formData);
      alert("✅ Accommodation added successfully");
      reset();
      setAboutBooking([]);
      setRequirements([]);
      setSubDestList([]);
    } catch (error) {
      alert("❌ Error creating accommodation");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Add Accommodation</h2>

      {/* Banner Section */}
      <ImageUpload
        label="Banner Images"
        name="bannerImages"
        multiple
        register={register}
      />

      <input
        type="text"
        placeholder="Banner Title"
        {...register("bannerTitle")}
        className="w-full border p-2 mb-3 rounded"
      />
      <textarea
        placeholder="Banner Description"
        {...register("bannerDescription")}
        className="w-full border p-2 mb-3 rounded"
      />

      {/* Overview */}
      <input
        type="text"
        placeholder="Overview Title"
        {...register("overviewTitle")}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="text"
        placeholder="Overview Subtitle"
        {...register("overviewSubtitle")}
        className="w-full border p-2 mb-3 rounded"
      />
      <textarea
        placeholder="Overview Description"
        {...register("overviewDescription")}
        className="w-full border p-2 mb-3 rounded"
      />

      {/* Filters */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Destination Dropdown */}
        <select
          {...register("destination", { required: true })}
          className="border p-2 rounded"
        >
          <option value="">Select Destination</option>
          {DESTINATIONS.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>

        {/* Subdestination Dropdown */}
        <select
          {...register("subdestination", { required: true })}
          className="border p-2 rounded"
          disabled={!selectedDestination}
        >
          <option value="">Select Subdestination</option>
          {subDestList.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* Accommodation Info */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Accommodation Name"
          {...register("name", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          {...register("location", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price Per Person"
          {...register("pricePerPerson", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Nights Stay"
          {...register("nightsStay", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Accommodation Type"
          {...register("accommodationType", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Check-In"
          {...register("checkIn")}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Check-Out"
          {...register("checkOut")}
          className="border p-2 rounded"
        />
      </div>

      <input
        type="text"
        placeholder="Amenities (comma separated)"
        {...register("amenities")}
        className="w-full border p-2 rounded mt-4"
      />

      {/* Gallery */}
      <ImageUpload
        label="Gallery Images"
        name="galleryImages"
        multiple
        register={register}
      />

      <textarea
        placeholder="Gallery Description"
        {...register("galleryDescription")}
        className="w-full border p-2 mb-4 rounded"
      />

      {/* Q&A Sections */}
      <QnASection
        label="About Booking"
        qna={aboutBooking}
        setQna={setAboutBooking}
      />
      <QnASection
        label="Requirements"
        qna={requirements}
        setQna={setRequirements}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save Accommodation
      </button>
    </form>
  );
};

export default AccommodationForm;


// droupdown

// import React, { useState } from "react";
// import IconDropdown from "../components/IconDropdown";

// const AccommodationForm = () => {
//   const [amenities, setAmenities] = useState([{ name: "", icon: "" }]);

//   const handleAddAmenity = () => {
//     setAmenities([...amenities, { name: "", icon: "" }]);
//   };

//   const handleAmenityChange = (index, field, value) => {
//     const updated = [...amenities];
//     updated[index][field] = value;
//     setAmenities(updated);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Amenities:", amenities);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white rounded shadow">
//       <h2 className="text-xl font-semibold">Add Amenities</h2>

//       {amenities.map((am, index) => (
//         <div key={index} className="flex items-center gap-3">
//           {/* Amenity Name */}
//           <input
//             type="text"
//             placeholder="Amenity Name"
//             value={am.name}
//             onChange={(e) => handleAmenityChange(index, "name", e.target.value)}
//             className="border p-2 rounded w-1/2"
//           />

//           {/* Icon Dropdown */}
//          <IconDropdown
//   value={am.icon}
//   onChange={(val) => handleAmenityChange(index, "icon", val)}
// />

//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={handleAddAmenity}
//         className="text-blue-600 hover:underline"
//       >
//         + Add Amenity
//       </button>

//       <button
//         type="submit"
//         className="block mt-4 bg-black text-white px-4 py-2 rounded"
//       >
//         Save
//       </button>
//     </form>
//   );
// };

// export default AccommodationForm;

