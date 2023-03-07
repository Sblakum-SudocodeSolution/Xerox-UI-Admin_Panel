import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashbord/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Tables from "../Pages/Table/Tables";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Application from "../Pages/Application/Application";
import ActionList from "../Pages/Work_Queue/ActionList";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<ActionList />} />
          <Route path="/application" element={<Application />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
