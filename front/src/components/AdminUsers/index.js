import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, Button, Modal} from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import './styles.scss';

const AdminUsers = ({ users, getUsers, userDelete }) => {
  const itemDelete = (userId) => {
    userDelete(userId);
  }
  const EditUserSchema = Yup.object().shape({
		userName:Yup.string()
    .min(6, 'Too Short! 6 characters minimum')
    .max(50, 'Too Long! 50 characters maximum')
    .required('Required'),
    userEmail: Yup.string().email('Invalid email').required('Required'),
    userRole: Yup.string()
    .min(5, 'Too Short! 5 characters minimum')
    .max(7, 'Too Long! 7 characters maximum')
    .required('Required'),
	  });
  return(
    <div className="adminUsers">
      {users.map(({name, role, email, _id}) => (
        <Accordion defaultActiveKey="1" key={name}>
          <Card>
            <Card.Header className="accordion__header">
            <Accordion.Toggle as={Button} eventKey="0">
                {name}
            </Accordion.Toggle>
              <button onClick={()=> itemDelete(_id)} className="accordion__button--delete"> 
                x
              </button>
            
            </Card.Header>
            <Accordion.Collapse eventKey="0">
        <Card.Body>
        <Formik
              validateOnChange
              initialValues={{
                userName: name,
                userEmail: email,
                userRole: role,
              }}
              validationSchema={EditUserSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
              // same shape as initial values
                setSubmitting(true);
                Axios.patch(`http://localhost:3002/api/users/`+_id,
                {
                  name: values.userName,
                  email: values.userEmail,
                  role: values.userRole,
                })
                  .then((response) => {
                    setTimeout(() => {
                      resetForm();
                      setSubmitting(false);
                    }, 2000);
                    getUsers();
                  })
                  .catch((error) => {
                    setSubmitting(false);
                    console.log(error.response);
                  })
                
              }}
            >
              {({ 
                errors, touched, isSubmitting, handleSubmit,
              }) => (
                <Form className="admin__form--edit" onSubmit={handleSubmit}>
                  <div>
                    <label>
                      User name:
                    </label>
                    <Field name="userName" type="userName" placeholder={name} className={touched.userName && errors.userName ? 'error field--input' : 'validate field--input'} />
                    {errors.userName && touched.userName ? <div className="error__message">{errors.userName}</div> : null}
                  </div>
                  <div>
                    <label>
                      User email:
                    </label>
                    <Field name="userEmail" type="email" placeholder={email} className={touched.userEmail && errors.userEmail ? 'error field--input' : 'validate field--input'} />
                    {errors.userEmail && touched.userEmail ? <div className="error__message">{errors.userEmail}</div> : null}
                  </div>
                  <div>
                    <label>
                      User role ("visitor" OR "admin"):
                    </label>
                    <Field name="userRole" type="userRole" placeholder={role} className={touched.userRole && errors.userRole ? 'error field--input' : 'validate field--input'} />
                    {errors.userRole && touched.userRole ? <div className="error__message">{errors.userRole}</div> : null}
                  </div>
                  <button className="login__submit" type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
              )}
            </Formik>
        </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
        ))}
    </div>
  );
};

AdminUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
		  name: PropTypes.string,
		  email: PropTypes.string,
		  _id: PropTypes.string,
    }),
  ).isRequired,
  getUsers: PropTypes.func.isRequired,
  userDelete: PropTypes.func.isRequired,
};

AdminUsers.defaultProps = {
  users: []
}
export default AdminUsers;
