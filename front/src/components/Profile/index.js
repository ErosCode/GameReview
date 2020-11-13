import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from '../../axios';
import './styles.scss';
import { Accordion, Card, Button } from 'react-bootstrap';

const Profile = ({ userItem, getUserItem }) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await Axios.post('/user/tokenIsValid', null,
      {
        headers: { 'x-auth-token': token }
      });
      if (tokenRes.data) {
        const userRes = await Axios.get('/user/',
        {
          headers: { 'x-auth-token': token },
        });
        console.log('token res',tokenRes.data);
        getUserItem(userRes.data);
      }
    };
    checkLoggedIn();
    
  }, []);

  const [ isLoading, setIsloading ] = useState(false);

    const ChangeProfileSchema = Yup.object().shape({
        username: Yup.string()
          .min(6, 'Too Short! 6 characters minimum')
          .max(50, 'Too Long! 50 characters maximum')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const ChangePasswordSchema = Yup.object().shape({
      password: Yup.string()
        .min(6, 'Too Short! 6 characters minimum')
        .max(50, 'Too Long! 50 characters maximum')
        .matches(/[a-z]/, 'at least one lowercase char')
        .matches(/[A-Z]/, 'at least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

return (
    <div className="profile">
      <div>Here you can change your personal infos</div>
        <div className="profile__edit">
            <Formik
            validateOnChange
            initialValues={{
              username: userItem.username,
              email: userItem.email,
            }}
            validationSchema={ChangeProfileSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              Axios.patch(`/users/`+ userItem.id, {
                name: values.username,
                email: values.email,
              })
                .then((response) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                  }, 500);
                  console.log(response);
                  const checkLoggedIn = async () => {
                    let token = localStorage.getItem('auth-token');
                    if (token === null) {
                      localStorage.setItem('auth-token', '');
                      token = '';
                    }
                    const tokenRes = await Axios.post('/user/tokenIsValid', null,
                    {
                      headers: { 'x-auth-token': token }
                    });
                    if (tokenRes.data) {
                      const userRes = await Axios.get('/user/',
                      {
                        headers: { 'x-auth-token': token },
                      });
                      console.log('token res',tokenRes.data);
                      getUserItem(userRes.data);
                    }
                  };
                  checkLoggedIn();
                })
                .catch((error) => {
                  setSubmitting(false);
                  console.log(error.response);
                });
            }}
          >
            {({
              errors, touched, isSubmitting, handleSubmit,
            }) => (
              <Form className="register__form" onSubmit={handleSubmit}>
                <label>
                  Want to change your Username?
                </label>
                <Field name="username" className={touched.username && errors.username ? 'error field--input' : 'validate field--input'} />
                {errors.username && touched.username ? (
                  <div className="error__message">{errors.username}</div>
                ) : null}
                <label>
                  Want to change your Email?
                </label>
                <Field name="email" type="email" className={touched.email && errors.email ? 'error field--input' : 'validate field--input'} />
                {errors.email && touched.email ? <div className="error__message">{errors.email}</div> : null}
                <button className="register__submit profile__edit__submit" type="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
          <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header className="accordion__header profile__accordion__header">
            <Accordion.Toggle as={Button} eventKey="0">
                <div>
                  Want to change your Password?
                </div>
                <div>Click on the banner!</div>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Formik
            validateOnChange
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              Axios.patch(`/users/`+ userItem.id, {
                password: values.password,
              })
                .then((response) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                  }, 500);
                  console.log(response);
                })
                .catch((error) => {
                  setSubmitting(false);
                  console.log(error.response);
                });
            }}
          >
            {({
              errors, touched, isSubmitting, handleSubmit,
            }) => (
              <Form className="register__form" onSubmit={handleSubmit}>
                <Field name="password" type="password" className={touched.password && errors.password ? 'error field--input' : 'validate field--input'} />
                {errors.password && touched.password ? (
                  <div className="error__message">{errors.password}</div>
                ) : null}
                <label>
                  Confirm your new Password
                </label>
                <Field name="confirmPassword" type="password" className={touched.confirmPassword && errors.confirmPassword ? 'error field--input' : 'validate field--input'} />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error__message">{errors.confirmPassword}</div>
                ) : null}
                <button className="register__submit profile__edit__submit" type="submit" disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>
          </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
        </div>
    </div>
);
};

Profile.propTypes = {
  getUserItem: PropTypes.func.isRequired,
}
Profile.defaultProps = {
  userItem: {},
}

export default Profile;
