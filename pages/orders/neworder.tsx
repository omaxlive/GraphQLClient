// eslint-disable-next-line no-use-before-define
import React, { useContext, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { Layout } from '../../layout/layout';
import AsignarCliente from '../../components/orders/AssignCustomer';
import AssignProducts from '../../components/orders/AssignProducts';
import OrderSummary from '../../components/orders/OrderSummary';
import Total from '../../components/orders/Total';

import { OrderContext } from '../../context/orders/OrderContext';

const NEW_ORDER = gql`
  mutation newOrder($input: OrderInput) {
    newOrder(input: $input) {
      id
    }
  }
`;

const GET_ORDERS_SELLER = gql`
  query getOrdersSeller {
    getOrdersSeller {
      id
      order {
        id
        quantity
        name
      }
      customer {
        id
        name
        lastName
        phone
        email
      }
      seller
      total
      state
    }
  }
`;

const NewOrder = () => {
  const router = useRouter();

  const [mensaje, setMensaje] = useState(null);

  // Use context and extract its functions, values
  const ContextUsed = useContext(OrderContext);
  const { customer, products, total } = ContextUsed;

  console.log('customer: ', customer);
  console.log('products: ', products);
  console.log('total: ', total);

  const [newOrder] = useMutation(NEW_ORDER, {
    update(cache, { data: { newOrder } }) {
      const { getOrdersSeller } = cache.readQuery({ query: GET_ORDERS_SELLER });
      cache.writeQuery({
        query: GET_ORDERS_SELLER,
        data: {
          getOrdersSeller: [...getOrdersSeller, newOrder],
        },
      });
    },
  }); // TODO UPDATE CACHE

  const validateOrder = () => {
    return !products.every((product) => product.quantity > 0) || total === 0 || customer.length === 0
      ? ' opacity-50 cursor-not-allowed '
      : '';
  };

  const createNewOrder = async () => {
    const { id } = customer;

    // Remove not needed props from product object
    const order = products.map(({ __typename, stock, ...product }) => product);

    try {
      const { data } = await newOrder({
        variables: {
          input: {
            customer: id,
            total,
            order,
          },
        },
      });
      console.log(data);

      // Redirect
      router.push('/orders');

      Swal.fire('Created', 'The Order was successfully created', 'success');
    } catch (error) {
      setMensaje(error.message.replace('GraphQL error: ', ''));

      setTimeout(() => {
        setMensaje(null);
      }, 3000);
    }
  };

  const mostrarMensaje = () => {
    return (
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto ">
        <p>{mensaje} </p>
      </div>
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">New Order</h1>

      {mensaje && mostrarMensaje()}

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AsignarCliente />
          <AssignProducts />
          <OrderSummary />
          <Total />

          <button
            type="button"
            className={` bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${validateOrder()} `}
            onClick={() => createNewOrder()}
          >
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NewOrder;
