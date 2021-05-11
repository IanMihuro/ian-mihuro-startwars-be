import express from "express";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import STARWARSAPI from "./API/starwars-API";
import typeDefs from "./common/typedefs";
import resolvers from "./common/resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    STARWARSAPI: new STARWARSAPI(),
  }),
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀 Server ready at port ${process.env.PORT || 4000}`);
});
