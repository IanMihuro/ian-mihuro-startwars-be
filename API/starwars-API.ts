import { RESTDataSource } from "apollo-datasource-rest";

class STARWARSAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }
  async getPeople(page: Number) {
    return this.get(`/people/?page=${page}`);
  }

  async getPerson(name: string, page: Number) {
    return await this.get(`/people/?search=${name}&page=${page}`);
  }
}

export default STARWARSAPI;
