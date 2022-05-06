import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Base } from "./styles";

function Default() {
  return (
    <Base>
      <Header />
      <Outlet />
    </Base>
  );
}

export { Default };
