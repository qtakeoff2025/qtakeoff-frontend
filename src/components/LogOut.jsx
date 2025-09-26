// src/components/LogOut.jsx
"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const LogOut = ({ redirectTo = "/login", className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear Redux state
    dispatch(logout());

    // Clear localStorage tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    // Redirect user
    navigate(redirectTo);
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 ${className}`}
    >
      Log Out
    </button>
  );
};

export default LogOut;
