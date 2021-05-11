import { RESTDataSource } from "apollo-datasource-rest";

class STARWARSAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api";
  }

  async getAllPeople() {
    return this.get("/people/");
  }

  async nextPage(page: Number) {
    return this.get(`/people/?page=${page}`);
  }

  async getPerson(name: string) {
    return this.get(`/people/?search=${name}`);
  }
}

export default STARWARSAPI;
