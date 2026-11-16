import {useLocation, useNavigate} from 'react-router';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

const Single = () => {
  const {getUserInformation} = useUser();
  const [owner, setOwner] = useState(null);

  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();

  const getUser = async () => {
    const user = await getUserInformation(item.user_id);
    setOwner(user);
  };

  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {/* TODO: add all media file details and video/image player here */}
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>

      <h4
        onClick={() => {
          getUser();
        }}
      >
        Owner: {item.username}
      </h4>
      {owner && (
        <p>
          Email: {owner.email}, User level: {owner.level_name}
        </p>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
