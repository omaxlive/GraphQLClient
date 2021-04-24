import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import Order from '../components/Order';
import { Layout } from '../layout/layout';

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

const Pedidos = () => {
  const { data, loading, error } = useQuery(GET_ORDERS_SELLER);

  if (loading) return 'Loading...';

  const { getOrdersSeller } = data;

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Orders</h1>

        <Link href="/neworder">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">
            New Order
          </a>
        </Link>

        {getOrdersSeller.length === 0 ? (
          <p className="mt-5 text-center text-2xl">No hay orders aún</p>
        ) : (
          getOrdersSeller.map((order) => <Order key={order.id} order={order} />)
        )}
      </Layout>
    </div>
  );
};

export default Pedidos;
