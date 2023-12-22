import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
  if (data.password.length < 3) {
    errors.msg = 'password too short';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    errors.msg = error?.response?.data?.msg;
    return errors;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const errors = useActionData();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo></Logo>
        <h4>Login</h4>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <p></p>
        <FormRow type="email" name="email"></FormRow>
        <FormRow type="password" name="password"></FormRow>
        <SubmitBtn />
        <button type="submit" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
