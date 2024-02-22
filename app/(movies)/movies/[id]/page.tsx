import { Suspense } from 'react';
import { API_URL } from '../../../page';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

// URL: /movies/:id
// async function getMovie(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}`);
//   const json = response.json();

//   return json;
// }

// async function getVideos(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   const json = response.json();

//   return json;
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Movie Info loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <br />
      <Suspense fallback={<h1>Movie Viedos loading...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
