import { People } from "../../components/People";
import { PeopleProvider } from "../../context/People";

function PeoplePage() {
  return (
    <PeopleProvider>
      <People />
    </PeopleProvider>
  );
}

export { PeoplePage };
