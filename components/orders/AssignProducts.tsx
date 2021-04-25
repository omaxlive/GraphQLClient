// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import { OrderContext } from '../../context/orders/OrderContext';

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      price
      stock
    }
  }
`;

const AssignProducts = () => {
  // component state local
  const [products, setProductos] = useState([]);

  const ContextUsed = useContext(OrderContext);
  const { addProduct } = ContextUsed;

  // get from db
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  console.log('data: ', data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  useEffect(() => {
    addProduct(products);
  }, [products]);

  const seleccionarProducto = (producto) => {
    setProductos(producto);
  };

  if (loading) return null;
  const { getProducts } = data;

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        2.- Select products
      </p>
      <Select
        className="mt-3"
        options={getProducts}
        onChange={(opcion) => seleccionarProducto(opcion)}
        isMulti={true}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) => `${opciones.name} - ${opciones.stock} Availables`}
        placeholder="Busque o Seleccione el Producto"
        noOptionsMessage={() => 'No results'}
      />
    </>
  );
};

export default AssignProducts;
