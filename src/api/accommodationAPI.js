import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/accommodation",
});

export const createAccommodation = (formData) =>
  API.post("/", formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getAccommodations = () => API.get("/");
export const getAccommodationById = (id) => API.get(`/${id}`);
export const deleteAccommodation = (id) => API.delete(`/${id}`);

// export const getFilteredAccommodations = (destination, subdestination) =>
//   API.get(`/filter?destination=${destination}&subdestination=${subdestination}`);

export const getFilteredAccommodations = (destination, subdestination) => {
  const params = {};
  if (destination) params.destination = destination;
  if (subdestination) params.subdestination = subdestination;
  return API.get("/", { params }); // sends ?destination=Africa&subdestination=Kenya
};