import React from "react";
import "./Profile.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export default function Profile() {
  const data = JSON.parse(localStorage.getItem("Admin_Data"));
  return (
    <div className="d-flex profile">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
              <div>
                <div className="card shadow border-0">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {data.userName.charAt(0)}
                      </Avatar>
                    }
                    title=<h4>
                      {data.userName}&nbsp;({data.userType})
                    </h4>
                  />
                  <div className="card-body">
                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <PersonIcon />{" "}
                      </strong>
                      {data.firstName} {data.lastName}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <EmailIcon />{" "}
                      </strong>
                      {data.email}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <KeyIcon />{" "}
                      </strong>
                      {data.password}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <HomeWorkIcon />{" "}
                      </strong>
                      {data.compony}
                    </p>
                  </div>
                </div>
              </div>

              <footer className="d-flex mx-auto py-4">
                <small className="mx-auto my-1 text-center">
                  &copy; Sudocode Solution Pvt.Ltd, 2023. All rights reserved.
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
