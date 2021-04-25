import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from '@apollo/client/link/context';

// NOTE: for development is 'http://localhost:4000/'
const httpLink = createHttpLink({
  uri: 'https://quiet-falls-86844.herokuapp.com/',
  fetch,
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    onError: null,
    setOnError: null,
  };
});

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined', // set to true for SSR
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

// eslint-disable-next-line import/no-default-export
export default client;
