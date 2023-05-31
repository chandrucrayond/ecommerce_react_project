import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Outlet, redirect, Link, useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ForkLeft } from "@mui/icons-material";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToProductList, setRedirectToProductList] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        console.log(token);
        console.log("Authenticated in login page")
        const decodedToken = jwt_decode(token);
        localStorage.setItem("firstName", decodedToken.firstName);
        localStorage.setItem("lastName", decodedToken.lastName);
        console.log("firstName after decode is "+localStorage.getItem("firstName"));
        console.log("lastName after decode is "+localStorage.getItem("lastName"));
        if (typeof onLogin === "function") {
          onLogin(); // set login state to true in the parent component
        }
        setRedirectToProductList(true);
       });
       
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    if (redirectToProductList) {
      console.log("Navigating to product page") 
      navigate("/product");
    }
  }, [redirectToProductList, navigate]);
  
  const theme = createTheme();

  return (
    <Container component="main" maxWidth="xs">
    <div style={{  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
     }}>
    <Typography component="h1" variant="h5">
          Sign in
    </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", 
      flexDirection: "column", alignItems: "center", 
       marginTop: theme.spacing(1), }}>
        <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value = {username}
            autoFocus
            onChange={handleUsernameChange} 
            style={{ marginBottom: "1rem", width: "18rem" }} 
        />
        <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange} 
            style={{ marginBottom: "1rem", width: "18rem" }} 
        />
        <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx = {{margin: "theme.spacing(3, 0, 10)",}}
        >
              Sign In
        </Button>
      </form>
    </div>
    </Container>
  );
}

export default LoginPage;


