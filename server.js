const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema')
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true, //in the browser tool to make queries
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));