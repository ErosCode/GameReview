import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../UserContext.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { Card } from 'react-bootstrap';
import './styles.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const GameDetails = ({ game, getReviews, reviews }) =>  {
  const [ isLoading, setIsloading ] = useState(false)
  useEffect(() => {
      setIsloading(true);
      getReviews(game._id);
      setIsloading(false)
    }, [game._id]);
    
    const truncateString = (str, num) => {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, 10)
    };
    const scores = reviews.map((review)=>review.review_rate);
    const average = scores.reduce((totalRates, score) => totalRates + score, 0);
    const averageTotal = parseFloat((average / reviews.length).toFixed(2));
    const reviewsEndRef = useRef(null);
    const scrollToBottom = () => {
      reviewsEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
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
    <div className="game__details">
      <div className="game__infos">
        <div className="game__infos--img">
          <Card style={{ width: '18rem', height: '22rem' }}>
            <Card.Img src={game.imgURL} style={{ width: '17.9rem', height: '22rem' }} />
          </Card>
        </div>
        <div className="game__infos--details">
          <h3 className="game__infos--title">
            {game.name}
          </h3>
          <p className="game__infos--rate__title">
            Average reviewers rate:
          </p>
          <div className="game__infos--rate">
          {averageTotal}/10
          </div>
          <p className="game__infos--description">
            Description: {game.description}
          </p>
        </div>
      </div>
      <div className="reviews__post">
      {reviews.length === 0 && (
        <div>
          THERE IS NO REVIEWS FOR THIS GAME YET
        </div>
      )}
      {reviews.map(( review ) => (
      <div key={review._id} className="post">
      <div className="post__top">
          <div className="post__top__left">
              <div className="post__top__left__info">
                  <Avatar src="" className="post__avatar" />
                  <h3>{review.user.name}</h3>
              </div>
              <p>{truncateString(review.date)}</p>
          </div>
        <div className="post__top__right">
          <div className="post__option">
          <p>Rating : {review.review_rate}</p>
          </div>
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like : 5555</p>
          </div>
        </div>
        </div>
        <div className="post__bottom">
          <div className="post__rates">
            <div className="post__rate">
              <span>Graphics</span>
                {review.review_graphics}/10
            </div>
            <div className="post__rate">
              <span>Story</span>
              
                {review.review_story}/10
            </div>
            <div className="post__rate">
              <span>Writing</span>
              
                {review.review_writing}/10
            </div>
            <div className="post__rate">
              <span>Animation</span>
              
                {review.review_animation}/10
            </div>
          </div>
          <div className="post__text">
          {review.review_text}
          </div>
        </div>
        <div ref={reviewsEndRef} />
      </div>
      
    ))}
    </div>
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
              Axios.post('http://localhost:3002/api/reviews',
              {
                user: userData.userData.user.id,
                game: game._id,
                review_text: values.reviewPostText,
                review_graphics: values.graphicsRate,
                review_story: values.storyRate,
                review_animation: values.writingRate,
                review_writing: values.animationRate,
                review_rate: (values.graphicsRate+values.storyRate+values.writingRate+values.animationRate) /4,
              })
                .then((response) => {
                  resetForm();
                  setIsloading(true)
                  setSubmitting(false);
                  console.log(response)
                  getReviews(game._id);
                  setIsloading(false);
                  setTimeout(()=> (
                    scrollToBottom()
                  ), 2000);
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
    </div>
  );
};

GameDetails.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    note: PropTypes.number,
    imgURL: PropTypes.string,
  }),
  getReviews: PropTypes.func,
  reviews: PropTypes.array,
};

GameDetails.defaultProps = {
  game: {},
  reviews: [],
};

export default GameDetails;
