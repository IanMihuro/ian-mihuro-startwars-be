import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import STARWARSAPI from "./API/starwars-API";
import typeDefs from "./common/typedefs";
import resolvers from "./common/resolvers";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    STARWARSAPI: new STARWARSAPI(
      process.env.SWAP_API_BASE_URL || `https://swapi.dev/api`
    ),
  }),
});

server.applyMiddleware({ app, cors: corsOptions });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀 Server ready at port ${process.env.PORT || 4000}`);
});
