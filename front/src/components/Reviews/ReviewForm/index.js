import React, { useState } from 'react';
import Axios from '../../axios';
import UserContext from '../../../UserContext.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

const ReviewForm = ({ gameId, reviews }) => {
  const userData = React.useContext(UserContext);
  const ReviewSchema = Yup.object().shape({
    reviewPostText: Yup.string()
      .min(20, 'Too Short! 20 characters minimum')
      .max(3200, 'Too Long! 3200 characters maximum')
      .required('Required'),
      graphicsRate: Yup.number()
      .min(0)
      .max(10)
      .required('Required'),
      storyRate: Yup.number()
      .min(0)
      .max(10)
      .required('Required'),
      writingRate: Yup.number()
      .min(0)
      .max(10)
      .required('Required'),
      animationRate: Yup.number()
      .min(0)
      .max(10)
      .required('Required'),
  });

  return (
    <div className="reviewForm">
      <Formik
            validationSchema={ReviewSchema}
            validateOnChange
            initialValues={{
              reviewPostText: '',
              graphicsRate: '',
              storyRate: '',
              writingRate: '',
              animationRate: '',
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              Axios.post('/reviews',
              {
                user: userData.userData.user.id,
                game: gameId,
                review_text: values.reviewPostText,
                review_graphics: values.graphicsRate,
                review_story: values.storyRate,
                review_animation: values.writingRate,
                review_writing: values.animationRate,
                review_rate: (values.graphicsRate+values.storyRate+values.writingRate+values.animationRate) /4,
              })
                .then((response) => {
                  resetForm();
                  setSubmitting(false);
                  console.log(response)
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
        <Form onSubmit={handleSubmit}>
            <label>
                Give your opinion about the game
            </label>
            <Field as="textarea" type="textarea" name="reviewPostText" size="4" minLength="20" maxLength="3200" className="reviewForm__text"/>
            {errors.reviewPostText && touched.reviewPostText ? <div className="error__message">{errors.reviewPostText}</div> : null}
            <div className="reviewForm__rates">
            <div className="reviewForm__rate">
              <label >
                  Rate the graphics
              </label>
              <Field type="number" name="graphicsRate" max="10" min="0"/>
              {errors.graphicsRate && touched.graphicsRate ? <div className="error__message">{errors.graphicsRate}</div> : null}
            </div>
            <div className="reviewForm__rate">
              <label>
                  Rate the story
              </label>
              <Field type="number" name="storyRate"max="10" min="0" />
              {errors.storyRate && touched.storyRate ? <div className="error__message">{errors.storyRate}</div> : null}
            </div>
            <div className="reviewForm__rate">
              <label>
                  Rate the writing
              </label>
              <Field type="number" name="writingRate"max="10" min="0" />
              {errors.writingRate && touched.writingRate ? <div className="error__message">{errors.writingRate}</div> : null}
            </div>
            <div className="reviewForm__rate">
              <label>
                  Rate the animation
              </label>
              <Field type="number" name="animationRate" max="10" min="0" />
              {errors.animationRate && touched.animationRate ? <div className="error__message">{errors.animationRate}</div> : null}
            </div>
            </div>
            <button type="submit" className="reviewForm__submit" disabled={isSubmitting}>Send your review</button>
        </Form>
        )}
        </Formik>
    </div>
  );
};

export default ReviewForm;
