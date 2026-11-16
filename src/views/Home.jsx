import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API;

const Home = () => {
  // ensimmäisessä renderöinnissä dataa ei ole vielä haettu
  // siksi tyhjä array
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      // 1. haetaan ensin pelkkä mediadata
      const mediaFiles = await fetchData(MEDIA_API);
      const mediaFilesWithUsernames = await Promise.all(
        mediaFiles.map(async (file) => {
          const user = await fetchData(`${AUTH_API}/users/${file.user_id}`);
          return {...file, username: user.username};
        }),
      );
      setMediaArray(mediaFilesWithUsernames);
    };
    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
