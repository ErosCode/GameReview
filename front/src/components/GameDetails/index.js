import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Reviews from '../../containers/Reviews';
import { Card } from 'react-bootstrap';
import './styles.scss';

const GameDetails = ({ game, getReviews, reviews }) =>  {
console.log('game123153: ', game);
useEffect(() => {
    
  console.log('gameIdReview', game._id);
    getReviews(game._id);
    
  }, [game._id]);
  const reviewRating = () => { 
    let reviewRates = reviews.map((review) => (
    (review.review_graphics + 
    review.review_writing + 
    review.review_story + 
    review.review_animation) / 4
    ))}
    
  
  function getPopularity() {
    var review = JSON.parse({reviews});
      return (review.review_graphics + 
        review.review_writing + 
        review.review_story + 
        review.review_animation) / 4;
  }
const reviewRate = () => {
  for(var x in reviews.reviews) {
      console.log(reviews.reviews[x].Name + ":");
      var total = 0;
      for(var i in reviews.reviews[x]) {
          var key1 = Object.keys(reviews.reviews[x].review_graphics[i]);
          var key2 = Object.keys(reviews.reviews[x].review_writing[i]);
          var key3 = Object.keys(reviews.reviews[x].review_story[i]);
          var key4 = Object.keys(reviews.reviews[x].review_animation[i]);
          var keyTotal = (key1+key2+key3+key4)/4;
          total += parseInt(reviews.reviews[x].keyTotal);
          console.log(keyTotal+ " finishing: "+reviews.reviews[x].reviews[i][keyTotal]);
      }
  }
}
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
           {reviewRate()}/10
          </div>
          <p className="game__infos--description">
            Description: {game.description}
          </p>
        </div>
      </div>
      <Reviews gameId={game._id}/>
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
