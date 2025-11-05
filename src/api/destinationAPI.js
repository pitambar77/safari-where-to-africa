import API from "./axiosInstance";

export const createDestination = (formData) =>
  API.post("/destinations", formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getAllDestinations = () => API.get("/destinations");
export const getDestinationById = (id) => API.get(`/destinations/${id}`);
export const updateDestination = (id, formData) =>
  API.put(`/destinations/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
export const deleteDestination = (id) => API.delete(`/destination/${id}`);
