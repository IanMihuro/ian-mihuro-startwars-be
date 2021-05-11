//TODO revisit this and place appropriate data types
const resolvers = {
  Query: {
    person: async (_source: any, { name }: any, { dataSources }: any) =>
      dataSources.STARWARSAPI.getPerson(name),
    people: async (_source: any, _args: any, { dataSources }: any) =>
      dataSources.STARWARSAPI.getAllPeople(),
    nextPage: async (_source: any, { page }: any, { dataSources }: any) =>
      dataSources.STARWARSAPI.nextPage(page),
  },
};

export default resolvers;
