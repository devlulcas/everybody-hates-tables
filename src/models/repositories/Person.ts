import { Person } from "../entities/Person";

class PersonRepository {
  private static baseUrl = import.meta.env.VITE_API_URL + "/people";

  // Gets an array of people
  static async getMany(): Promise<Person[]> {
    const response = await fetch(this.baseUrl);
    const json = await response.json();

    const peopleArray: Person[] = json.people.map(
      (person: Person) => new Person(person)
    );

    return peopleArray;
  }
}

export { PersonRepository };
