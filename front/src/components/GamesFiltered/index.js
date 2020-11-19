import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { getSlugFromTitle } from '../../selectors';

import './styles.scss';

const GamesFiltered = ({games, params}) =>  {
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(10);
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const gamesFiltered = games.filter(game => game.tags.includes(params));
    const currentGames = gamesFiltered.slice(indexOfFirstGame, indexOfLastGame);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(games.length / gamesPerPage); i++) {
    pageNumbers.push(i);
    };

return (
    <div className="gamesFiltered">
        <div className="games__list">
      {currentGames.map(({ name, _id, imgURL }) => (
      <Card key={_id} className="game__card" style={{ width: '18rem'}}>
        <Link
          to={`/games/${getSlugFromTitle(name)}`}
        >
          <Card.Img variant="top" src={imgURL} style={{ width: '17.9rem', height: '20rem' }} className="game__card__img"/>
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
                <a onClick={() => paginate(number)} className='page-link'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    );
}
export default GamesFiltered;
