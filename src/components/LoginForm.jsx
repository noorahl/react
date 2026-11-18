import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {Navigate} from 'react-router';

const LoginForm = () => {
  const postLogin = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    console.log('Hookin palauttama form data', formData);
    // TODO: add login functionalities here
    try {
      const userInfo = await postLogin(formData);
      console.log(userInfo);
      localStorage.setItem('token', userInfo.token);
      Navigate('/');
    } catch (error) {
      console.log('Error' + error);
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  return (
    <>
      <h1>Login</h1>
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
