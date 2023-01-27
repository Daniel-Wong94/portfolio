import { BrowserRouter } from "react-router-dom";
import {
  Main,
  NavBar,
  Skills,
  Experience,
  Project,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
