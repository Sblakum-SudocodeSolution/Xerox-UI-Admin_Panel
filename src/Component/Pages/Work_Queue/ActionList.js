import React from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

export default function ActionList() {
  return (
    <>
      <div className="dashboard d-flex">
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
            <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
              <div className="d-flex card-section">
                <div className="cards-container">
                  <div className="card-bg w-100 border d-flex flex-column">
                    <div className="p-4 d-flex flex-column h-100">
                      <h1>Application_List</h1>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="d-flex align-items-center">
                  <span className="ml-4 lead mb-0 font-weight-bold">
                    Sudocode
                  </span>
                  <span
                    className="footer-rem"
                    style={{
                      fontSize: "3em",
                      margin: "-2rem 0px -1.5rem 1rem",
                      color: "#C4C4C4",
                    }}
                  />
                  <small className="ml-5 mt-1">
                    &copy; Sudocode Solution Pvt.Ltd, 2023. All rights reserved.
                  </small>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
