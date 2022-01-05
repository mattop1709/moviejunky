class Movie {
  constructor(favourites) {
    this.favourites = favourites;
  }

  /**
   * the cross check with favourite list exist with the selected movie
   * @param { string }  title   fulltitle from the API
   * @returns integer
   */
  checkFavourite(titleId) {
    return this.favourites.findIndex(({ id }) => id === titleId);
  }

  /**
   *
   * @param { string }  title   fulltitle from the API
   * @returns <Array<any>>
   */
  removeFavourite(title) {
    return this.favourites.filter(({ fullTitle }) => fullTitle !== title);
  }
}

export default Movie;
