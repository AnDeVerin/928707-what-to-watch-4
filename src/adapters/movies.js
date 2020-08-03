export const createMoviesData = (movies) =>
  movies.map((movie) => ({
    id: movie.id,
    backgroundColor: movie.background_color,
    isFavorite: movie.is_favorite,
    title: movie.name,
    thumbUrl: movie.preview_image,
    genre: movie.genre,
    realeseYear: movie.released,
    posterUrl: movie.poster_image,
    coverUrl: movie.background_image,
    trailer: movie.preview_video_link,
    overview: {
      rating: {
        value: movie.rating,
        count: movie.scores_count,
      },
      description: movie.description,
      director: movie.director,
      stars: movie.starring,
      runTime: movie.run_time,
    },
    reviews: [],
    videoUrl: movie.video_link,
  }));
