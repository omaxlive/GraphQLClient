/* eslint-disable no-underscore-dangle */
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from '@apollo/client/link/context';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

// NOTE: for development is 'http://localhost:4000/'
const httpLink = createHttpLink({
  uri: 'https://quiet-falls-86844.herokuapp.com/',
  fetch,
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  let token = '';

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

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

let apolloClient;
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? client;

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

// eslint-disable-next-line import/no-default-export
export default client;
