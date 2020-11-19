export const GET_GAMES = 'GET_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';
export const GET_TAGS = 'GET_TAGS';
export const SAVE_TAGS = 'SAVE_TAGS';

export const getGames = () => ({
  type: GET_GAMES,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const getTags = () => ({
  type: GET_TAGS,
})

export const saveTags = (tags) => ({
  type: SAVE_TAGS,
  tags,
})