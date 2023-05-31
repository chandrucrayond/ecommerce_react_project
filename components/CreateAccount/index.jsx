import React, {useEffect} from 'react';
import { AppBar, Typography, Toolbar, Grid } from "@mui/material";
import { createAccountStyle } from './style';
import { useNavigate } from 'react-router-dom';

function CreateAccount({onLogin}) {
const classes = createAccountStyle();
const navigate = useNavigate();
   function handleLoginClick(){
     onLogin();
     navigate("/products");
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
                                            />
                                            <div className="helper-text"></div>
                                            <div className="error-message"></div>
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
                                            />
                                            <div className="helper-text"></div>
                                            <div className="error-message"></div>
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
                                            />
                                            <img
                                                src="assets/visibility@2x.png"
                                                alt="visibility image"
                                                className={classes.eyeIcon}
                                            />
                                            <div className="helper-text"></div>
                                            <div className="error-message"></div>
                                        </div>
                                        <div className="mb-3 createAccount--container__password">
                                            <label
                                                htmlFor="retype-password"
                                                className={classes.label}
                                            >
                                                Retype Password
                                            </label>
                                            <input
                                                type="password"
                                                className={`${classes.input} ${classes.inputPassword} form-control createAccount--input__password py-2`}
                                                id="retype-password"
                                                name="retype-password"
                                            />
                                            <img
                                                src="assets/visibility@2x.png"
                                                alt="visibility image"
                                                className={classes.eyeIcon}
                                            />
                                            <div className="helper-text"></div>
                                            <div className="error-message"></div>
                                        </div>
                                        <div
                                            type="submit"
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
        </div >
    );
}

export default CreateAccount;
