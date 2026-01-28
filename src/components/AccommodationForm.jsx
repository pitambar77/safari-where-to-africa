


// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { createAccommodation } from "../api/accommodationAPI";
// import ImageUpload from "./ImageUpload";
// import QnASection from "./QnASection";
// import IconDropdown from "./IconDropdown";
// import { getAllDestinations } from "../api/destinationAPI";

// // Match backend enums
// const DESTINATIONS = ["Africa", "Asia", "Europe", "South America", "North America"];
// const SUBDESTINATIONS = {
//   Africa: ["Kenya", "Tanzania", "South Africa", "Namibia"],
//   Asia: ["Japan", "Thailand", "Vietnam", "India"],
//   Europe: ["France", "Italy", "Spain", "Greece"],
//   "South America": ["Peru", "Brazil", "Chile"],
//   "North America": ["USA", "Canada", "Mexico"],
// };

// const AccommodationForm = () => {
//   const { register, handleSubmit, reset, watch, setValue } = useForm();
//   const [aboutBooking, setAboutBooking] = useState([]);
//   const [requirements, setRequirements] = useState([]);
//   const [subDestList, setSubDestList] = useState([]);

//    const [destinations, setDestinations] = useState([]); // ✅ for dropdown
//     const [selectedDestinationId, setSelectedDestinationId] = useState(""); // ✅ selected ID

//   const selectedDestination = watch("destination");

//   // Update subdestination options when destination changes
//   useEffect(() => {
//     if (selectedDestination) {
//       setSubDestList(SUBDESTINATIONS[selectedDestination] || []);
//       setValue("subdestination", ""); // reset subdestination
//     }

//     fetchDestinations();
//   }, [selectedDestination, setValue]);


//   const fetchDestinations = async () => {
//         const { data } = await getAllDestinations();
//         setDestinations(data);
//       };

//   const onSubmit = async (data) => {
//     const formData = new FormData();


//      formData.append("destinationId", selectedDestinationId);

//     // Append all string fields
//     Object.keys(data).forEach((key) => {
//       if (key !== "bannerImages" && key !== "galleryImages") {
//         formData.append(key, data[key]);
//       }
//     });

//     // Add images
//     Array.from(data.bannerImages || []).forEach((file) =>
//       formData.append("bannerImages", file)
//     );
//     Array.from(data.galleryImages || []).forEach((file) =>
//       formData.append("galleryImages", file)
//     );

//     // Add Q&A sections
//     formData.append("aboutBooking", JSON.stringify(aboutBooking));
//     formData.append("requirements", JSON.stringify(requirements));

//     try {
//       await createAccommodation(formData);
//       alert("✅ Accommodation added successfully");
//       reset();
//       setAboutBooking([]);
//       setRequirements([]);
//       setSubDestList([]);
//     } catch (error) {
//       alert("❌ Error creating accommodation");
//       console.error(error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg"
//     >
//       <h2 className="text-2xl font-semibold mb-6">Add Accommodation</h2>

//        <div>
//           <h3 className="font-semibold text-lg mb-2">Select Destination</h3>
//           <select
//             className="border p-2 w-full"
//             value={selectedDestinationId}
//             onChange={(e) => setSelectedDestinationId(e.target.value)}
//           >
//             <option value="">-- Select Destination --</option>
//             {destinations.map((dest) => (
//               <option key={dest._id} value={dest._id}>
//                 {dest.name}
//               </option>
//             ))}
//           </select>
//         </div>

//       {/* Banner Section */}
//       <ImageUpload
//         label="Banner Images"
//         name="bannerImages"
//         multiple
//         register={register}
//       />

//       <input
//         type="text"
//         placeholder="Banner Title"
//         {...register("bannerTitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <textarea
//         placeholder="Banner Description"
//         {...register("bannerDescription")}
//         className="w-full border p-2 mb-3 rounded"
//       />

//       {/* Overview */}
//       <input
//         type="text"
//         placeholder="Overview Title"
//         {...register("overviewTitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <input
//         type="text"
//         placeholder="Overview Subtitle"
//         {...register("overviewSubtitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <textarea
//         placeholder="Overview Description"
//         {...register("overviewDescription")}
//         className="w-full border p-2 mb-3 rounded"
//       />

//       {/* Filters */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         {/* Destination Dropdown */}
//         <select
//           {...register("destination", { required: true })}
//           className="border p-2 rounded"
//         >
//           <option value="">Select Destination</option>
//           {DESTINATIONS.map((dest) => (
//             <option key={dest} value={dest}>
//               {dest}
//             </option>
//           ))}
//         </select>

//         {/* Subdestination Dropdown */}
//         <select
//           {...register("subdestination", { required: true })}
//           className="border p-2 rounded"
//           disabled={!selectedDestination}
//         >
//           <option value="">Select Subdestination</option>
//           {subDestList.map((sub) => (
//             <option key={sub} value={sub}>
//               {sub}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Accommodation Info */}
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           type="text"
//           placeholder="Accommodation Name"
//           {...register("name", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           {...register("location", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Price Per Person"
//           {...register("pricePerPerson", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Nights Stay"
//           {...register("nightsStay", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Accommodation Type"
//           {...register("accommodationType", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Check-In"
//           {...register("checkIn")}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Check-Out"
//           {...register("checkOut")}
//           className="border p-2 rounded"
//         />
//       </div>

