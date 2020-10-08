  
export const GET_GAMES = 'GET_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';

export const getGames = () => ({
  type: GET_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});