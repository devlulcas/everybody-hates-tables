import { createContext, ReactChild, useContext, useState } from "react";

type PeopleProviderProps = {
  children: ReactChild;
};

type PeopleContextType = {
  people: string[];
  savePerson: (newPeople: string) => void;
  removePerson: (id: string) => void;
  saveManyPeople: (newPeople: string[]) => void;
  removeManyPeople: () => void;
};

const PeopleContext = createContext({} as PeopleContextType);

function PeopleProvider({ children }: PeopleProviderProps) {
  const [people, setPeople] = useState([] as string[]);
  console.log(people);

  function savePerson(person: string) {
    if (people.includes(person)) return;
    setPeople([...people, person]);
  }

  function removePerson(id: string) {
    if (!people.includes(id)) return;
    const ids = people.filter((person) => person !== id);
    setPeople(ids);
  }

  function saveManyPeople(newPeople: string[]) {
    setPeople(newPeople);
  }

  function removeManyPeople() {
    setPeople([]);
  }

  return (
    <PeopleContext.Provider
      value={{
        people,
        savePerson,
        removePerson,
        saveManyPeople,
        removeManyPeople,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}

const usePeople = (): PeopleContextType => {
  const context = useContext(PeopleContext);
  return context;
};

export { PeopleProvider, usePeople };
