// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AppWrapper from './App'; // Ensure you are importing the new AppWrapper component
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWrapper />
  </ApolloProvider>,
  document.getElementById('root')
);
