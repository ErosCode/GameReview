import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './styles.scss';
import Axios from 'axios';

const Login = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const [loginSuccessMessage, setLoginSuccesMessage] = useState(false);

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short! 6 characters minimum')
      .max(50, 'Too Long! 50 characters maximum')
      .required('Required'),

  });

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="login">

      Sign In
          <Formik
            validateOnChange
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SigninSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
            // same shape as initial values
              setSubmitting(true);
              Axios.post('http://localhost:3002/api/login',
              {
                email: values.email,
                password: values.password,
              })
                .then((response) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                    setLoginSuccesMessage('Success !')
                    setLoginErrorMessage(false);
                  }, 2000);
                  setUserData({
                    token: response.data.token,
                    user: response.data.user,
                  });
                  localStorage.setItem("auth-token", response.data.token);
                  history.push("/");
                  
                  console.log(response.data);
                })
                .catch((error) => {
                  setSubmitting(false);
                  setLoginSuccesMessage(error.response.data);
                  setLoginSuccesMessage(false);
                  console.log(error.response);
                })
              
            }}
          >
            {({ 
              errors, touched, isSubmitting, handleSubmit,
            }) => (
              <Form className="login__form" onSubmit={handleSubmit}>
                <div className="login__error__message">
                  {loginErrorMessage}
                </div>
                <div className="login__success__message">
                  {loginSuccessMessage}
                </div>
                <label>
                  Email
                </label>
                <Field name="email" type="email" placeholder="hoopla@gmail.com" className={touched.email && errors.email ? 'error field--input' : 'validate field--input'} />
                {errors.email && touched.email ? <div className="error__message">{errors.email}</div> : null}
                <label>
                  Password
                </label>
                <Field name="password" type="password" className={touched.password && errors.password ? 'error field--input' : 'validate field--input'} />
                {errors.password && touched.password ? (
                  <div className="error__message">{errors.password}</div>
                ) : null}
                <button className="login__submit" type="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
    </div>
  );
};

export default Login;
