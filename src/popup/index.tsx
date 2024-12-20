import ReactDOM from 'react-dom';
import { App } from './App.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GraphDataProvider } from './GraphDataContext';

const client = new ApolloClient({
  uri: 'https://graphql.intuition-api.com/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GraphDataProvider>
      <App />
    </GraphDataProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
