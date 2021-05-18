import {
  createTestClient,
  ApolloServerTestClient,
} from "apollo-server-testing";
import { ApolloServer } from "apollo-server-express";
import resolvers from "../../common/resolvers";
import typeDefs from "../../common/typedefs";

export default function testServer(dataSources: any): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  );
}
