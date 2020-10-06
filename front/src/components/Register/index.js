import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

const Register = () => {

  const [registerErrorMessage, setRegisterErrorMessage] = useState(false);
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState(false);

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Too Short! 6 characters minimum')
      .max(50, 'Too Long! 50 characters maximum')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short! 6 characters minimum')
      .max(50, 'Too Long! 50 characters maximum')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  });

  return (
    <div className="register">Sign Up
          <Formik
            validateOnChange
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // same shape as initial values
              setSubmitting(true);

              axios.post('http://localhost:3002/api/register', {
                name: values.username,
                email: values.email,
                password: values.password,
              })
                .then((response) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                  }, 500);
                  setRegisterSuccessMessage('Your account has been created!');
                  setRegisterErrorMessage(false);
                  console.log(response);
                })
                .catch((error) => {
                  setSubmitting(false);
                  setRegisterErrorMessage(error.response.data);
                  setRegisterSuccessMessage(false);
                  console.log(error.response);
                });
            }}
          >
            {({
              errors, touched, isSubmitting, handleSubmit,
            }) => (
              <Form className="register__form" onSubmit={handleSubmit}>
                <div className="register__error__message">
                  {registerErrorMessage}
                </div>
                <div className="register__success__message">
                  {registerSuccessMessage}
                </div>
                <label>
                  Username
                </label>
                <Field name="username" className={touched.username && errors.username ? 'error field--input' : 'validate field--input'} />
                {errors.username && touched.username ? (
                  <div className="error__message">{errors.username}</div>
                ) : null}
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
                <label>
                  Confirm your Password
                </label>
                <Field name="confirmPassword" type="password" className={touched.confirmPassword && errors.confirmPassword ? 'error field--input' : 'validate field--input'} />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error__message">{errors.confirmPassword}</div>
                ) : null}
                <button className="register__submit" type="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
    </div>
  );
};

export default Register;
