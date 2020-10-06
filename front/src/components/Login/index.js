import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal } from 'react-bootstrap';

import './styles.scss';
import Axios from 'axios';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const [loginSuccessMessage, setLoginSuccesMessage] = useState(false);

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short! 6 characters minimum')
      .max(50, 'Too Long! 50 characters maximum')
      .required('Required'),

  });

  return (
    <div className="login">
      <button type="button" className="header__button" onClick={handleShow}>
        Sign In
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  }, 500);
                  localStorage.setItem('auth-token', response.data.token);
                  setLoginSuccesMessage('Success !')
                  setLoginErrorMessage(false);
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
