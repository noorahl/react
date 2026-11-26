import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const LoginForm = () => {
  const postlogin = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    console.log('HOOKIN palauttama formdata', formData);
    // TODO: add login functionalities here
    // use postlogin funktiota ja tee kutsu rajapintaan
    try {
      const userInfo = await postlogin(formData);
      console.log(userInfo);
      localStorage.setItem('token', userInfo.token);
      navigate('/');
    } catch (error) {
      console.log('Error', error);
    }

    // ullis
    // ull1s
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
