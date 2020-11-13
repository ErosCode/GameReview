import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from '../../axios';
import './styles.scss';

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

    const ChangePasswordSchema = Yup.object().shape({
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
    <div className="profile">
        <div>{userItem.id}</div>
        <div className="profile__password">
            <div>Want to change your password?</div>
            <div>
            <Formik
            validateOnChange
            initialValues={{
              username: userItem.username,
              email: userItem.email,
              password: '',
              confirmPassword: '',
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              Axios.post('/gsgnseugns', {
                name: values.username,
                email: values.email,
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
                <label>
                  Want to change your Password?
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
