import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignIn({ setName }) {
  const location = useLocation();
  const name = location.state;

  function decodeJWT(token) {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid token format");
    }
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    return { header, payload };
  }

  // console.log(name);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let u = {
      email: data.get("email"),
      password: data.get("password"),
    };
    axios
      .post("https://harsh0p.pythonanywhere.com/auth/login/", u, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(u);
        // console.log(res.data);
        toast("Logged in successfully");
        setName(name);
        localStorage.setItem("Token", res.data.access);
        setName(decodeJWT(res.data.access)?.payload?.name);
        localStorage.setItem("Name", name);
        navigate("/success", { state: u });
      })
      .catch((error) => {
        toast("Wrong email or password");
        console.log(error.response.data);
      });
  };

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToastContainer />
          <Avatar sx={{ m: 1, backgroundColor: "#eee8aa" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "#eee8aa" }} />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#eee8aa",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  style={{ color: "#eee8aa", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  style={{ color: "#eee8aa", textDecoration: "none" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright
          sx={{ mt: 8, mb: 4, backgroundColor: "#eee8aa", color: "black" }}
        /> */}
      </Container>
    </ThemeProvider>
  );
}
