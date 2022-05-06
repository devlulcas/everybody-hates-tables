import { Link } from "react-router-dom";
import { Nav, FancyHeader } from "./styles";

function Header() {
  return (
    <FancyHeader>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
      </Nav>
    </FancyHeader>
  );
}

export { Header };
