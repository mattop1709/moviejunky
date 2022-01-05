class Movie {
  constructor(favourites) {
    this.favourites = favourites;
  }

  /**
   * to cross check with favourite list with the selected movie
   * @param { string }  titleId   titleId from the API
   * @returns integer
   */
  checkFavourite(titleId) {
    return this.favourites.findIndex(({ id }) => id === titleId);
  }

  /**
   * clear the selected title from the favourite list
   * @param { string }  title   fulltitle from the API
   * @returns Array<any>
   */
  removeFavourite(title) {
    return this.favourites.filter(({ fullTitle }) => fullTitle !== title);
  }
}

export default Movie;
