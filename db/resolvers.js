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
};

module.exports = resolvers;