//       <input
//         type="text"
//         placeholder="Amenities (comma separated)"
//         {...register("amenities")}
//         className="w-full border p-2 rounded mt-4"
//       />

//       {/* Gallery */}
//       <ImageUpload
//         label="Gallery Images"
//         name="galleryImages"
//         multiple
//         register={register}
//       />

//       <textarea
//         placeholder="Gallery Description"
//         {...register("galleryDescription")}
//         className="w-full border p-2 mb-4 rounded"
//       />

//       {/* Q&A Sections */}
//       <QnASection
//         label="About Booking"
//         qna={aboutBooking}
//         setQna={setAboutBooking}
//       />
//       <QnASection
//         label="Requirements"
//         qna={requirements}
//         setQna={setRequirements}
//       />

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//       >
//         Save Accommodation
//       </button>
//     </form>
//   );
// };

// export default AccommodationForm;



// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { createAccommodation } from "../api/accommodationAPI";
// import ImageUpload from "./ImageUpload";
// import QnASection from "./QnASection";
// import { getAllDestinations } from "../api/destinationAPI";

// const AccommodationForm = () => {
//   const { register, handleSubmit, reset } = useForm();

//   // Dynamic dropdowns
//   const [destinations, setDestinations] = useState([]);
//   const [selectedDestinationId, setSelectedDestinationId] = useState("");
//   const [selectedRegionId, setSelectedRegionId] = useState("");

//   const [aboutBooking, setAboutBooking] = useState([]);
//   const [requirements, setRequirements] = useState([]);

//   // ✅ Fetch destinations with regions
//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   const fetchDestinations = async () => {
//     try {
//       const { data } = await getAllDestinations();
//       setDestinations(data);
//     } catch (err) {
//       console.error("Error fetching destinations:", err);
//     }
//   };

//   const selectedDestination = destinations.find(
//     (d) => d._id === selectedDestinationId
//   );

//   // ✅ Submit
//   const onSubmit = async (data) => {
//     if (!selectedDestinationId) {
//       alert("Please select a destination");
//       return;
//     }

//     if (!selectedRegionId) {
//       alert("Please select a region");
//       return;
//     }

//     const formData = new FormData();

//     // ✅ Link destination + region
//     formData.append("destinationId", selectedDestinationId);
//     formData.append("regionId", selectedRegionId);

//     // ✅ Append text fields
//     Object.keys(data).forEach((key) => {
//       if (key !== "bannerImages" && key !== "galleryImages") {
//         formData.append(key, data[key]);
//       }
//     });

//     // ✅ Append image files
//     Array.from(data.bannerImages || []).forEach((file) =>
//       formData.append("bannerImages", file)
//     );
//     Array.from(data.galleryImages || []).forEach((file) =>
//       formData.append("galleryImages", file)
//     );

//     // ✅ Append Q&A sections
//     formData.append("aboutBooking", JSON.stringify(aboutBooking));
//     formData.append("requirements", JSON.stringify(requirements));

//     try {
//       await createAccommodation(formData);
//       alert("✅ Accommodation added successfully!");
//       reset();
//       setAboutBooking([]);
//       setRequirements([]);
//       setSelectedDestinationId("");
//       setSelectedRegionId("");
//     } catch (error) {
//       console.error("❌ Error creating accommodation:", error);
//       alert("Failed to create accommodation");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg"
//     >
//       <h2 className="text-2xl font-semibold mb-6">Add Accommodation</h2>

//       {/* Destination Dropdown */}
//       <div className="mb-4">
//         <h3 className="font-semibold text-lg mb-2">Select Destination</h3>
//         <select
//           className="border p-2 w-full rounded"
//           value={selectedDestinationId}
//           onChange={(e) => {
//             setSelectedDestinationId(e.target.value);
//             setSelectedRegionId("");
//           }}
//         >
//           <option value="">-- Select Destination --</option>
//           {destinations.map((dest) => (
//             <option key={dest._id} value={dest._id}>
//               {dest.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Region Dropdown */}
//       {selectedDestination && selectedDestination.regions?.length > 0 && (
//         <div className="mb-4">
//           <h3 className="font-semibold text-lg mb-2">Select Region</h3>
//           <select
//             className="border p-2 w-full rounded"
//             value={selectedRegionId}
//             onChange={(e) => setSelectedRegionId(e.target.value)}
//           >
//             <option value="">-- Select Region --</option>
//             {selectedDestination.regions.map((region) => (
//               <option key={region._id} value={region._id}>
//                 {region.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Banner Section */}
//       <ImageUpload
//         label="Banner Images"
//         name="bannerImages"
//         multiple
//         register={register}
//       />

