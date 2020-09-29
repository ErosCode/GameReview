import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal } from 'react-bootstrap';
import './styles.scss';

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      .oneOf([Yup.ref('password'), null], 'Passwords must match')

  });



  return (
    <div className="register">
      <button type="button" className="header__button" onClick={handleShow}>
        Sign Up
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validateOnChange
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
            // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="register__form">
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
                <button className="register__submit" type="submit">Submit</button>
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

export default Register;
