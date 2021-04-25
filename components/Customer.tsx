// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import Swal from 'sweetalert2';
import { gql, useMutation } from '@apollo/client';
import Router from 'next/router';

const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: ID!) {
    deleteCustomer(id: $id)
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

export interface CustomerProps {
  customer?: { id?: number; name?: string; lastName?: string; company?: string; email?: string };
}

export const Customer: FC<CustomerProps> = ({ customer }) => {
  const { name, lastName, company, email, id } = customer;

  // mutation Delete customer
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER, {
    update(cache) {
      // get a copy of the cache object
      const { getCustomersSeller } = cache.readQuery({ query: GET_CUSTOMERS_SELLER });

      // rewrite cache
      cache.writeQuery({
        query: GET_CUSTOMERS_SELLER,
        data: {
          getCustomersSeller: getCustomersSeller.filter((customerActual) => customerActual.id !== id),
        },
      });
    },
  });

  // Delete customer
  const confirmDeleteCustomer = () => {
    Swal.fire({
      title: '¿Do you want to delete this customer?',
      text: 'This action cant be reverted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.value) {
        try {
          // Delete by ID
          const { data } = await deleteCustomer({
            variables: {
              id,
            },
          });
          // console.log(data);

          Swal.fire('Deleted!', data.deleteCustomer, 'success');
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const editCustomer = () => {
    Router.push({
      pathname: '/customers/editcustomer/[id]',
      query: { id },
    });
  };

  return (
    <tr>
      <td className="border px-4 py-2">
        {name} {lastName}
      </td>
      <td className="border px-4 py-2">{company}</td>
      <td className="border px-4 py-2">{email}</td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
          onClick={() => confirmDeleteCustomer()}
        >
          Delete
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2"
          >
            {/* eslint-disable-next-line react/self-closing-comp */}
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
          onClick={() => editCustomer()}
        >
          Edit
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-2"
          >
            {/* eslint-disable-next-line react/self-closing-comp */}
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
      </td>
    </tr>
  );
};
