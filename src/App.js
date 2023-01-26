import { BrowserRouter } from "react-router-dom";
import { Main, NavBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  );
};

export default App;
