import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../../containers/Reviews';
import { Card } from 'react-bootstrap';
import './styles.scss';

const GameDetails = ({ game }) =>  {
console.log('game123153: ', game);
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
            {game.note}/10
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
};

GameDetails.defaultProps = {
  game: {},
};

export default GameDetails;
