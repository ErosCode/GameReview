import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ReviewForm = () => (
  <div className="reviewForm">
      <form>
          
          <label>
              Give your opinion about the game
          </label>
          <textarea type="text" size="4" className="reviewForm__text"/>
          <label>
              Rate the graphics
          </label>
          <input type="number" />
          <label>
              Rate the scenario
          </label>
          <input type="number" />
          <label>
              Rate the mechanics
          </label>
          <input type="number" />
          <label>
              Rate the cutscenes
          </label>
          <input type="number" />
          
      </form>
  </div>
);

export default ReviewForm;
