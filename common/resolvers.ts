//TODO revisit this and place appropriate data types
import type { IResolvers } from "apollo-server-express";

const resolvers: IResolvers = {
  Query: {
    person: async (_, { name, page }, { dataSources }) =>
      await dataSources.STARWARSAPI.getPerson(name, page),
    people: async (_, { page }, { dataSources }) =>
      await dataSources.STARWARSAPI.getPeople(page),
  },
};

export default resolvers;
