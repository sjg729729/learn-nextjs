import { API_URL } from '../app/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('error!!');

  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = response.json();

  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return <div>{JSON.stringify(video)}</div>;
}
