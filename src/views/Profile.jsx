import {useUserContext} from '../hooks/conxtextHooks';

const Profile = () => {
  const {user, handleLogout} = useUserContext();

  return (
    <>
      <h2>{user.username}</h2>
      <ul>
        <li>Registered: {user.created_at}</li>
        <li>Email: {user.email}</li>
        <li>User level: {user.level_name}</li>
      </ul>
import {useUserContext} from '../hooks/conxtextHooks';

const Profile = () => {
  const {user, handleLogout} = useUserContext();

  return (
    <>
      <h2>{user.username}</h2>
      <ul>
        <li>Registered: {user.created_at}</li>
        <li>Email: {user.email}</li>
        <li>User level: {user.level_name}</li>
      </ul>
      <button onClick={() => {
        handleLogout();
      }}>Logout</button>
    </>
  );
};

export default Profile;
