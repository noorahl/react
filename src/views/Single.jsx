import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state;
  const navigate = useNavigate();
  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {/* TODO: add all media file details and video/image player here */}
      {/* TODO: add go back button here*/}
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
