export default (selectedGenre, movies) =>
  selectedGenre === 'All genres'
    ? movies
    : movies.filter((movie) => movie.genre === selectedGenre);
