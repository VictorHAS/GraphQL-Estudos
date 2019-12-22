import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({ cache, link });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
