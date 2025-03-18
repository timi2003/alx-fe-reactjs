"use client"
import React from "react";
import pic1 from "../assets/pic1.jpg";

function UserProfile() {
    return (
      <div className="user-profile
      bg-gray-100 md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto my-20 
      rounded-lg shadow-lg hover:shadow-xl">

        <img src={pic1} alt="User"
        className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto transition-transform duration-300 ease-in-out
        hover:scale-110 text-blue-900" />

        <h1 className="md:text-xl sm:text-lg text-blue-800 my-4 hover:text-blue-500">John Doe</h1>

        <p className="text-gray-600 sm:text-sm md:text-base hover:text-blue-500">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;