//       <input
//         type="text"
//         placeholder="Banner Title"
//         {...register("bannerTitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <textarea
//         placeholder="Banner Description"
//         {...register("bannerDescription")}
//         className="w-full border p-2 mb-3 rounded"
//       />

//       {/* Overview Section */}
//       <input
//         type="text"
//         placeholder="Overview Title"
//         {...register("overviewTitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <input
//         type="text"
//         placeholder="Overview Subtitle"
//         {...register("overviewSubtitle")}
//         className="w-full border p-2 mb-3 rounded"
//       />
//       <textarea
//         placeholder="Overview Description"
//         {...register("overviewDescription")}
//         className="w-full border p-2 mb-3 rounded"
//       />

//       {/* Accommodation Info */}
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           type="text"
//           placeholder="Accommodation Name"
//           {...register("name", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           {...register("location", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Price Per Person"
//           {...register("pricePerPerson", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Nights Stay"
//           {...register("nightsStay", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Accommodation Type"
//           {...register("accommodationType", { required: true })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Check-In"
//           {...register("checkIn")}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Check-Out"
//           {...register("checkOut")}
//           className="border p-2 rounded"
//         />
//       </div>

//       <input
//         type="text"
//         placeholder="Amenities (comma separated)"
//         {...register("amenities")}
//         className="w-full border p-2 rounded mt-4"
//       />

//       {/* Gallery Section */}
//       <ImageUpload
//         label="Gallery Images"
//         name="galleryImages"
//         multiple
//         register={register}
//       />

//       <textarea
//         placeholder="Gallery Description"
//         {...register("galleryDescription")}
//         className="w-full border p-2 mb-4 rounded"
//       />

//       {/* Q&A Sections */}
//       <QnASection
//         label="About Booking"
//         qna={aboutBooking}
//         setQna={setAboutBooking}
//       />
//       <QnASection
//         label="Requirements"
//         qna={requirements}
//         setQna={setRequirements}
//       />

//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Save Accommodation
//       </button>
//     </form>
//   );
// };

// export default AccommodationForm;


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createAccommodation } from "../api/accommodationAPI";
import ImageUpload from "./ImageUpload";
import QnASection from "./QnASection";
import { getAllDestinations } from "../api/destinationAPI";

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

  const [destinations, setDestinations] = useState([]); // ✅ all destinations
  const [selectedDestinationId, setSelectedDestinationId] = useState(""); // ✅ selected destination
  const [regions, setRegions] = useState([]); // ✅ store regions for selected destination
  const [selectedRegionId, setSelectedRegionId] = useState(""); // ✅ selected region

  const selectedDestination = watch("destination");

  // Fetch destinations initially
  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const { data } = await getAllDestinations();
      setDestinations(data);
    } catch (err) {
      console.error("Error fetching destinations:", err);
    }
  };

  // Handle region update when destination changes
  useEffect(() => {
    const selected = destinations.find((d) => d._id === selectedDestinationId);
    setRegions(selected?.regions || []);
  }, [selectedDestinationId, destinations]);

  // Handle frontend subdestination list (local)
  useEffect(() => {
    if (selectedDestination) {
      setSubDestList(SUBDESTINATIONS[selectedDestination] || []);
      setValue("subdestination", "");
    }
  }, [selectedDestination, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // ✅ Include destinationId + regionId
    formData.append("destinationId", selectedDestinationId);
    formData.append("regionId", selectedRegionId);

    // Append all text fields
    Object.keys(data).forEach((key) => {
      if (key !== "bannerImages" && key !== "galleryImages") {
        formData.append(key, data[key]);
      }
    });

    // Append images
    Array.from(data.bannerImages || []).forEach((file) =>
      formData.append("bannerImages", file)
    );
    Array.from(data.galleryImages || []).forEach((file) =>
      formData.append("galleryImages", file)
    );

    // Append Q&A
    formData.append("aboutBooking", JSON.stringify(aboutBooking));
    formData.append("requirements", JSON.stringify(requirements));

    try {
      await createAccommodation(formData);
      alert("✅ Accommodation added successfully");
      reset();
      setAboutBooking([]);
      setRequirements([]);
      setSubDestList([]);
      setSelectedDestinationId("");
      setSelectedRegionId("");
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

      {/* Destination Dropdown */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Select Destination</h3>
        <select
          className="border p-2 w-full"
          value={selectedDestinationId}
          onChange={(e) => setSelectedDestinationId(e.target.value)}
        >
          <option value="">-- Select Destination --</option>
          {destinations.map((dest) => (
            <option key={dest._id} value={dest._id}>
              {dest.name}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Region Dropdown */}
      {regions.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Select Region</h3>
          <select
            className="border p-2 w-full"
            value={selectedRegionId}
            onChange={(e) => setSelectedRegionId(e.target.value)}
          >
            <option value="">-- Select Region --</option>
            {regions.map((region) => (
              <option key={region._id} value={region._id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      )}

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
