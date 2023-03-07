import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Accordion from "react-bootstrap/Accordion";

const theme = createTheme();

export default function Tables() {
  const [userData, setUserData] = useState([]);

  const [inputData, setInputData] = React.useState({
    userType: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    compony: "",
    password: "",
  });

  useEffect(() => {
    getData();
  }, []);

  let { userType, userName, firstName, lastName, email, compony, password } =
    inputData;

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/User", inputData).then(() =>
      setInputData({
        userType: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        compony: "",
        password: "",
      })
    );
    getData();
  };

  const getData = () => {
    axios
      .get("http://localhost:3002/User")
      .then((res) => setUserData(res.data));
  };

  const rejectUser = (id) => {
    axios.delete(`http://localhost:3002/User/${id}`).then(() => getData());
  };

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
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Add User</Accordion.Header>
                  <Accordion.Body>
                    <ThemeProvider theme={theme}>
                      <Container component="main">
                        <CssBaseline />

                        <Box
                          component="form"
                          validate
                          onSubmit={handleSubmit}
                          autoComplete="off"
                          sx={{ mt: 3 }}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                  User Type
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name="userType"
                                  value={userType}
                                  label="User Type"
                                  onChange={(e) => handleChange(e)}
                                  required
                                >
                                  <MenuItem value="Internal">Internal</MenuItem>
                                  <MenuItem value="External">External</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                name="userName"
                                value={userName}
                                onChange={(e) => handleChange(e)}
                                required
                                fullWidth
                                label="User Name"
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <TextField
                                name="firstName"
                                value={firstName}
                                onChange={(e) => handleChange(e)}
                                required
                                fullWidth
                                label="First Name"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                value={lastName}
                                onChange={(e) => handleChange(e)}
                                label="Last Name"
                                name="lastName"
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                value={email}
                                onChange={(e) => handleChange(e)}
                                label="Email Address"
                                name="email"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                value={password}
                                onChange={(e) => handleChange(e)}
                                name="password"
                                label="Password"
                                type="password"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                value={compony}
                                onChange={(e) => handleChange(e)}
                                label="Compony Name"
                                name="compony"
                              />
                            </Grid>

                            <Button
                              type="submit"
                              variant="outline-success"
                              className="mt-3"
                            >
                              Add
                            </Button>
                          </Grid>
                        </Box>
                      </Container>
                    </ThemeProvider>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">User Table</h4>
                {userData ? (
                  <Table striped bordered hover className="text-center">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>User Type</th>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Compony</th>
                        <th>Password</th>
                        <th colSpan={2}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userType}</td>
                            <td>{item.userName}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.compony}</td>
                            <td>{item.password}</td>

                            <td>
                              <Button
                                variant="outline-danger"
                                onClick={(id) => rejectUser(item.id)}
                              >
                                Reject
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  "No Data"
                )}
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
}
