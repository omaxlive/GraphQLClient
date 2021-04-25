import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Product from '../../components/Product';
import { Layout } from '../../layout/layout';

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

const Products = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading) return 'Loading...';

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Products</h1>

        <Link href="/products/newproduct">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm">
            New Product
          </a>
        </Link>

        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Name</th>
              <th className="w-1/5 py-2">Stock</th>
              <th className="w-1/5 py-2">Price</th>
              <th className="w-1/5 py-2">Delete</th>
              <th className="w-1/5 py-2">Edit</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.getProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
};

export default Products;