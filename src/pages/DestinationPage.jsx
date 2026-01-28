


import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createDestination,
  getAllDestinations,
  deleteDestination,
  updateDestination,
} from "../api/destinationApi";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    bannerImage: null,
    regions: [
      {
        name: "",
        slug: "",
        description: "",
        image: null,
      },
    ],
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all destinations
  const fetchDestinations = async () => {
    try {
      const { data } = await getAllDestinations();
      setDestinations(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load destinations");
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Handle input for destination fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle input for region fields
  const handleRegionChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedRegions = [...formData.regions];
    updatedRegions[index][name] = files ? files[0] : value;
    setFormData({ ...formData, regions: updatedRegions });
  };

  // Add new region block
  const addRegion = () => {
    setFormData({
      ...formData,
      regions: [...formData.regions, { name: "", slug: "", description: "", image: null }],
    });
  };

  // Remove region block
  const removeRegion = (index) => {
    const updated = formData.regions.filter((_, i) => i !== index);
    setFormData({ ...formData, regions: updated });
  };

  // Submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("name", formData.name);
    form.append("slug", formData.slug);

    const hero = {
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
    };
    form.append("hero", JSON.stringify(hero));

    if (formData.bannerImage) form.append("bannerImage", formData.bannerImage);

    // Append regions
    const regionData = formData.regions.map(({ name, slug, description }) => ({
      name,
      slug,
      description,
    }));
    form.append("regions", JSON.stringify(regionData));

    // Append region images
    formData.regions.forEach((r) => {
      if (r.image) form.append("regionImages", r.image);
    });

    try {
      if (editingId) {
        await updateDestination(editingId, form);
        toast.success("Destination updated!");
      } else {
        await createDestination(form);
        toast.success("Destination added!");
      }
      setFormData({
        name: "",
        slug: "",
        title: "",
        subtitle: "",
        description: "",
        bannerImage: null,
        regions: [{ name: "", slug: "", description: "", image: null }],
      });
      setEditingId(null);
      fetchDestinations();
    } catch (err) {
      console.error(err);
      toast.error("Error saving destination");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this destination?")) return;
    try {
      await deleteDestination(id);
      toast.success("Deleted successfully");
      fetchDestinations();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  // Edit
  const handleEdit = (dest) => {
    setEditingId(dest._id);
    setFormData({
      name: dest.name,
      slug: dest.slug,
      title: dest.hero?.title || "",
      subtitle: dest.hero?.subtitle || "",
      description: dest.hero?.description || "",
      bannerImage: null,
      regions:
        dest.regions?.length > 0
          ? dest.regions.map((r) => ({
              name: r.name,
              slug: r.slug,
              description: r.description,
              image: null,
            }))
          : [{ name: "", slug: "", description: "", image: null }],
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Destinations</h2>

      {/* Destination Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Destination Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug (unique)"
            value={formData.slug}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Hero Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Hero Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="file"
            name="bannerImage"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <textarea
          name="description"
          placeholder="Hero Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-3"
          rows={4}
        />

        {/* Regions Section */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-3 text-lg">Regions</h3>
          {formData.regions.map((region, index) => (
            <div key={index} className="border p-4 mb-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Region Name"
                  value={region.name}
                  onChange={(e) => handleRegionChange(index, e)}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="slug"
                  placeholder="Region Slug"
                  value={region.slug}
                  onChange={(e) => handleRegionChange(index, e)}
                  className="border p-2 rounded"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleRegionChange(index, e)}
                  className="border p-2 rounded"
                />
              </div>
              <textarea
                name="description"
                placeholder="Region Description"
                value={region.description}
                onChange={(e) => handleRegionChange(index, e)}
                className="border p-2 rounded w-full mt-3"
                rows={3}
              />
              <button
                type="button"
                onClick={() => removeRegion(index)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove Region
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addRegion}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add Region
          </button>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingId ? "Update Destination" : "Save Destination"}
        </button>
      </form>

      {/* Destination Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-3">All Destinations</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Banner</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Slug</th>
              <th className="p-2 border">Regions</th>
              <th className="p-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest) => (
              <tr key={dest._id} className="hover:bg-gray-50">
                <td className="border p-2">
                  {dest.hero?.bannerImage ? (
                    <img
                      src={dest.hero.bannerImage}
                      alt={dest.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border p-2">{dest.name}</td>
                <td className="border p-2">{dest.slug}</td>
                <td className="border p-2">
                  {dest.regions?.length
                    ? dest.regions.map((r) => r.name).join(", ")
                    : "No regions"}
                </td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(dest)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dest._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Destinations;
