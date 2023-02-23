const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.set('strictQuery', false);

// allow cross-origin requests
app.use(cors());

// connect to mongodb db
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://thekrprince:thekrprince@gql-learning.6nkdtyb.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
