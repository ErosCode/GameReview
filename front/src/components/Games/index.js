import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { getSlugFromTitle } from '../../selectors';

import './styles.scss';

const Games = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(games.length / gamesPerPage); i++) {
      pageNumbers.push(i);
    }

  return (
    <div className="games">
      <div className="games__list">
      {currentGames.map(({ name, _id, imgURL }) => (
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
      <div className="games__pagination">
        <nav>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='!#' className='page-link'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
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
