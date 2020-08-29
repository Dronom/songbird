import genres from '../../../helpers/movieAPI/genres';

const getInitialState = () => ({
  pagesPassed: 0,
  list: [
    {
      name: 'Cartoon',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: { with_genres: [genres.get('Cartoon')] },
    },
    {
      name: 'Action',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: {
        with_genres: [genres.get('Action')],
        without_genres: [genres.get('Cartoon')],
      },
    },
    {
      name: 'Comedy',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: {
        with_genres: [genres.get('Comedy')],
        without_genres: [genres.get('Cartoon')],
      },
    },
    {
      name: 'Adventure',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: {
        with_genres: [genres.get('Adventure')],
        without_genres: [genres.get('Cartoon')],
      },
    },
    {
      name: 'Serial',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: { type: 'tv' },
    },
    {
      name: 'TOP',
      selectedMovieIds: new Set(),
      movies: [],
      rightMovie: {},
      levelScore: 5,
      isQuessed: false,
      requestSettings: { sort_by: 'popularity.desc' },
    },
  ],
});

export default getInitialState;
