import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Reviews from '../Reviews';
import { Card } from 'react-bootstrap';
import './styles.scss';
import gameImg from '../../styles/bge.jpg';

const GameDetails = ({ game }) =>  {
console.log('game123153: ', game);
  return (
    <div className="game__details">
      <div className="game__infos">
        <div className="game__infos--img">
          <Card style={{ width: '18rem' }}>
            <Card.Img src={gameImg} />
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
            {game.note}/10
          </div>
          <p className="game__infos--description">
            Description: {game.description}
          </p>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

GameDetails.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    note: PropTypes.number,
  }),
};

GameDetails.defaultProps = {
  game: {},
};

export default GameDetails;
