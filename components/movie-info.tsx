import { API_URL } from '../app/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = response.json();

  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
}
