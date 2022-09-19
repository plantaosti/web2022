import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
