import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Carousel } from 'react-bootstrap';

const Home = ({ getLastGames, lastGames }) => {
  useEffect(() => {
      getLastGames()
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
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
