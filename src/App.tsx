import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PeoplePage } from "./pages/PeoplePage";
import { Default } from "./templates/Default";
import { PeopleProvider } from "./context/People";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
