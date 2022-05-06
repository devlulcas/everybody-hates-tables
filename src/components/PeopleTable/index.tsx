import { useEffect, useState } from "react";
import { usePeople } from "../../context/People";
import { Person } from "../../models/entities/Person";
import { RowCheckbox, Table, TableBody, TableHeader } from "./styles";

type TableProps = {
  people: Person[];
};

function PeopleTable({ people }: TableProps) {
  const {
    people: peeps,
    savePerson,
    removePerson,
    saveManyPeople,
    removeManyPeople,
  } = usePeople();

  return (
    <Table>
      <TableHeader>
        <th></th>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Interest</th>
        <th>Alive</th>
        <th>Number of children</th>
        <th>Money</th>
      </TableHeader>

      <TableBody>
        {people.map((person) => {
          return (
            <tr key={person.identifier}>
              <td>
                <RowCheckbox
                  value={person.identifier}
                  checked={peeps.includes(person.identifier)}
                  onChange={(event) => {
                    if (event.target.checked) savePerson(event.target.value);
                    removePerson(event.target.value);
                  }}
                />
              </td>
              <td>{person.identifier}</td>
              <td>{person.firstName + " " + person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.interestedIn}</td>
              <td>{person.alive ? "Y" : "N"}</td>
              <td>{person.childrenCounter}</td>
              <td>R$ {person.money}</td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}

export { PeopleTable };
