class Movie {
  constructor(favourites) {
    this.favourites = favourites;
  }

  /**
   * the cross check with favourite list exist with the selected movie
   * @param { string }  title   fulltitle from the API
   * @returns integer
   */
  checkFavourite(title) {
    return this.favourites.findIndex(({ fullTitle }) => fullTitle === title);
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
