import { BrowserRouter } from "react-router-dom";
import { Main, NavBar, Skills, Experience } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Skills />
      <Experience />
    </BrowserRouter>
  );
};

export default App;
