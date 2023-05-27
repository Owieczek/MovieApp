const API_KEY = "17effc3bce0e497819301bb3617efbd9";

export const getPopularTvShows = async () => {
  const results = [];

  for (let page = 1; page <= 10; page++) {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    results.push(fetch(url).then((response) => response.json()));
  }
  const data = await Promise.all(results);
  const tvShows = data.flatMap((item) => item.results);

 const filteredTvShows = tvShows.filter((show) => show.vote_count > 5000);


  const limitedTvShows = filteredTvShows.slice(0, 20);

  return limitedTvShows;
};
