import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { getSlugFromTitle } from '../../selectors';

import './styles.scss';

const Games = ({ games }) => {
  return (
    <div className="games">
      {games.map(({ name, _id, imgURL }) => (
      <Card key={_id} className="game__card" style={{ width: '18rem', height: '22rem' }}>
        <Link
          to={`/games/${getSlugFromTitle(name)}`}
        >
          <Card.Img variant="top" src={imgURL} style={{ width: '17.9rem', height: '22rem' }} className="game__card__img"/>
        </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link
            to={`/games/${getSlugFromTitle(name)}`}
          >
          <Button variant="primary">
            Show Reviews
          </Button>
          </Link>
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
      imgURL: PropTypes.string,
    }),
  ).isRequired,
};

export default Games;
