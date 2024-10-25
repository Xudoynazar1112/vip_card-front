import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"; // Ensure correct import
import userImage from "../../assets/user.jpg"; // Ensure correct import

const AdminNavbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear(); // Clear local storage
    navigate("/login"); // Navigate to the login page
  };

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="flex justify-between items-center bg-white px-5 rounded-xl">
        <li>
          <img src={logo} alt="logo" className="w-14" />
        </li>
        <li
          className="flex items-center gap-2 relative register cursor-pointer"
          onClick={toggleOpen}
        >
          <img src={userImage} alt="user" className="w-10 h-10 rounded-full" />
          <p>Admin</p>
          {isOpen && (
            <div className="absolute bg-blue-400 text-white rounded-xl mt-20 w-28 text-center transition-transform duration-200">
              <p className="p-1 cursor-pointer" onClick={Logout}>
                Log out
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
