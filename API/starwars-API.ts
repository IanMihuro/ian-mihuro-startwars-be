import { RESTDataSource } from "apollo-datasource-rest";

class STARWARSAPI extends RESTDataSource {
  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }
  async getPeople(page: Number) {
    try {
      return await this.get(`/people/?page=${page}`);
    } catch (error) {
      return error;
    }
  }

  async getPerson(name: string, page: Number) {
    try {
      return await this.get(`/people/?search=${name}&page=${page}`);
    } catch (error) {
      return error;
    }
  }
}

export default STARWARSAPI;
