import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const theme = createTheme();

export default function Signup() {
  let navigate = useNavigate();

  const [inputData, setInputData] = React.useState({
    userType: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    compony: "",
    password: "",
  });

  let { userType, userName, firstName, lastName, email, compony, password } =
    inputData;

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Admin_Data", JSON.stringify(inputData));
    console.log("Admin_Data : ", inputData);

    axios.post("http://localhost:3002/User", inputData);

    setInputData({
      userType: "",
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      compony: "",
      password: "",
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
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

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={email}
                    onChange={(e) => handleChange(e)}
                    label="Email Address"
                    name="email"
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
                <Grid item xs={12}>
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
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    onClick={() => navigate("/signin")}
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
