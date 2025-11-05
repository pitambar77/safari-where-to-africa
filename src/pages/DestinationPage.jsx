import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  createDestination,
  getAllDestinations,
  deleteDestination,
} from "../api/destinationAPI";
import FormInput from "../components/FormInput";
import ImageUpload from "../components/ImageUpload";

export default function DestinationPage() {
  const [form, setForm] = useState({ name: "", slug: "", description: "" });
  const [image, setImage] = useState(null);
  const [destinations, setDestinations] = useState([]);

const fetchData = async () => {
  try {
    const res = await getAllDestinations();
    // Handle both possible response formats
    const fetchedData = Array.isArray(res.data)
      ? res.data
      : res.data.data || [];
    setDestinations(fetchedData);
  } catch (err) {
    console.error("Error fetching destinations:", err);
    setDestinations([]);
    toast.error("Failed to load destinations");
  }
};


  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImage = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    if (image) formData.append("image", image);

    await createDestination(formData);
    toast.success("Destination created!");
    setForm({ name: "", slug: "", description: "" });
    setImage(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteDestination(id);
    toast.info("Deleted!");
    fetchData();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-6">Manage Destinations</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <FormInput label="Name" name="name" value={form.name} onChange={handleChange} />
        <FormInput label="Slug" name="slug" value={form.slug} onChange={handleChange} />
        <FormInput label="Description" name="description" value={form.description} onChange={handleChange} />
        <ImageUpload label="Image" onChange={handleImage} />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Save
        </button>
      </form>

      <div className="grid grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div key={dest._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={dest.image} alt={dest.name} className="h-40 w-full object-cover rounded-md mb-2" />
            <h3 className="font-semibold text-lg">{dest.name}</h3>
            <p className="text-sm text-gray-600">{dest.description}</p>
            <button
              onClick={() => handleDelete(dest._id)}
              className="mt-3 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
