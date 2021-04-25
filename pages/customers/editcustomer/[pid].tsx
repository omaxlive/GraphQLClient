// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Layout } from '../../../layout/layout';

const GET_CUSTOMER = gql`
  query getCustomer($id: ID!) {
    getCustomer(id: $id) {
      name
      lastName
      email
      phone
      company
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($id: ID!, $input: CustomerInput) {
    updateCustomer(id: $id, input: $input) {
      name
      lastName
      email
      phone
      company
    }
  }
`;

const EditCustomer = () => {
  // get actual ID
  const router = useRouter();
  const {
    query: { id },
  } = router;
  // console.log(id)

  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: {
      id,
    },
  });

  // Update customer
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);

  // validation Schema
  const schemaValidacion = Yup.object({
    name: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    company: Yup.string().required('required'),
    email: Yup.string().email('not the expected format').required('required'),
  });

  if (loading) return 'Loading...';

  if (!data?.getCustomer) {
    router.push('/');
    return null;
  }

  const { getCustomer } = data;

  // Modifica el customer en la BD
  const updateCustomerInfo = async (valores) => {
    const { name, lastName, company, email, phone } = valores;

    try {
      const { data } = await updateCustomer({
        variables: {
          id,
          input: {
            name,
            lastName,
            company,
            email,
            phone,
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateCustomer: {
            id,
            name,
            lastName,
            company,
            email,
            phone,
            __typename: 'Customer',
          },
        },
        // NOTE: testing 2
        // update(cache, { data: { updateCustomer: updateResult } }) {
        //   console.log('updateResult: ', updateResult);

        //   cache.writeQuery({
        //     query: GET_CUSTOMER,
        //     variables: {
        //       id,
        //     },
        //     data: {
        //       getCustomer: updateResult,
        //     },
        //   });
        // },
        // NOTE: testing 1
        // refetchQueries: [
        //   {
        //     query: GET_CUSTOMER,
        //     variables: {
        //       id,
        //     },
        //   },
        // ],
      });

      Swal.fire('Updated', 'The customer was successfully updated', 'success');

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Edit Customer</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            validationSchema={schemaValidacion}
            enableReinitialize
            initialValues={getCustomer}
            onSubmit={(valores) => {
              updateCustomerInfo(valores);
            }}
          >
            {(props) => {
              // console.log(props);
              return (
                <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={props.handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Name"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                    />
                  </div>

                  {props.touched.name && props.errors.name ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.name}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.lastName}
                    />
                  </div>

                  {props.touched.lastName && props.errors.lastName ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.lastName}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.company}
                    />
                  </div>

                  {props.touched.company && props.errors.company ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.company}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                    />
                  </div>

                  {props.touched.email && props.errors.email ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.email}</p>
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
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.phone}
                    />
                  </div>

                  <input
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Edit Customer"
                  />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default EditCustomer;
