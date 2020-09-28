import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../Reviews';
import { Card } from 'react-bootstrap';

import './styles.scss';
import gameImg from '../../styles/bge.jpg';

const GameDetails = () => (
  <div className="game__details">
    <div className="game__infos">
      <div className="game__infos--img">
        <Card style={{ width: '18rem' }}>
          <Card.Img src={gameImg} />
        </Card>
      </div>
      <div className="game__infos--details">
        <h3 className="game__infos--title">
          Game title
        </h3>
        <p className="game__infos--rate__title">
          Average reviewers rate:
        </p>
        <div className="game__infos--rate">
          9/10
        </div>
        <p className="game__infos--description">
          Description: Incididunt officia labore sint dolore mollit commodo cupidatat deserunt eiusmod. Elit occaecat reprehenderit ex minim sint nulla est dolor aute in. Commodo exercitation excepteur laboris aliqua ipsum. Sint laboris voluptate ea irure ut enim magna. Elit ullamco mollit elit Lorem dolor fugiat irure dolor. Cupidatat non velit ipsum anim ad proident voluptate mollit eu mollit aute. Tempor amet eiusmod qui ullamco ut adipisicing.
        </p>
      </div>
    </div>
    <Reviews />
  </div>
);

export default GameDetails;
