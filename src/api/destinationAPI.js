

// import axiosInstance from "./axiosInstance";

// // Get all destinations
// export const getAllDestinations = () => axiosInstance.get("/api/destinations");

// // Get a single destination by slug
// export const getDestinationBySlug = (slug) =>
//   axiosInstance.get(`/api/destinations/slug/${slug}`);


// // Create new destination (if you have admin)
// export const createDestination = (formData) =>
//   axiosInstance.post("/destinations", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // Get all destinations
// // export const getAllDestinations = () => API.get("/destinations");

// // Get one destination by ID
// export const getDestinationById = (id) => axiosInstance.get(`/destinations/${id}`);

// // Update destination
// export const updateDestination = (id, formData) =>
//   axiosInstance.put(`/destinations/${id}`, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // Delete destination
// export const deleteDestination = (id) => axiosInstance.delete(`/destinations/${id}`);


// ✅ correct versions

import axiosInstance from "./axiosInstance";

export const getDestinationBySlug = (slug) =>
  axiosInstance.get(`/api/destinations/slug/${slug}`);

export const getRegionBySlug = async (destinationSlug, regionSlug) => 
  axiosInstance.get(`api/destinations/${destinationSlug}/regions/${regionSlug}`);


export const getAllDestinations = () => axiosInstance.get("/api/destinations");
export const createDestination = (formData) =>
  axiosInstance.post("/api/destinations", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateDestination = (id, formData) =>
  axiosInstance.put(`/api/destinations/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteDestination = (id) =>
  axiosInstance.delete(`/api/destinations/${id}`);
