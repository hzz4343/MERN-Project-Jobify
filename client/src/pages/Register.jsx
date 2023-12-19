import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo></Logo>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john"></FormRow>
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="smith"
        ></FormRow>
        <FormRow type="text" name="location" defaultValue="earth"></FormRow>
        <FormRow
          type="email"
          name="email"
          defaultValue="john@gmail.com"
        ></FormRow>
        <FormRow
          type="password"
          name="password"
          defaultValue="secret123"
        ></FormRow>
        <SubmitBtn></SubmitBtn>
        <p>
          Already a member?
          <Link to="/login">Login</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
