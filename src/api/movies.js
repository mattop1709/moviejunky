import Config from "react-native-config";

const { BASE_URL, API_KEY } = Config;

/**
 * fetch all movies based on title
 * @param { string }    title   any kind of title for movies only
 * @returns Promise<any>
 */
export async function fetchMovies(title) {
  try {
    const response = await (
      await fetch(`${BASE_URL}/SearchMovie/${API_KEY}/${title}`)
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

export async function fetchMovieDetaild(titleId) {
  try {
    const response = await (
      await fetch(`${BASE_URL}/Title/${API_KEY}/${titleId}/FullActor`)
    ).json();

    if (response.errorMessage) {
      // alert(JSON.stringify(response));
      return "Error";
    }

    if (response) return response;
  } catch (error) {
    /* do something here, prolly proceed to logging activity */
    return "Error";
  }
}

// DUMMY
// export function fetchMovies(title) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: "tt0145487",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man",
//           description: '(2002) aka "Spiderman"',
//         },
//         {
//           id: "tt0948470",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_Ratio0.7273_AL_.jpg",
//           title: "The Amazing Spider-Man",
//           description: '(2012) aka "Spiderman ha\'moufla"',
//         },
//         {
//           id: "tt1872181",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_Ratio0.7273_AL_.jpg",
//           title: "The Amazing Spider-Man 2",
//           description: '(2014) aka "Spiderman ha\'moufla 2"',
//         },
//         {
//           id: "tt10872600",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man: No Way Home",
//           description: "(2021)",
//         },
//         {
//           id: "tt2250912",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man: Homecoming",
//           description: "(2017) aka \"Spiderman: ha'shiva habai'ta\"",
//         },
//         {
//           id: "tt6320628",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man: Far from Home",
//           description: "(2019) aka \"Spiderman: Rakhok Me'Ha'Ba'yit\"",
//         },
//         {
//           id: "tt0413300",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man 3",
//           description: '(2007) aka "Spiderman 3"',
//         },
//         {
//           id: "tt0316654",
//           resultType: "Title",
//           image:
//             "https://imdb-api.com/images/original/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg",
//           title: "Spider-Man 2",
//           description: '(2004) aka "Spiderman 2"',
//         },
//       ]);
//     }, 2000);
//   });
// }

// export function fetchMovieDetaild(id) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         id: "tt1375666",
//         title: "Inception",
//         originalTitle: "",
//         fullTitle: "Inception (2010)",
//         type: "Movie",
//         year: "2010",
//         image:
//           "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg",
//         releaseDate: "2010-07-16",
//         runtimeMins: "148",
//         runtimeStr: "2h 28min",
//         plot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
//         plotLocal: "",
//         plotLocalIsRtl: false,
//         awards:
//           "Top rated movie #13 | Won 4 Oscars157 wins & 220 nominations total",
//         directors: "Christopher Nolan",
//         directorList: [
//           {
//             id: "nm0634240",
//             name: "Christopher Nolan",
//           },
//         ],
//         writers: "Christopher Nolan",
//         writerList: [
//           {
//             id: "nm0634240",
//             name: "Christopher Nolan",
//           },
//         ],
//         stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
//         starList: [
//           {
//             id: "nm0000138",
//             name: "Leonardo DiCaprio",
//           },
//           {
//             id: "nm0330687",
//             name: "Joseph Gordon-Levitt",
//           },
//           {
//             id: "nm0680983",
//             name: "Elliot Page",
//           },
//         ],
//         actorList: [
//           {
//             id: "nm0000138",
//             image:
//               "https://imdb-api.com/images/original/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
//             name: "Leonardo DiCaprio",
//             asCharacter: "Cobb",
//           },
//           {
//             id: "nm0330687",
//             image:
//               "https://imdb-api.com/images/original/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_Ratio0.7273_AL_.jpg",
//             name: "Joseph Gordon-Levitt",
//             asCharacter: "Arthur",
//           },
//           {
//             id: "nm0680983",
//             image:
//               "https://imdb-api.com/images/original/MV5BYWY0NzFmYjAtYzMwNC00ODc3LWI2ZWEtOTU3YTM0Y2ZiNTM5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.7273_AL_.jpg",
//             name: "Elliot Page",
//             asCharacter: "Ariadne (as Ellen Page)",
//           },
//           {
//             id: "nm0362766",
//             image:
//               "https://imdb-api.com/images/original/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_Ratio0.7273_AL_.jpg",
//             name: "Tom Hardy",
//             asCharacter: "Eames",
//           },
//           {
//             id: "nm0913822",
//             image:
//               "https://imdb-api.com/images/original/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
//             name: "Ken Watanabe",
//             asCharacter: "Saito",
//           },
//           {
//             id: "nm2438307",
//             image:
//               "https://imdb-api.com/images/original/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg",
//             name: "Dileep Rao",
//             asCharacter: "Yusuf",
//           },
//         ],
//         fullCast: null,
//         genres: "Action, Adventure, Sci-Fi",
//         genreList: [
//           {
//             key: "Action",
//             value: "Action",
//           },
//           {
//             key: "Adventure",
//             value: "Adventure",
//           },
//           {
//             key: "Sci-Fi",
//             value: "Sci-Fi",
//           },
//         ],
//         companies: "Warner Bros., Legendary Entertainment Syncopy",
//         companyList: [
//           {
//             id: "co0002663",
//             name: "Warner Bros.",
//           },
//           {
//             id: "co0159111",

//             name: "Legendary Entertainment",
//           },
//           {
//             id: "co0147954",
//             name: "Syncopy",
//           },
//         ],
//         countries: "UK, USA",
//         countryList: [
//           {
//             key: "UK",
//             value: "UK",
//           },
//           {
//             key: "USA",
//             value: "USA",
//           },
//         ],
//         languages: "English, Japanese, French",
//         languageList: [
//           {
//             key: "English",
//             value: "English",
//           },
//           {
//             key: "Japanese",
//             value: "Japanese",
//           },
//           {
//             key: "French",
//             value: "French",
//           },
//         ],
//         contentRating: "PG",
//         imDbRating: "8.8",
//         imDbRatingVotes: "2210314",
//         metacriticRating: "74",
//         ratings: null,
//         wikipedia: null,
//         posters: null,
//         images: null,
//         trailer: null,
//         boxOffice: {
//           budget: "$160,000,000 (estimated)",
//           openingWeekendUSA: "$62,785,337",
//           grossUSA: "$292,576,195",
//           cumulativeWorldwideGross: "$836,836,967",
//         },
//         tagline: "Your mind is the scene of the crime",
//         keywords:
//           "dream,ambiguous ending,subconscious,surprise ending,mindbender",
//         keywordList: [
//           "dream",
//           "ambiguous ending",
//           "subconscious",
//           "surprise ending",
//           "mindbender",
//         ],
//       });
//     }, 2000);
//   });
// }
