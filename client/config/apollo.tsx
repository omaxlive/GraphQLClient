import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/',
    fetch,
  }),
});

// eslint-disable-next-line import/no-default-export
export default client;
