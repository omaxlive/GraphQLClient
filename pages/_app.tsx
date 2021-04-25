import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { AppLayoutProps } from 'next/app';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import client from '../config/apollo';
import { OrderState } from '../context/orders/OrderState';

const MyApp: FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url, { shallow }) => {
      console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
    };

    router.events.on('routeChangeStart', handleRouteStart);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
    };
  }, []);

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
