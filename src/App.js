import { BrowserRouter } from "react-router-dom";
import { Main, NavBar, Skills, Experience, Project } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Skills />
      <Experience />
      <Project />
    </BrowserRouter>
  );
};

export default App;
