import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import './styles.scss';
import gameImg from '../../styles/bge.jpg';

const Games = () => (
  <div className="games">
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
    <Card className="game__card" style={{ width: '18rem' }}>
      <Link
        to="/games/game_details"
      >
        <Card.Img variant="top" src={gameImg} />
      </Link>
      <Card.Body>
        <Card.Title>Game Name</Card.Title>
        <Button variant="primary">Show Reviews</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Games;
