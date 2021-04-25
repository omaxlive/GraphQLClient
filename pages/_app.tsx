import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { AppLayoutProps } from 'next/app';
import { FC } from 'react';
import client from '../config/apollo';
import { OrderState } from '../context/orders/OrderState';

const MyApp: FC<AppLayoutProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <OrderState>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </OrderState>
    </ApolloProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
