import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

export default function Tables() {
  return (
    <div className="d-flex">
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
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(200px, 700px))",
              }}
            >
              <div className="mt-5 w-100">
                <h4 className="font-weight-bold mb-3">Default Table</h4>
                <CDBTable responsive>
                  <CDBTableHeader>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </CDBTableBody>
                </CDBTable>
              </div>
            </div>
            <footer className="mx-auto my-3 text-center">
              <small>
                &copy; Sudocode Solution Pvt.Ltd, 2023. All rights reserved.
              </small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
