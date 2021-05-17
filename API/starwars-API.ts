import { RESTDataSource } from "apollo-datasource-rest";

class STARWARSAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SWAP_API_BASE_URL;
  }
  async getPeople(page: Number) {
    return await this.get(`/people/?page=${page}`);
  }

  async getPerson(name: string, page: Number) {
    return await this.get(`/people/?search=${name}&page=${page}`);
  }
}

export default STARWARSAPI;
