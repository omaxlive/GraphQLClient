import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { AppLayoutProps } from 'next/app';
import { FC } from 'react';
import client from '../config/apollo';

const MyApp: FC<AppLayoutProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
