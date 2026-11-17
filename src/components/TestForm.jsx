import {useState} from 'react';

const Testform = () => {
  const {username, setUsername} = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="name"
          id="username"
          value={username}
          onChange={handleChange}
        ></input>
        <button>Lähetä</button>
      </form>
    </div>
  );
};

export default Testform;
