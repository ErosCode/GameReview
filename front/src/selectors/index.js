// You can use this file for independent functions
import slugify from 'slugify';

export const getSlugFromTitle = (title = '') => {
    //we use a regex to transform the title into something that fits the slug norms
    const modifiedTitle = title.replace(/[&]/g, '').replace(/[_]/g, '-');
  
    const slug = slugify(modifiedTitle, {
      lower: true,
      remove: /[*+~.()'"!:@&]/g,
    });
  
    return slug;
  };
  
  export const getGameBySlug = (gameList, slug) => gameList.find(
    (game) => getSlugFromTitle(game.name) === slug,
  );