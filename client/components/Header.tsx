// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const OBTENER_USUARIO = gql`
  query getUser {
    getUser {
      id
      name
      lastName
    }
  }
`;

export const Header = () => {
  const router = useRouter();

  // query apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIO);

  console.log('Header: ', data);
  console.log('Header: ', loading);
  console.log('Header: ', error);

  if (loading) return null;

  if (!data.getUser) {
    router.push('/login');
    return null;
  }

  const { name, lastName } = data?.getUser;
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="sm:flex sm:justify-between mb-6">
      <p className="mr-2 mb-5 lg:mb-0">
        Hello {name} {lastName}
      </p>
      <button
        onClick={() => cerrarSesion()}
        type="button"
        className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md"
      >
        Logout
      </button>
    </div>
  );
};
