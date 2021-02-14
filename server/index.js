const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const connectDB = require('./config/db');

// Connect DB
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const myContext = 'context example';
    return { myContext };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready in the URL ${url}`);
});
