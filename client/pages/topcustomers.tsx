import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { gql, useQuery } from '@apollo/client';
import { Layout } from '../layout/layout';

const MEJORES_CLIENTES = gql`
  query topCustomers {
    topCustomers {
      customer {
        name
      }
      total
    }
  }
`;

const TopCustomers = () => {
  const { data, loading, error, startPolling, stopPolling } = useQuery(MEJORES_CLIENTES);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return 'Loading...';

  console.log(data);

  const { topCustomers } = data;

  const customerChart = [];

  topCustomers.map((customer, index) => {
    customerChart[index] = {
      ...customer.customer[0],
      total: customer.total,
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Top Customers</h1>

      <BarChart
        className="mt-10"
        width={600}
        height={500}
        data={customerChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#3182CE" />
      </BarChart>
    </Layout>
  );
};

export default TopCustomers;
