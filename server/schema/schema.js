const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
  { name: 'Do Epic Shit', genre: 'Motivational', id: '2', authorId: '2' },
  {
    name: 'The Psychology of Money',
    genre: 'Personal Finance',
    id: '3',
    authorId: '3',
  },
];

var authors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Ankur Warikoo', age: 42, id: '2' },
  { name: 'Morgan Housel', age: 34, id: '2' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});