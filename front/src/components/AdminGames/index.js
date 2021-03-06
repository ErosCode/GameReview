import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Accordion, Card, Button, Modal} from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from '../../axios';
import './styles.scss';

const AdminGames = ({ games, userRole, deleteGame, getGames, gamesTag }) => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const EditSchema = Yup.object().shape({
		gameName: Yup.string().min(2, 'Name is too short').max(255, 'Name is too long').required('Required'),
		gameDescription: Yup.string()
		  .min(6, 'Too Short! 6 characters minimum')
		  .required('Required'),
		gameImgURL: Yup.string().required(),
	  });
	  const addSchema = Yup.object().shape({
		gameName: Yup.string().min(2, 'Name is too short').max(255, 'Name is too long').required('Required'),
		gameDescription: Yup.string()
		  .min(6, 'Too Short! 6 characters minimum')
		  .required('Required'),
		gameImgURL: Yup.string().required(),
	  });

	const itemDelete = (itemId) => {
		Axios.delete(`/games/` + itemId)
                .then((response) => {
					console.log(response);
				  getGames();
                })
                .catch((error) => {
                  console.log(error.response);
                })
              
		
	};

	if (userRole === 'admin') {
    return (
		<div className="adminGames">
			<Button variant="primary shadow-none" onClick={handleShow} style={{border: 'none'}} className="header__link adminGames--add">
				+ Add a game
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
				<Modal.Title>Add your game</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						validateOnChange
						initialValues={{
							gameName: '',
							gameDescription: '',
							gameImgURL: '',
						}}
						validationSchema={addSchema}
						onSubmit={(values, { setSubmitting, resetForm }) => {
						// same shape as initial values
						setSubmitting(true);
						Axios.post('/games',
						{
							name: values.gameName,
							description: values.gameDescription,
							imgURL: values.gameImgURL,
						})
							.then((response) => {
							setTimeout(() => {
								resetForm();
								setSubmitting(false);
							}, 2000);
							getGames();
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
				<Form className="adminGames__form--edit" onSubmit={handleSubmit}>
					<div>
					<label>
					Game name:
					</label>
					<Field name="gameName" type="gameName" className={touched.gameName && errors.gameName ? 'error field--input' : 'validate field--input'} />
					{errors.gameName && touched.gameName ? <div className="error__message">{errors.gameName}</div> : null}
					</div>
					<div>
					<label>
					Game description:
					</label>
					<Field name="gameDescription" type="textarea"  className={touched.gameDescription && errors.gameDescription ? 'error field--input' : 'validate field--input'} />
					{errors.gameDescription && touched.gameDescription ? (
					<div className="error__message">{errors.gameDescription}</div>
					) : null}
					</div>
					<div>
					<label>
					Game image cover url:
					</label>
					<Field name="gameImgURL" type="gameImgURL"  className={touched.gameImgURL && errors.gameImgURL ? 'error field--input' : 'validate field--input'} />
					{errors.gameImgURL && touched.gameImgURL ? (
					<div className="error__message">{errors.gameImgURL}</div>
					) : null}
					</div>
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
			{games.map(({ name, _id, description, imgURL, tags }) =>(
			<Accordion defaultActiveKey="1" key={name}>
				<Card className="accordion__margin">
				  <Card.Header className="accordion__header">
					<Accordion.Toggle as={Button} eventKey="0" className="header__link" style={{border: 'none'}}>
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
				gameName: name,
				gameDescription: description,
				gameImgURL: imgURL,
				gameTags: tags,
            }}
            validationSchema={EditSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
            // same shape as initial values
			  setSubmitting(true);
              Axios.put(`/games/`+_id,
              {
                name: values.gameName,
				description: values.gameDescription,
				imgURL: values.gameImgURL,
				tags: values.gameTags,
              })
                .then((response) => {
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
				  }, 2000);
				  getGames();
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
                  Game name:
                </label>
                <Field name="gameName" type="gameName" placeholder={name} className={touched.gameName && errors.gameName ? 'error field--input' : 'validate field--input'} />
                {errors.gameName && touched.gameName ? <div className="error__message">{errors.gameName}</div> : null}
				</div>
				<div>
                <label>
				Game description:
                </label>
                <Field name="gameDescription" type="textarea"  placeholder={description} className={touched.gameDescription && errors.gameDescription ? 'error field--input' : 'validate field--input'} />
                {errors.gameDescription && touched.gameDescription ? (
                  <div className="error__message">{errors.gameDescription}</div>
                ) : null}
				</div>
				<label>
					Categories available:
				</label>
				<div className="tags-input">
				<ul id="tags">
					{gamesTag.map((tag) => (
						<li key={tag.name} className="tag">
							<span className='tag-title'>{tag.name}</span>
						</li>
					))}
				</ul>
				</div>
				<div>
				<label>
					This game tags(Only one by game):
                </label>
				<Field name="gameTags" type="gameTags"  placeholder={tags} className={touched.gameTags && errors.gameTags ? 'error field--input' : 'validate field--input'} />
                
				</div>
				<div>
				 <label>
					Game image cover url:
                </label>
				 <Field name="gameImgURL" type="gameImgURL"  placeholder={imgURL} className={touched.gameImgURL && errors.gameImgURL ? 'error field--input' : 'validate field--input'} />
                {errors.gameImgURL && touched.gameImgURL ? (
                  <div className="error__message">{errors.gameImgURL}</div>
                ) : null}
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
} else {
	return <Redirect to="/"/>
}
};

AdminGames.propTypes = {
	userRole: PropTypes.string.isRequired,
	games: PropTypes.arrayOf(
		PropTypes.shape({
		  name: PropTypes.string,
		  description: PropTypes.string,
		  _id: PropTypes.string,
		  imgURL : PropTypes.string,
		  tags: PropTypes.array,
		}),
	  ).isRequired,
	getGames: PropTypes.func.isRequired,
}
export default AdminGames;
