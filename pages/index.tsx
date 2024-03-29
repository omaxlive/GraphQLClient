// import Head from "next/head";
import { FC } from 'react';
// import styles from "../styles/Home.module.css";
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { Layout } from '../layout/layout';
import { Customer } from '../components/Customer';

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

const Home: FC = () => {
  const { data, loading, error } = useQuery(GET_CUSTOMERS_SELLER);

  console.log('home data: ', data);
  console.log('home loading: ', loading);
  console.log('home error: ', error);

  if (loading) return null;

  return (
    <Layout>
      <>
        <h1 className="text-2xl text-gray-800 font-light">Home (index)</h1>
        <Link href="/customers/newcustomer">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">
            New Customer
          </a>
        </Link>

        <div className="overflow-x-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/5 py-2">Name</th>
                <th className="w-1/5 py-2">Company</th>
                <th className="w-1/5 py-2">Email</th>
                <th className="w-1/5 py-2">Delete</th>
                <th className="w-1/5 py-2">Edit</th>
              </tr>
            </thead>

            {data.getCustomersSeller ? (
              <tbody className="bg-white">
                {data.getCustomersSeller.map((customer) => (
                  <Customer key={customer.id} customer={customer} />
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
