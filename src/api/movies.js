import Config from "react-native-config";

const { BASE_URL, API_KEY } = Config;
const controller = new AbortController();
const signal = controller.signal;

/**
 * fetch all movies based on title
 * @param { string }    title   any kind of title for movies only
 * @returns Promise<any>
 */
export async function fetchMovies(title) {
  try {
    const response = await (
      await fetch(`${BASE_URL}/SearchMovie/${API_KEY}/${title}`, { signal })
    ).json();

    if (response.results) {
      return response.results;
    }

    if (response.errorMessage) {
      // alert(JSON.stringify(response));
      return "Error";
    }
  } catch (error) {
    /* do something here, prolly proceed to logging activity */
    return "Error";
  }
}

/**
 * fetch information based on the specific id
 * @param { string }  titleId   any id which belong to the movie
 * @returns Promise<any>
 */

// export async function fetchMovieDetaild(titleId) {
//   try {
//     const response = await (
//       await fetch(`${BASE_URL}/Title/${API_KEY}/${titleId}/FullActor`, {
//         signal,
//       })
//     ).json();

//     if (response.errorMessage) {
//       // alert(JSON.stringify(response));
//       return "Error";
//     }

//     if (response) {
//       return response;
//     }
//   } catch (error) {
//     /* do something here, prolly proceed to logging activity */
//     return "Error";
//   }
// }

// export async function fetchTopMovies() {
//   try {
//     const response = await (
//       await fetch(`${BASE_URL}/Top250Movies/${API_KEY}`, { signal })
//     ).json();

//     if (response.items) {
//       return response.items;
//     }

//     if (response.errorMessage) {
//       // alert(JSON.stringify(response));
//       return "Error";
//     }
//   } catch (error) {
//     /* do something here, prolly proceed to logging activity */
//     return "Error";
//   }
// }

// DUMMY
// IMPORTANT, for Top 250 => add rank, imDbRating
export function fetchTopMovies() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: "tt0111161",
          rank: "1",
          title: "The Shawshank Redemption",
          fullTitle: "The Shawshank Redemption (1994)",
          year: "1994",
          image:
            "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
          crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
          imDbRating: "9.2",
          imDbRatingCount: "2535085",
        },
        {
          id: "tt0068646",
          rank: "2",
          title: "The Godfather",
          fullTitle: "The Godfather (1972)",
          year: "1972",
          image:
            "https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
          imDbRating: "9.1",
          imDbRatingCount: "1744867",
        },
        {
          id: "tt0071562",
          rank: "3",
          title: "The Godfather: Part II",
          fullTitle: "The Godfather: Part II (1974)",
          year: "1974",
          image:
            "https://imdb-api.com/images/original/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
          imDbRating: "9.0",
          imDbRatingCount: "1210512",
        },
        {
          id: "tt0468569",
          rank: "4",
          title: "The Dark Knight",
          fullTitle: "The Dark Knight (2008)",
          year: "2008",
          image:
            "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
          crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
          imDbRating: "9.0",
          imDbRatingCount: "2485604",
        },
        {
          id: "tt0050083",
          rank: "5",
          title: "12 Angry Men",
          fullTitle: "12 Angry Men (1957)",
          year: "1957",
          image:
            "https://imdb-api.com/images/original/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg",
          crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
          imDbRating: "8.9",
          imDbRatingCount: "749155",
        },
        {
          id: "tt0108052",
          rank: "6",
          title: "Schindler's List",
          fullTitle: "Schindler's List (1993)",
          year: "1993",
          image:
            "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
          crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
          imDbRating: "8.9",
          imDbRatingCount: "1295126",
        },
        {
          id: "tt0167260",
          rank: "7",
          title: "The Lord of the Rings: The Return of the King",
          fullTitle: "The Lord of the Rings: The Return of the King (2003)",
          year: "2003",
          image:
            "https://imdb-api.com/images/original/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
          crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
          imDbRating: "8.9",
          imDbRatingCount: "1748974",
        },
        {
          id: "tt0110912",
          rank: "8",
          title: "Pulp Fiction",
          fullTitle: "Pulp Fiction (1994)",
          year: "1994",
          image:
            "https://imdb-api.com/images/original/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
          crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
          imDbRating: "8.8",
          imDbRatingCount: "1952096",
        },
        {
          id: "tt0060196",
          rank: "9",
          title: "The Good, the Bad and the Ugly",
          fullTitle: "The Good, the Bad and the Ugly (1966)",
          year: "1966",
          image:
            "https://imdb-api.com/images/original/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_Ratio0.6716_AL_.jpg",
          crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
          imDbRating: "8.8",
          imDbRatingCount: "732284",
        },
        {
          id: "tt0120737",
          rank: "10",
          title: "The Lord of the Rings: The Fellowship of the Ring",
          fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
          year: "2001",
          image:
            "https://imdb-api.com/images/original/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg",
          crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
          imDbRating: "8.8",
          imDbRatingCount: "1770460",
        },
      ]);
    }, 1000);
  });
}

