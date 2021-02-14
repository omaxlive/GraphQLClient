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
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

const createToken = (user, secret, expiresIn) => {
  console.log(user);
  const { id, email, name, lastName } = user;
  return jwt.sign({ id, email, name, lastName }, secret, { expiresIn });
};
// Resolvers
const resolvers = {
  Query: {
    getPosts: (_, { input }, context, info) => {
      const results = posts.filter((post) => post.author === input.author);
      return results;
    },
    getAuthors: () => posts,
    getUser: async (_, { token }) => {
      const userID = jwt.verify(token, process.env.SECRET);
      return userID;
    },
  },
  Mutation: {
    newUser: async (_, { input }) => {
      const { email, password } = input;
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error('User exists');
      }

      //Hash password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log('ERROR:', error);
      }
    },
    authUser: async (_, { input }) => {
      const { email, password } = input;
      // Check if the user exists
      const userExists = await User.findOne({ email });
      if (!userExists) {
        throw new Error('User not found');
      }
      // Compare the password
      const isPasswordCorrect = await bcryptjs.compare(password, userExists.password);
      if (!isPasswordCorrect) {
        throw new Error('Wrong password');
      }
      // Create token
      return {
        token: createToken(userExists, process.env.SECRET, '24h'),
      };
    },
  },
};

module.exports = resolvers;
