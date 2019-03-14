import { Schema } from './schema.js';
import graphqlHTTP from 'express-graphql';
import express from 'express';
var cors = require('cors')

const app = express();
app.use(cors());

app.get('/', function(req, res) {
  res.redirect('/graphql');
});

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(3000);

console.log('Go to http://localhost:3000/graphql to run queries!');