export function fetchMovieDetaild(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: "tt1375666",
        title: "Inception",
        originalTitle: "",
        fullTitle: "Inception (2010)",
        type: "Movie",
        year: "2010",
        image:
          "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg",
        releaseDate: "2010-07-16",
        runtimeMins: "148",
        runtimeStr: "2h 28min",
        plot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
        plotLocal: "",
        plotLocalIsRtl: false,
        awards:
          "Top rated movie #13 | Won 4 Oscars 157 wins & 220 nominations total",
        directors: "Christopher Nolan",
        directorList: [
          {
            id: "nm0634240",
            name: "Christopher Nolan",
          },
        ],
        writers: "Christopher Nolan",
        writerList: [
          {
            id: "nm0634240",
            name: "Christopher Nolan",
          },
        ],
        stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        starList: [
          {
            id: "nm0000138",
            name: "Leonardo DiCaprio",
          },
          {
            id: "nm0330687",
            name: "Joseph Gordon-Levitt",
          },
          {
            id: "nm0680983",
            name: "Elliot Page",
          },
        ],
        actorList: [
          {
            id: "nm0000138",
            image:
              "https://imdb-api.com/images/original/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
            name: "Leonardo DiCaprio",
            asCharacter: "Cobb",
          },
          {
            id: "nm0330687",
            image:
              "https://imdb-api.com/images/original/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_Ratio0.7273_AL_.jpg",
            name: "Joseph Gordon-Levitt",
            asCharacter: "Arthur",
          },
          {
            id: "nm0680983",
            image:
              "https://imdb-api.com/images/original/MV5BYWY0NzFmYjAtYzMwNC00ODc3LWI2ZWEtOTU3YTM0Y2ZiNTM5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.7273_AL_.jpg",
            name: "Elliot Page",
            asCharacter: "Ariadne (as Ellen Page)",
          },
          {
            id: "nm0362766",
            image:
              "https://imdb-api.com/images/original/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_Ratio0.7273_AL_.jpg",
            name: "Tom Hardy",
            asCharacter: "Eames",
          },
          {
            id: "nm0913822",
            image:
              "https://imdb-api.com/images/original/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
            name: "Ken Watanabe",
            asCharacter: "Saito",
          },
          {
            id: "nm2438307",
            image:
              "https://imdb-api.com/images/original/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg",
            name: "Dileep Rao",
            asCharacter: "Yusuf",
          },
        ],
        fullCast: null,
        genres: "Action, Adventure, Sci-Fi",
        genreList: [
          {
            key: "Action",
            value: "Action",
          },
          {
            key: "Adventure",
            value: "Adventure",
          },
          {
            key: "Sci-Fi",
            value: "Sci-Fi",
          },
        ],
        companies: "Warner Bros., Legendary Entertainment Syncopy",
        companyList: [
          {
            id: "co0002663",
            name: "Warner Bros.",
          },
          {
            id: "co0159111",

            name: "Legendary Entertainment",
          },
          {
            id: "co0147954",
            name: "Syncopy",
          },
        ],
        countries: "UK, USA",
        countryList: [
          {
            key: "UK",
            value: "UK",
          },
          {
            key: "USA",
            value: "USA",
          },
        ],
        languages: "English, Japanese, French",
        languageList: [
          {
            key: "English",
            value: "English",
          },
          {
            key: "Japanese",
            value: "Japanese",
          },
          {
            key: "French",
            value: "French",
          },
        ],
        contentRating: "PG",
        imDbRating: "8.8",
        imDbRatingVotes: "2210314",
        metacriticRating: "74",
        ratings: null,
        wikipedia: null,
        posters: null,
        images: null,
        trailer: null,
        boxOffice: {
          budget: "$160,000,000 (estimated)",
          openingWeekendUSA: "$62,785,337",
          grossUSA: "$292,576,195",
          cumulativeWorldwideGross: "$836,836,967",
        },
        tagline: "Your mind is the scene of the crime",
        keywords:
          "dream,ambiguous ending,subconscious,surprise ending,mindbender",
        keywordList: [
          "dream",
          "ambiguous ending",
          "subconscious",
          "surprise ending",
          "mindbender",
        ],
      });
    }, 2000);
  });
}
