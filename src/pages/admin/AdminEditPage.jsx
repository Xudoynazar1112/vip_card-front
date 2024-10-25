import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://vip-card.onrender.com/api/api/v1/";

const AdminEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
    price: "",
    stock: "",
    definition: "",
    image: null, // Add image field for file upload
  });

  // Fetch the item data when the component loads
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}detail-get/${id}/`)
      .then((response) => setItem(response.data))
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    // Handle file input separately to store the selected file
    const fieldValue = type === "file" ? files[0] : value;

    setItem((prevItem) => ({
      ...prevItem,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to send both files and text data
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("price", item.price);
    formData.append("stock", item.stock);
    formData.append("definition", item.definition);

    // Only append the image if a new one was selected
    if (item.image) {
      formData.append("image", item.image);
    }

    try {
      await axios.put(`${API_BASE_URL}detail-edit/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10" encType="multipart/form-data">
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Price</label>
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Stock</label>
        <input
          type="number"
          name="stock"
          value={item.stock}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Definition</label>
        <textarea
          name="definition"
          value={item.definition}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Image</label>
        <input
          type="file"
          name="image"
        //   value={item.image}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default AdminEditPage;
