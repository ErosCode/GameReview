  
export const GET_GAMES = 'GET_GAMES';
export const GET_GAME = 'GET_GAME';
export const SAVE_GAMES = 'SAVE_GAMES';

export const getGames = () => ({
  type: GET_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const getGame = (game) => ({
  type: GET_GAME,
  game,
})