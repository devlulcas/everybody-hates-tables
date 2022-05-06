import { useEffect, useState } from "react";
import { PeopleTable } from "../PeopleTable";
import { LoadScreen } from "../LoadScreen";
import { Person } from "../../models/entities/Person";
import { PersonRepository } from "../../models/repositories/Person";
import { Main, Box, Button } from "./styles";
import { usePeople } from "../../context/People";

function People() {
  const { people: peeps } = usePeople();
  const [people, setPeople] = useState<Person[]>([]);

  const [selectedPeopleMoney, setSelectedPeopleMoney] = useState(0);
  const [selectedPeopleChildren, setSelectedPeopleChildren] = useState(0);

  const [peopleMoney, setPeopleMoney] = useState(0);
  const [peopleChildren, setPeopleChildren] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    const people = await PersonRepository.getMany();
    setPeople(people);
    // Total of children
    setPeopleChildren(
      people.reduce((acc, person) => (acc += person.childrenCounter), 0)
    );
    // Total of money
    setPeopleMoney(people.reduce((acc, person) => (acc += person.money), 0));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [loading]);

  const LoadedTable = () => {
    return loading ? <LoadScreen /> : <PeopleTable people={people} />;
  };

  // Real objects
  const objs = people.filter((person) => {
    return peeps.includes(person.identifier);
  });

  useEffect(() => {
    console.log(objs);

    setSelectedPeopleChildren(
      objs.reduce((acc, person) => (acc += person.childrenCounter), 0)
    );

    // Total of money
    setSelectedPeopleMoney(
      objs.reduce((acc, person) => (acc += person.money), 0)
    );
  }, [objs]);

  return (
    <Main>
      <div>{people && <LoadedTable />}</div>

      <Box>
        <h2>Selected people</h2>
        <p>
          Money:
          <strong>{selectedPeopleMoney}</strong>
        </p>
        <p>
          Number of children:
          <strong>{selectedPeopleChildren}</strong>
        </p>
      </Box>

      <Box>
        <h2>Everyone</h2>
        <p>
          Money:
          <strong>{peopleMoney}</strong>
        </p>
        <p>
          Number of children:
          <strong>{peopleChildren}</strong>
        </p>
      </Box>

      <Box>
        <Button onClick={() => console.log("Sending: " + peeps)}>
          Send selected people
        </Button>
      </Box>
    </Main>
  );
}

export { People };
