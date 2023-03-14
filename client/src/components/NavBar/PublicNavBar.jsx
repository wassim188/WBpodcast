import React from "react";
import {  NavLink } from "react-router-dom";
import './Nav.css'
function PublicNavBar() {
  return (
    <div className="max-h-[80px] px-20 py-8 bg-orange-300 text-white flex justify-between items-center NavMain">
      <h1 to="/" className="font-Shantell font-bold text-5xl">
        WbCasts
      </h1>
      <div className="font-Shantell  min-w-[20%] flex justify-around items-center text-xl">
        <button className="border-2 border-white px-4 py-2 bg-orange-300 hover:bg-orange-200 rounded-3xl font-medium drop-shadow-xl">
          <NavLink to="/login" style={{ all: "unset" }}>
            Sign In
          </NavLink>
        </button>
        <button className="border-2 border-orange-300 px-4 py-2 bg-white hover:bg-slate-100 text-orange-300 rounded-3xl font-medium drop-shadow-xl">
          <NavLink to="/sign-up" style={{ all: "unset" }}>
            Sign Up
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default PublicNavBar;
