// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import { OrderContext } from '../../context/orders/OrderContext';

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

const assignCustomer = () => {
  const [customer, setCustomer] = useState([]);

  const orderContext = useContext(OrderContext);
  const { addCustomer } = orderContext;

  // get from DB
  const { data, loading, error } = useQuery(GET_CUSTOMERS_SELLER);

  console.log(data);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    addCustomer(customer);
  }, [customer]);

  const selectCustomer = (customers) => {
    setCustomer(customers);
  };

  if (loading) return null;

  const { getCustomersSeller } = data;

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1.- Assign a Customer
      </p>
      <Select
        className="mt-3"
        options={getCustomersSeller}
        onChange={(opcion) => selectCustomer(opcion)}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) => opciones.name}
        placeholder="Search or select a Customer"
        noOptionsMessage={() => 'No results'}
      />
    </>
  );
};

export default assignCustomer;
