import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState([]); // Initialize with an empty array to avoid map issues

  useEffect(() => {
    axios
      .get("https://vip-card.onrender.com/api/api/v1/")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures the API call happens only once

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://vip-card.onrender.com/api/api/v1/detail-delete/${id}/`
      );
      console.log(response.data);
      // Fetch the updated items list after deletion
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin-edit/${id}`);
  };

  return (
    <>
      <table className="w-full">
        <tr>
          <th>№</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Definition</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {data.length > 0 ? (
          data.map((item, index) => (
            // <p key={index}>{item.name}</p>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt="photo" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.definition}</td>
              <td className="text-red-500 text-2xl" onClick={() => handleEdit(item.id)}>
                <FaEdit />
              </td>
              <td className="text-2xl" onClick={() => handleDelete(item.id)}>
                <MdDelete />
              </td>
            </tr>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </table>
      <Link to={'/admin-create'} className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-xl">Add product</Link>
    </>
  );
};

export default Admin;
