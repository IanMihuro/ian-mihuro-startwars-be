import gql from "graphql-tag";
import testServer from "../testUtils/testServer";
import { peopleSample, personSample } from "../testUtils/personSample";
import STARWARSAPI from "../../API/starwars-API";

describe("StartWarsAPI", () => {
  it("fetches all people", async () => {
    const starwarsAPI: any = new STARWARSAPI(`https://swapi.dev/api`);

    const getStub = (): Promise<any> => Promise.resolve(peopleSample());
    starwarsAPI.get = jest.fn(getStub);

    const { query } = testServer(() => ({ STARWARSAPI: starwarsAPI }));

    const GET_PEOPLE = gql`
      query GetPeople($page: Int!) {
        people(page: $page) {
          count
          next
          previous
          results {
            name
            height
            mass
            gender
            homeworld
          }
        }
      }
    `;

    const res = await query({
      query: GET_PEOPLE,
      variables: {
        page: 1,
      },
    });

    expect(res.errors).toBe(undefined);
    expect(starwarsAPI.get).toHaveBeenCalledWith("/people/?page=1");
    expect(res?.data?.people).toEqual(peopleSample());
  });

  it("searches for a person", async () => {
    const starwarsAPI: any = new STARWARSAPI(`https://swapi.dev/api`);

    const getStub = (): Promise<any> => Promise.resolve(personSample());
    starwarsAPI.get = jest.fn(getStub);

    const { query } = testServer(() => ({ STARWARSAPI: starwarsAPI }));

    const GET_PEOPLE = gql`
      query GetPerson($name: String!, $page: Int!) {
        person(name: $name, page: $page) {
          count
          next
          previous
          results {
            name
            height
            mass
            gender
            homeworld
          }
        }
      }
    `;

    const res = await query({
      query: GET_PEOPLE,
      variables: {
        page: 1,
        name: "skywalker",
      },
    });

    expect(res.errors).toBe(undefined);
    expect(starwarsAPI.get).toHaveBeenCalledWith(
      "/people/?search=skywalker&page=1"
    );
    expect(res?.data?.person).toEqual(personSample());
  });
});
