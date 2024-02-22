import { Suspense } from 'react';

import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { API_URL } from '../../../page';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const response = await fetch(`${API_URL}/${id}`);
  const movie = await response.json();
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h1>Movie Info loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Movie Viedos loading...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
