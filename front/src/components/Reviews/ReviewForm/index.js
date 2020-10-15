import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ReviewForm = () => (
  <div className="reviewForm">
      <form>
          
          <label>
              Give your opinion about the game
          </label>
          <textarea type="text" size="4" minLength="20" maxLength="3200" className="reviewForm__text"/>
          <div className="reviewForm__rates">
          <div className="reviewForm__rate">
            <label >
                Rate the graphics
            </label>
            <input type="number" max="10" min="0"/>
          </div>
          <div className="reviewForm__rate">
            <label>
                Rate the story
            </label>
            <input type="number" max="10" min="0" />
          </div>
          <div className="reviewForm__rate">
            <label>
                Rate the writing
            </label>
            <input type="number" max="10" min="0" />
          </div>
          <div className="reviewForm__rate">
            <label>
                Rate the animation
            </label>
            <input type="number" max="10" min="0" />
          </div>
          </div>
          <button className="reviewForm__submit">Send your review</button>
      </form>
  </div>
);

export default ReviewForm;
