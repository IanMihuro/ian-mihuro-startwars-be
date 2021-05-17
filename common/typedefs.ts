import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }

  type People {
    count: Int!
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    person(name: String!, page: Int!): People
    people(page: Int!): People
  }
`;

export default typeDefs;
