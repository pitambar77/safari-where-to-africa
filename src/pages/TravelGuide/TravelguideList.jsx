import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const TravelguideList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get(`/api/blog`);
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axiosInstance.delete(`/api/blog/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <button
          onClick={() => navigate("/blog/create")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Create Blog
        </button>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.category}</p>
            </div>

            {/* <div className="flex gap-3">
              
              <Link
                to={`/dashboard/blog/edit/${blog._id}`}
                className="px-3 py-1 border rounded-lg"
              >
                Edit
              </Link>

             
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 border rounded-lg text-red-600"
              >
                Delete
              </button>
            </div> */}
            <div className="flex gap-3">
              {/* VIEW */}
              <Link
                to={`/travel-guide/${blog.slug}`}
                target="_blank"
                className="px-3 py-1 border rounded-lg text-green-600"
              >
                View
              </Link>

              {/* EDIT */}
              <Link
                to={`/dashboard/blog/edit/${blog._id}`}
                className="px-3 py-1 border rounded-lg"
              >
                Edit
              </Link>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 border rounded-lg text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {blogs.length === 0 && <p className="text-gray-500">No blogs found</p>}
      </div>
    </div>
  );
};

export default TravelguideList;
