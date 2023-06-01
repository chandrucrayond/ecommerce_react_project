import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
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

    function handleLoginClick() {
        onLogin();
        navigate("/products"); // Uncomment this line if you are using a router
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        if (
            validateName() &&
            validateEmail() &&
            validatePassword() &&
            validateConfirmPassword()
        ) {
            setInputValues();

            setTimeout(function () {
                var successMessage = document.getElementById("successMessage");
                successMessage.classList.add("show");
                setTimeout(function () {
                    navigate("/products");
                    //   window.location.href = myForm.action;
                }, 2000);
            }, 1000);
        }
    }

    function setInputValues() {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    function validateName() {
        let isValid = true;
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
        if (password.length < 8) {
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
        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
            return false;
        }
        else {
            setConfirmPasswordError('');
            return true;
        }
    }

    return (
        <div className={classes.root}>
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
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        {nameError && <div className="error-message">{nameError}</div>}
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
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                       {emailError && <div className="error-message">{emailError}</div>}
                                    </div>
                                    <div className="mb-3 createAccount--container__password">
                                        <label htmlFor="password" className={classes.label}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className={`${classes.input} ${classes.inputPassword} form-control createAccount--input__password py-2`}
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <img
                                            src="assets/visibility@2x.png"
                                            alt="visibility image"
                                            className={classes.eyeIcon}
                                        />
                                        {passwordError && <div className="error-message">{passwordError}</div>}
                                    </div>
                                    <div className="mb-3 createAccount--container__password">
                                        <label htmlFor="retype-password" className={classes.label}>
                                            Retype Password
                                        </label>
                                        <input
                                            type="password"
                                            className={`${classes.input} ${classes.inputPassword} form-control createAccount--input__password py-2`}
                                            id="retype-password"
                                            name="retype-password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <img
                                            src="assets/visibility@2x.png"
                                            alt="visibility image"
                                            className={classes.eyeIcon}
                                        />
                                        {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
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

// import React, {useEffect} from 'react';
// import { AppBar, Typography, Toolbar, Grid } from "@mui/material";
// import { createAccountStyle } from './style';
// import { useNavigate } from 'react-router-dom';

// function CreateAccount({onLogin}) {
// const classes = createAccountStyle();
// const navigate = useNavigate();
//    function handleLoginClick(){
//      onLogin();
//      navigate("/products");
//    }
//     return (
//         <div className={classes.root}>
//             <section className={classes.createAccountSection}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} md={6}>
//                           <section className={classes.subSection1}>
//                                 <img
//                                     className={classes.teamImage}
//                                     src="assets/Group 3833.png"
//                                     alt="Google team members in animation images"
//                                 />
//                             </section>

//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                             <section>
//                                 <div className={classes.container}>
//                                     <Typography
//                                         variant="h4"
//                                         className={`${classes.headingWelcome} createAccount--heading__welcome`}
//                                     >
//                                         Welcome to Google Store!
//                                     </Typography>
//                                     <Typography
//                                         variant="h6"
//                                         className={`${classes.headingRegister} createAccount--heading__register`}
//                                     >
//                                         Register your account
//                                     </Typography>
//                                     <form id="createAccountForm">
//                                         <div className="mb-3 mt-4">
//                                             <label htmlFor="username" className={classes.label}>
//                                                 Username
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className={`${classes.input} ${classes.inputUsername} form-control createAccount--input__username py-2`}
//                                                 id="username"
//                                                 name="username"
//                                             />
//                                             <div className="helper-text"></div>
//                                             <div className="error-message"></div>
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor="email" className={classes.label}>
//                                                 Email Id
//                                             </label>
//                                             <input
//                                                 type="email"
//                                                 className={`${classes.input} ${classes.inputUsername} form-control createAccount--input__email py-2`}
//                                                 id="email"
//                                                 name="email"
//                                             />
//                                             <div className="helper-text"></div>
//                                             <div className="error-message"></div>
//                                         </div>
//                                         <div className="mb-3 createAccount--container__password">
//                                             <label htmlFor="password" className={classes.label}>
//                                                 Password
//                                             </label>
//                                             <input
//                                                 type="password"
//                                                 className={`${classes.input} ${classes.inputPassword} form-control createAccount--input__password py-2`}
//                                                 id="password"
//                                                 name="password"
//                                             />
//                                             <img
//                                                 src="assets/visibility@2x.png"
//                                                 alt="visibility image"
//                                                 className={classes.eyeIcon}
//                                             />
//                                             <div className="helper-text"></div>
//                                             <div className="error-message"></div>
//                                         </div>
//                                         <div className="mb-3 createAccount--container__password">
//                                             <label
//                                                 htmlFor="retype-password"
//                                                 className={classes.label}
//                                             >
//                                                 Retype Password
//                                             </label>
//                                             <input
//                                                 type="password"
//                                                 className={`${classes.input} ${classes.inputPassword} form-control createAccount--input__password py-2`}
//                                                 id="retype-password"
//                                                 name="retype-password"
//                                             />
//                                             <img
//                                                 src="assets/visibility@2x.png"
//                                                 alt="visibility image"
//                                                 className={classes.eyeIcon}
//                                             />
//                                             <div className="helper-text"></div>
//                                             <div className="error-message"></div>
//                                         </div>
//                                         <div
//                                             type="submit"
//                                             className={`${classes.submitButton} createAccount--button `}
//                                         >
//                                             Create Account
//                                         </div>
//                                         <button
//                                             className={`${classes.loginButton} createAccount--button loginAccount--button`}
//                                             onClick={handleLoginClick}
//                                         >
//                                             Login Account
//                                         </button>
//                                     </form>
//                                     <div id="successMessage" className={classes.successCard}>
//                                         <span className={classes.successText}>
//                                             Account created successfully!
//                                         </span>
//                                     </div>
//                                 </div>
//                             </section>

//                     </Grid>
//                 </Grid>
//             </section>
//         </div >
//     );
// }

// export default CreateAccount;
