import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const RegisterForm = ({setDisplayLogin}) => {
  const {postRegistration} = useUser();

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async (formData) => {
    console.log('HOOKIN palauttama formdata', formData);
    try {
      const result = await postRegistration(formData);
      console.log('registration result', result);
      alert('Registration successful, ' + result.message);
      setDisplayLogin(true);
    } catch (error) {
      console.log('Error', error);
      alert('Registration failed: ' + error.message);
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reguser">Username</label>
          <input
            name="username"
            type="text"
            id="reguser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="regpassword">Password</label>
          <input
            name="password"
            type="password"
            id="regpassword"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
