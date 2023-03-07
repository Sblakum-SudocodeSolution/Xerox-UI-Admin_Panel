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

const theme = createTheme();

export default function Signin() {
  let navigate = useNavigate();

  const [inputVal, setInputVal] = React.useState({
    userName: "",
    password: "",
  });

  let { userName, password } = inputVal;

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Admin_login = JSON.parse(localStorage.getItem("Admin_Data"));

    if (
      inputVal.userName === Admin_login.userName &&
      inputVal.password === Admin_login.password
    ) {
      localStorage.setItem("Admin_loggedin", true);
      navigate("/");
    } else {
      alert("Wrong userName Or Password");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              validate
              sx={{ mt: 1 }}
              autoComplete="off"
            >
              <TextField
                margin="normal"
                // required
                fullWidth
                label="User Name"
                value={userName}
                onChange={(e) => handleChange(e)}
                name="userName"
              />
              <TextField
                margin="normal"
                // required
                fullWidth
                value={password}
                onChange={(e) => handleChange(e)}
                name="password"
                label="Password"
                type="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    onClick={() => navigate("/signup")}
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  >
                    {"Don't have an account? Sign Up"}
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
