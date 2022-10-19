import React, { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { GoogleUser, LoginUser, ResetPassword, SignUpUser } from '../../Redux/Action/auth.action';
import { useDispatch } from 'react-redux';

function Login(props) {

    const [userType, setUserType] = useState("Login");
    const dispatch = useDispatch();


    let Login = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let SignUp = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let ForGotPassword = {
        email: yup.string().email("please enter valid email").required("please enter email")
    }

    let schema, initiValue;

    // let schema = yup.object().shape();

    if (userType === "Login") {
        schema = yup.object().shape(Login);
        initiValue = {
            email: "",
            password: ""
        }
    } else if (userType === "SignUp") {
        schema = yup.object().shape(SignUp);
        initiValue = {
            email: "",
            password: ""
        }
    } else if (userType === "forgotPass") {
        schema = yup.object().shape(ForGotPassword);
        initiValue = {
            email: ""
        }
    }

    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: (values, {resetForm}) => {
            // alert(JSON.stringify(values, null, 2));
            if (userType === "Login") {
                handleLogin(values);
            } else if (userType === "SignUp") {
                handleSignUp(values);
            } else if (userType === "forgotPass") {
                dispatch(ResetPassword(values))
            }
            resetForm();
        },
    });

    const handleLogin = (v) => {
        // sessionStorage.setItem("user", "123");
        dispatch(LoginUser(v));
    }

    const handleSignUp = (value) => {
        dispatch(SignUpUser(value));
    }

    // const GoogleLogin = () => {
    //     dispatch(GoogleUser())
    // }

    return (
        <div className="contact_section layout_padding">
            <div className="container">
                {

                    userType === "forgotPass" ? <h1 className="touch_taital">Forgot Password</h1> :
                        userType === "Login" ?
                            <h1 className="touch_taital">Login</h1> :
                            <h1 className="touch_taital">Sign Up</h1>
                }
                <div className="contact_section_2">
                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit} className="email_text">
                                    {
                                        userType === "forgotPass" ? 
                                        <FormGroup>
                                                <Label for="exampleEmail">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder="with a placeholder"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.email ?
                                                        <p className='error'>{formik.errors.email}</p> : null
                                                }
                                            </FormGroup> : null
                                    }
                                    {
                                        (userType === "Login" || userType === "SignUp") &&
                                        <>
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder="with a placeholder"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.email ?
                                                        <p className='error'>{formik.errors.email}</p> : null
                                                }
                                            </FormGroup>
                                            <FormGroup className="form-group">
                                                <Label for="examplepassword">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="examplepassword"
                                                    name="password"
                                                    placeholder="Enter Your Password"
                                                    type="password"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.password ?
                                                        <p className='error'>{formik.errors.password}</p> : null
                                                }
                                            </FormGroup>
                                        </>
                                    }
                                    {
                                        userType === "Login" ?
                                            <div className='text-center'>
                                                <Button type='submit' color="primary" className='mr-3'>Login</Button>
                                                <p onClick={() => setUserType("forgotPass")}>Forgot Password</p>
                                                <Button type='submit' color="primary" onClick={() => setUserType("SignUp")}>Sign Up</Button>
                                            </div>
                                            :
                                            <div className='text-center'>
                                                <Button type='submit' color="primary" className='mr-3'> {userType === "forgotPass" ? "Send OTP" : "Sign Up"}</Button>
                                                <Button type='submit' color="primary" onClick={() => setUserType("Login")}>Login</Button>
                                            </div>
                                    }
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;