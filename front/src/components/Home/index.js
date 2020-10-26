import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Carousel } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

const Home = ({ getLastGames,
  lastGames,
  getLastReviews,
  lastReviews,
}) => {
  useEffect(() => {
      getLastGames()
      getLastReviews()
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
      return str.slice(0, 10)
  };

  return (
    <div className="home">
      <Carousel className="home__carousel" activeIndex={index} onSelect={handleSelect}>
        {lastGames.map(({ name, _id, imgURL }) => (
        <Carousel.Item key={_id}>
          <img
            className="home__carousel__item"
            src={imgURL}
            alt={name}
          />
        </Carousel.Item>
        ))}
      </Carousel>
      <div>
        {lastReviews.map((review) => (
      <div key={review._id} className="post">
      <div className="post__top">
          <div className="post__top__left">
              <div className="post__top__left__info">
                  <Avatar src="" className="post__avatar" />
                  {review.user.name}
              </div>
              <p>{truncateString(review.date)}</p>
          </div>
        <div className="post__top__right">
         
        </div>
        </div>
        <div className="post__bottom">
          <div className="post__text">
          {review.review_text}
          </div>
        </div>
      </div>
        ))}
        </div>
    </div>
  );
};

Home.propTypes = {
  getLastGames: PropTypes.func.isRequired,
  lastGames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string,
      imgURL: PropTypes.string,
    }),
  ).isRequired,
}
export default Home;
