import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  fetch,
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      myHeader: 'hello',
      authorization: token ? `Bearer ${token}` : '',
    },
    onError: null,
    setOnError: null,
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

// eslint-disable-next-line import/no-default-export
export default client;
