import { BrowserRouter } from "react-router-dom";
import { Main, NavBar, Skills } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Skills />
    </BrowserRouter>
  );
};

export default App;
