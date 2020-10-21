import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Reviews from '../../components/Reviews';
import { Card } from 'react-bootstrap';
import './styles.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const GameDetails = ({ game, getReviews, reviews }) =>  {
  useEffect(() => {
      getReviews(game._id);
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
    

  return (
    <div className="game__details">
      <div className="game__infos">
        <div className="game__infos--img">
          <Card style={{ width: '18rem' }}>
            <Card.Img src={game.imgURL} style={{ width: '17.9rem', height: '20rem' }} />
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
      </div>
    ))}
    </div>
      <Reviews gameId={game._id} />
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
