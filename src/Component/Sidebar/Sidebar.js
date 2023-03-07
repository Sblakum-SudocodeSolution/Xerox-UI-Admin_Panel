import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Button from "react-bootstrap/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

export default function Sidebar() {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("Admin_Data"));

  let loggedin = JSON.parse(localStorage.getItem("Admin_loggedin"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/signin");
  };

  return (
    <>
      <div
        className={`app`}
        style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <AdminPanelSettingsIcon />
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              &nbsp;Admin
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink to="/">
                <CDBSidebarMenuItem icon="columns">
                  dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              {user.userType === "Internal" ? (
                <>
                  <NavLink to="/table">
                    <CDBSidebarMenuItem icon="table">
                      Manage Users
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/work">
                    <CDBSidebarMenuItem icon={"folder"}>
                      Work queue
                    </CDBSidebarMenuItem>
                  </NavLink>
                </>
              ) : (
                <NavLink></NavLink>
              )}
              <NavLink to="/application">
                <CDBSidebarMenuItem icon="file">
                  Applications
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/profile">
                <CDBSidebarMenuItem icon="user">profile</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
            <CDBSidebarMenu></CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div className="sidebar-btn-wrapper">
              <Button variant="outline-secondary" onClick={handleLogout}>
                <LogoutIcon />
                &nbsp;Logout
              </Button>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
}
