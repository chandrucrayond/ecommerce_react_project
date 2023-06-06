import React, { useState, useEffect } from "react";
import { Typography, Grid, CircularProgress, Snackbar, Alert } from "@mui/material";
import { createAccountStyle } from "./style";
import { useNavigate } from "react-router-dom";

function CreateAccount({ onLogin }) {
    const classes = createAccountStyle();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleToggleConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        validateName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        if (
            validateName() &&
            validateEmail() &&
            validatePassword() &&
            validateConfirmPassword()
        ) {
            setInputValues();
            setLoading(true);

            setTimeout(function () {

                var successMessage = document.getElementById("successMessage");
                successMessage.classList.add("show");
                setTimeout(function () {
                    setOpenSnackBar(true);
                    setLoading(false);
                    onLogin();
                    navigate("/products");
                }, 1000);
            }, 1000);
        }
    }



    function setInputValues() {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    function validateName() {
        var isValid = true;
        if (username.trim() === "") {
            setNameError("Name is required");
            isValid = false;
            return false;
        }
        else {
            setNameError("");
            return true;
        }
    }

    function validateEmail() {
        var isValid = true;
        if (email.trim() === "") {
            setEmailError('Email is required');
            isValid = false;
            return false;
        } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
            return false;
        } else {
            setEmailError('');
            return true;
        }
    }

    function isValidEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validatePassword() {
        var isValid = true;
        console.log("validatePassword function is called");
        if (password.trim() === "") {
            setPasswordError('Password is required');
            isValid = false;
            return false;
        }
        else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid = false;
            return false;
        }
        else {
            setPasswordError('');
            return true;
        }
    }

    function validateConfirmPassword() {
        var isValid = true;
        if (confirmPassword.trim() === "") {
            setConfirmPasswordError('Retype Password is required');
            isValid = false;
            return false;
        }
        else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
            return false;
        }
        else {
            setConfirmPasswordError('');
            return true;
        }
    }

    function handleLoginClick(event) {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onLogin();
            navigate("../products");
        }, 1500);
   

  
    }

    return (
        <div className={classes.root}>
            {loading && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <CircularProgress size={24} />
                </div>
            )}
            <Snackbar open={openSnackBar} autoHideDuration={1000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                    Account Created successfully!
                </Alert>
            </Snackbar>
            <section className={classes.createAccountSection}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <section className={classes.subSection1}>
                            <img
                                className={classes.teamImage}
                                src="assets/Group 3833.png"
                                alt="Google team members in animation images"
                            />
                        </section>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <section>
                            <div className={classes.container}>
                                <Typography
                                    variant="h4"
                                    className={`${classes.headingWelcome} createAccount--heading__welcome`}
                                >
                                    Welcome to Google Store!
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={`${classes.headingRegister} createAccount--heading__register`}
                                >
                                    Register your account
                                </Typography>
                                <form id="createAccountForm">
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="username" className={classes.label}>
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className={`${classes.input} ${classes.inputUsername} form-control createAccount--input__username py-2`}
                                            id="username"
                                            name="username"
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                                validateName();
                                            }}
                                        />
                                        <div className={classes.errorMessage}>{nameError}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className={classes.label}>
                                            Email Id
                                        </label>
                                        <input
                                            type="email"
                                            className={`${classes.input} ${classes.inputUsername} form-control createAccount--input__email py-2`}
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateEmail();
                                            }}
                                        />
                                       <div className={classes.errorMessage}>{emailError}</div>
                                    </div>
                                    <div className="mb-3 createAccount--container__password">
                                        <label htmlFor="password" className={classes.label}>
                                            Password
                                        </label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className={`
                                            ${classes.input} 
                                            ${classes.inputPassword} 
                                            ${
                                                showPassword ? classes.inputPasswordSmallSzie : ''
                                              }
                                            `}
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                validatePassword();
                                            }}
                                        />
                                        <img
                                            src="assets/visibility@2x.png"
                                            alt="visibility image"
                                            className={classes.eyeIcon}
                                            onClick={handleTogglePassword}
                                        />
                                        <div className={`${classes.errorMessage} ${classes.passwordError}`}>{passwordError}</div>
                                    </div>
                                    <div className="mb-3 createAccount--container__password">
                                        <label htmlFor="retype-password" className={classes.label}>
                                            Retype Password
                                        </label>
                                        <input
                                             type={showConfirmPassword ? 'text' : 'password'}
                                             className={`
                                             ${classes.input} 
                                             ${classes.inputPassword} 
                                             ${
                                                 showConfirmPassword ? classes.inputPasswordSmallSzie : ''
                                               }
                                             `}
                                             id="retype-password"
                                            name="retype-password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <img
                                            src="assets/visibility@2x.png"
                                            alt="visibility image"
                                            className={classes.eyeIcon}
                                            onClick={handleToggleConfirmPassword}
                                        />
                                       <div className={`${classes.errorMessage} ${classes.passwordError}`}>{confirmPasswordError}</div>
                                    </div>
                                    <div
                                        // type="submit"
                                        onClick={handleFormSubmit}
                                        className={`${classes.submitButton} createAccount--button `}
                                    >
                                        Create Account
                                    </div>
                                    <button
                                        className={`${classes.loginButton} createAccount--button loginAccount--button`}
                                        onClick={handleLoginClick}
                                    >
                                        {/* {loading ? 'Logging in...' : ' Login Account'} */}
                                        Login Account
                                    </button>
                                </form>
                                <div id="successMessage" className={classes.successCard}>
                                    <span className={classes.successText}>
                                        Account created successfully!
                                    </span>
                                </div>
                            </div>
                        </section>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}

export default CreateAccount;
