import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import WorkflowHome from "../workflow/home";

import './index.css';

const Login = () => {

    const [workFlowStatus, setWorkFlowStatus] = useState(false);

    useEffect(()=>{

    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;
    return (
        <React.Fragment>
            {!workFlowStatus &&
                <div className="modal">
                    <p className="title">Login</p>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validate={values => {
                            let errors = {};
                            if (values.email === "") {
                                errors.email = "Email is required";
                            } else if (!emailRegex.test(values.email)) {
                                errors.email = "Invalid email address format";
                            }
                            if (values.password === "") {
                                errors.password = "Password is required";
                            } else if (!passwordRegex.test(values.password)) {
                                errors.password = "Password must have 6 to 8 characters which contain at least one numeric digit and a special character";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            if(values.rememberme) {
                                localStorage.setItem("username", values.email);
                                localStorage.setItem("password", values.password);
                            }
                            setWorkFlowStatus(true);
                            setSubmitting(false);
                        }}
                    >
                        {({ touched, errors, isSubmitting }) => (
                            <Form>
                                <div className="form-group column">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={`form-control ${
                                            touched.email && errors.email ? "invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="error"
                                    />
                                </div>

                                <div className="form-group column">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`form-control ${
                                            touched.password && errors.password ? "invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="error"
                                    />
                                </div>

                                <div className="form-group">
                                    <Field
                                        type="checkbox"
                                        name="rememberme"
                                    />
                                    {"Remember Me"}
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="button"
                                        disabled={isSubmitting}
                                    >
                                        {"Login"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            }
            {workFlowStatus &&
                <WorkflowHome />
            }
        </React.Fragment>
    );

}



export default Login;