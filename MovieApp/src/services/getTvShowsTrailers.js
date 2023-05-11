const API_KEY = "17effc3bce0e497819301bb3617efbd9";

export const getTvShowsTrailers = async ({ id }) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
