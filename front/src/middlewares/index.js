import logMiddleware from './logMiddleware';
import games from './games';
import reviews from './reviews';
// By exporting an array you can use multiple middlewares in one file. Here : index.js
export default [
  logMiddleware,
  games,
  reviews,
];
