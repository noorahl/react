import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;

/**
 * Custom hook for all media endpoint API functionalities
 *
 * @returns
 */
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async (limit) => {
      // 1. haetaan ensin pelkkä mediadata
      const mediaFiles = await fetchData(MEDIA_API + '/media?limit=' + limit);
      // 2. lisätään jokaiselle mediatiedostolle username ominaisuus hakemalla
      // fetchillä auth apista jokaisen mediatiedoston omistaja user_id:n perusteella
      // yksi kerrallaan. Kun kaikki pyynnöt ovat valmistuneet, promise.all() kaikkien pyyntöjen
      // tulokset yhtenä taulukkona
      const mediaFilesWithUsernames = await Promise.all(
        mediaFiles.map(async (mediaFile) => {
          const user = await fetchData(
            `${AUTH_API}/users/${mediaFile.user_id}`,
          );
          return {...mediaFile, username: user.username};
        }),
      );
      // 3. asetaan datat stateen vasta kaikkien http-pyyntöjen onnistuttua
      setMediaArray(mediaFilesWithUsernames);
    };
    // haetaan tuoreimmat 10 kpl
    getMedia(10);
  }, []);

  return {mediaArray};
};

/**
 * Auth api /user resource endpoints
 */
const useUser = () => {
  const getUserInformation = async (userId) => {
    const user = await fetchData(`${AUTH_API}/users/${userId}`);
    return user;
  };

  const getUserByToken = async (token) => {
    const result = await fetchData(`${AUTH_API}/users/token`, {
      headers: {Authorization: 'Bearer ' + token},
    });
    return result.user;
  };

  const postRegistration = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const registrationResult = await fetchData(
      `${AUTH_API}/users`,
      fetchOptions,
    );
    return registrationResult;
  };

  return {getUserInformation, getUserByToken, postRegistration};
};

/**
 * Auth api /auth resource
 * @returns
 */
const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
    return loginResult;
  };

  return postLogin;
};

export {useMedia, useUser, useAuthentication};
