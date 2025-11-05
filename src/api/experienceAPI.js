

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/experience",
});

export const createExperience = (formData) =>
  API.post("/", formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getAllExperiences = () => API.get("/");
export const getExperienceById = (id) => API.get(`/${id}`);

export const updateExperience = (id, formData) =>
  API.patch(`/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

export const deleteExperience = (id) => API.delete(`/${id}`);

// // Delete single images from different sections
export const deleteGameDriveImage = (experienceId, gameDriveId) =>
  API.delete(`/${experienceId}/gameDrive/${gameDriveId}`);

export const deleteHighlightImage = (experienceId, highlightId) =>
  API.delete(`/${experienceId}/highlight/${highlightId}`);

export const deleteGalleryImage = (experienceId, imageId) =>
  API.delete(`/${experienceId}/gallery/${imageId}`);


