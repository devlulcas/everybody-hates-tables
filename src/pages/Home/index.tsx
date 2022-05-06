import { Link } from "react-router-dom";
import { Main, Welcome } from "./styles";

function Home() {
  return (
    <Main>
      <Welcome>
        <h1>WELCOME!</h1>
        <Link to="people">Go see the table</Link>
      </Welcome>
    </Main>
  );
}

export { Home };
