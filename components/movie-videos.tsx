import { API_URL } from '../app/constants';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('error!!');

  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = response.json();

  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          title={video.name}
          src={`https://youtube.com/embed/${video.key}`}
        />
      ))}
    </div>
  );
}
