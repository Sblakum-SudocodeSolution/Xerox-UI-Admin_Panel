import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";

export default function Navbar() {
  return (
    <>
      <Header style={{ background: "#333", color: "#fff" }}>
        <CDBNavbar dark expand="md" scrolling className="justify-content-start">
          <CDBInput
            type="search"
            size="md"
            placeholder="Search..."
            className="mb-n4 mt-n3 input-nav"
          />
          <div className="icon" >
            <i className="fas fa-user" />
          </div>
        </CDBNavbar>
      </Header>
    </>
  );
}
