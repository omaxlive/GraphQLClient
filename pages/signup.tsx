import { useFormik } from 'formik';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { FC, useState } from 'react';
import { Layout } from '../layout/layout';

const Signup: FC = () => {
  const NEW_ACCOUNT = gql`
    mutation newUser($input: UserInput!) {
      newUser(input: $input) {
        name
        lastName
        email
        created
      }
    }
  `;
  const [newUser] = useMutation(NEW_ACCOUNT);

  const [message, setMessage] = useState(null);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is mandatory'),
      lastName: Yup.string().required('Lastname is mandatory'),
      email: Yup.string().email('Email format not valid').required('Email is mandatory'),
      password: Yup.string()
        .required('Password is mandatory')
        .min(6, 'The password must contain at least 6 characters '),
    }),
    onSubmit: async (values) => {
      console.log('values: ', values);
      try {
        const { data } = await newUser({ variables: { input: values } });
        console.log('Created successfully: ', data);
        router.push('/login');
      } catch (error) {
        setMessage(error.message);
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
    <>
      <Layout>
        {message && showMessage()}
        <h1 className="text-2xl text-white font-light text-center">Signup</h1>
        {/* NOTE: from https://tailwindcomponents.com/component/login-form */}
        <form
          className="bg-white shadow-md rounded py-2 px-3 w-full my-3 max-w-md mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="font-bold">{formik.errors.name}</p>
            </div>
          ) : null}
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">
            Last name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="lastName"
            type="text"
            placeholder="Last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p className="font-bold">{formik.errors.lastName}</p>
            </div>
          ) : null}
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
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
          <p className="text-red text-xs italic">Please choose a password.</p>
          <div className="flex items-center justify-between mt-3">
            <input
              className="text-white bg-blue-800 hover:bg-blue-dark font-bold py-2 px-4 rounded"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </Layout>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Signup;
