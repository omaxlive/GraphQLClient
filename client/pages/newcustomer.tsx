// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Layout } from '../layout/layout';

const NEW_CUSTOMER = gql`
  mutation newCustomer($input: CustomerInput) {
    newCustomer(input: $input) {
      id
      name
      lastName
      company
      email
      phone
    }
  }
`;

const GET_CUSTOMERS_SELLER = gql`
  query getCustomersSeller {
    getCustomersSeller {
      id
      name
      lastName
      company
      email
    }
  }
`;

const NewCustomer = () => {
  const router = useRouter();

  // Alert message
  const [message, setMessage] = useState(null);

  // Mutation to create customers
  const [newCustomer] = useMutation(NEW_CUSTOMER, {
    update(cache, { data: { newCustomer } }) {
      // Get the cache object that we want to update
      const { getCustomersSeller } = cache.readQuery({ query: GET_CUSTOMERS_SELLER });

      // We rewrite the cache (the cache should never be modified)
      cache.writeQuery({
        query: GET_CUSTOMERS_SELLER,
        data: {
          getCustomersSeller: [...getCustomersSeller, newCustomer],
        },
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('required'),
      lastName: Yup.string().required('required'),
      company: Yup.string().required('required'),
      email: Yup.string().email('not the expected format').required('required'),
    }),
    onSubmit: async (valores) => {
      const { name, lastName, company, email, phone } = valores;

      try {
        const { data } = await newCustomer({
          variables: {
            input: {
              name,
              lastName,
              company,
              email,
              phone,
            },
          },
        });
        router.push('/');
      } catch (error) {
        setMessage(error.message.replace('GraphQL error: ', ''));

        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    },
  });

  const mostrarMensaje = () => {
    return (
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{message}</p>
      </div>
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">New Customer</h1>

      {message && mostrarMensaje()}

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            {formik.touched.name && formik.errors.name ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.name}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>

            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.lastName}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Company
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Customers Company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
            </div>

            {formik.touched.company && formik.errors.company ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.company}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.email}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone number
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Create"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewCustomer;
