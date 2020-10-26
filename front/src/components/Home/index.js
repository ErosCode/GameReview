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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {lastGames.map((game) => {
        <Carousel.Item key={game.name}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt={game.name}
          />
          <Carousel.Caption>
            <h3>{game.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      })}
    </Carousel>

    </div>
  );
}

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
