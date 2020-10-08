import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { getSlugFromTitle } from '../../selectors';

import './styles.scss';
import gameImg from '../../styles/bge.jpg';

const Games = ({ getGames, games }) => {

  useEffect(() => {
      getGames();
  }, []);

  return (
    <div className="games">
      {games.map(({ name }) => (
      <Card className="game__card" style={{ width: '18rem' }}>
        <Link
          to={`/games/${getSlugFromTitle(name)}`}
          key={name}
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
  getGames: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Games;
