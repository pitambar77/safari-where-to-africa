import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createAccommodation } from "../api/accommodationAPI.js";
import ImageUpload from "./ImageUpload";
import QnASection from "./QnASection";
import { getAllDestinations } from "../api/destinationAPI.js";

const DESTINATIONS = [
  "Africa",
  "Asia",
  "Europe",
  "South America",
  "North America",
];
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

  const [amenities, setAmenities] = useState([
    { amenityName: "", amenityImage: null },
  ]);

  const [gallery, setGallery] = useState([
    { galleryName: "", galleryImage: null },
  ]);

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

  // const onSubmit = async (data) => {
  //   const formData = new FormData();

  //   // ✅ Include destinationId + regionId
  //   formData.append("destinationId", selectedDestinationId);
  //   formData.append("regionId", selectedRegionId);

  //   // Append all text fields
  //   Object.keys(data).forEach((key) => {
  //     if (key !== "bannerImages" && key !== "galleryImages") {
  //       formData.append(key, data[key]);
  //     }
  //   });

  //   // Append images
  //   Array.from(data.bannerImages || []).forEach((file) =>
  //     formData.append("bannerImages", file),
  //   );
  //   Array.from(data.galleryImages || []).forEach((file) =>
  //     formData.append("galleryImages", file),
  //   );

  //   // Append Q&A
  //   formData.append("aboutBooking", JSON.stringify(aboutBooking));
  //   formData.append("requirements", JSON.stringify(requirements));

  //   try {
  //     await createAccommodation(formData);
  //     alert("✅ Accommodation added successfully");
  //     reset();
  //     setAboutBooking([]);
  //     setRequirements([]);
  //     setSubDestList([]);
  //     setSelectedDestinationId("");
  //     setSelectedRegionId("");
  //   } catch (error) {
  //     alert("❌ Error creating accommodation");
  //     console.error(error);
  //   }
  // };

  const onSubmit = async (data) => {
  const formData = new FormData();

  // IDs
  formData.append("destinationId", selectedDestinationId);
  formData.append("regionId", selectedRegionId);

  // Text fields
  Object.keys(data).forEach((key) => {
    if (
      !["bannerImages", "landingImage"].includes(key)
    ) {
      formData.append(key, data[key]);
    }
  });

  // Banner Images
  Array.from(data.bannerImages || []).forEach((file) =>
    formData.append("bannerImages", file)
  );

  // Landing Image
  if (data.landingImage?.[0]) {
    formData.append("landingImage", data.landingImage[0]);
  }

  // Amenities
  formData.append(
    "amenities",
    JSON.stringify(amenities.map(({ amenityName }) => ({ amenityName })))
  );
  amenities.forEach((a) => {
    if (a.amenityImage)
      formData.append("amenityImages", a.amenityImage);
  });

  // Gallery
  formData.append(
    "gallery",
    JSON.stringify(gallery.map(({ galleryName }) => ({ galleryName })))
  );
  gallery.forEach((g) => {
    if (g.galleryImage)
      formData.append("galleryImages", g.galleryImage);
  });

  // Q&A
  formData.append("aboutBooking", JSON.stringify(aboutBooking));
  formData.append("requirements", JSON.stringify(requirements));

  try {
    await createAccommodation(formData);
    alert("✅ Accommodation added successfully");
    reset();
    setAmenities([{ amenityName: "", amenityImage: null }]);
    setGallery([{ galleryName: "", galleryImage: null }]);
    setAboutBooking([]);
    setRequirements([]);
  } catch (err) {
    console.error(err);
    alert("❌ Failed to create accommodation");
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
        <input
        type="text"
        placeholder="Banner Sub Title"
        {...register("bannerSubtitle")}
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
          type="text"
          placeholder="Price Per Person"
          {...register("pricePerPerson", { required: true })}
          className="border p-2 rounded"
        />
        <input
          type="text"
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

      {/* <input
        type="text"
        placeholder="Amenities (comma separated)"
        {...register("amenities")}
        className="w-full border p-2 rounded mt-4"
      /> */}

      <h3 className="font-semibold mt-6 mb-2">Amenities</h3>

      {amenities.map((item, index) => (
        <div key={index} className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Amenity Name"
            value={item.amenityName}
            onChange={(e) => {
              const updated = [...amenities];
              updated[index].amenityName = e.target.value;
              setAmenities(updated);
            }}
            className="border p-2 rounded w-1/2"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const updated = [...amenities];
              updated[index].amenityImage = e.target.files[0];
              setAmenities(updated);
            }}
            className="border p-2 rounded w-1/2"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setAmenities([...amenities, { amenityName: "", amenityImage: null }])
        }
        className="text-blue-600 text-sm"
      >
        + Add Amenity
      </button>

      {/* Gallery */}
      {/* <ImageUpload
        label="Gallery Images"
        name="galleryImages"
        multiple
        register={register}
      /> */}

      <ImageUpload
  label="Landing Image"
  name="landingImage"
  register={register}
/>

      <h3 className="font-semibold mt-6 mb-2">Gallery</h3>

      {gallery.map((item, index) => (
        <div key={index} className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Gallery Name"
            value={item.galleryName}
            onChange={(e) => {
              const updated = [...gallery];
              updated[index].galleryName = e.target.value;
              setGallery(updated);
            }}
            className="border p-2 rounded w-1/2"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const updated = [...gallery];
              updated[index].galleryImage = e.target.files[0];
              setGallery(updated);
            }}
            className="border p-2 rounded w-1/2"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setGallery([...gallery, { galleryName: "", galleryImage: null }])
        }
        className="text-blue-600 text-sm"
      >
        + Add Gallery Image
      </button>

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
