import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import './index.css';

class Login extends React.Component {
    render() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return (
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
                        } else if (values.password.length < 3) {
                            errors.password = "Password must be 3 characters at minimum";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
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
        );
    }
}



export default Login;