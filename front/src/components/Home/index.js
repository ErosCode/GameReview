import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Carousel } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getSlugFromTitle } from '../../selectors';

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
          <Link
          to={`/games/${getSlugFromTitle(name)}`}
        >
          <img
            className="home__carousel__item"
            src={imgURL}
            alt={name}
          />
          </Link>
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
                  <p className="username__review">{review.user.name}</p>
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
