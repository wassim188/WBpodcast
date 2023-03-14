import React from "react";
import { Outlet } from "react-router";
import PublicNavBar from "../NavBar/PublicNavBar";
import Footer from "../Footer/Footer";
function PublicLayout() {
  return  <div className="min-w-full min-h-[694px] flex-col justify-between ">
    <PublicNavBar/>
    <Outlet/>
    <Footer/>
  </div>;
}

export default PublicLayout;
