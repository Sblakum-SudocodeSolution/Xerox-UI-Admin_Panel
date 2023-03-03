import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashbord/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Tables from "../Pages/Table/Tables";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/table" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
