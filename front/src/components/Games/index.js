import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { getSlugFromTitle } from '../../selectors';

import './styles.scss';
import gameImg from '../../styles/bge.jpg';

const Games = ({ games }) => {
  return (
    <div className="games">
      {games.map(({ name, _id }) => (
      <Card key={_id} className="game__card" style={{ width: '18rem' }}>
        <Link
          to={`/games/${getSlugFromTitle(name)}`}
          
        >
          <Card.Img variant="top" src={gameImg} />
        </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Show Reviews</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
};

export default Games;
