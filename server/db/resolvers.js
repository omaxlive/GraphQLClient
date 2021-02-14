const posts = [
  {
    title: 'item 1',
    detail: 'detail 1',
    author: 'author 1',
  },
  {
    title: 'item 2',
    detail: 'detail 2',
    author: 'author 2',
  },
  {
    title: 'item 3',
    detail: 'detail 3',
    author: 'author 3',
  },
];
const User = require('../models/users');

// Resolvers
const resolvers = {
  Query: {
    getPosts: (_, { input }, context, info) => {
      console.log('context: ', context);
      const results = posts.filter((post) => post.author === input.author);
      return results;
    },
    getAuthors: () => posts,
  },
  Mutation: {
    newUser: async (_, { input }) => {
      const { email } = input;
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error('User exists');
      }

      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log('ERROR:', error);
      }
    },
  },
};

module.exports = resolvers;
