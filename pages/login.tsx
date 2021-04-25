import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Layout } from '../layout/layout';

const AUTH_USER = gql`
  mutation authUser($input: AuthUserInput!) {
    authUser(input: $input) {
      token
    }
  }
`;

const Login: FC = () => {
  const [message, saveMessage] = useState(null);
  const [authUser] = useMutation(AUTH_USER);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email format not valid').required('Email is mandatory'),
      password: Yup.string()
        .required('Password is mandatory')
        .min(6, 'The password must contain at least 6 characters '),
    }),
    onSubmit: async (values) => {
      saveMessage('Signing in...');

      try {
        const { data } = await authUser({ variables: { input: values } });
        // Save token in localstorage
        setTimeout(() => {
          const { token } = data.authUser;
          localStorage.setItem('token', token);
        }, 1000);

        // Redirect tp customers
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } catch (error) {
        saveMessage(error.message);
        console.log('Error: ', error);
      }
    },
  });

  const showMessage = () => {
    return (
      <div className="bg-white rounded py-2 px-3 w-full my-3 max-w-md text-center mx-auto">
        <p>{message}</p>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        {message && showMessage()}
        <h1 className="text-2xl text-white font-light text-center">Login</h1>
        <form
          className="bg-white shadow-md rounded py-2 px-3 w-full my-3 max-w-md mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4 p-2">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p className="font-bold">{formik.errors.email}</p>
              </div>
            ) : null}
          </div>
          <div className="mb-6 p-2">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p className="font-bold">{formik.errors.password}</p>
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-between p-2">
            <input
              className="text-white bg-blue-800 hover:bg-blue-dark font-bold py-2 px-4 rounded"
              type="submit"
              value="Sign in"
            />
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/">
              Forgot Password?
            </a>
          </div>
        </form>
      </Layout>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
