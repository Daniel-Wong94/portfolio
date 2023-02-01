import { BrowserRouter } from "react-router-dom";
import {
  Main,
  NavBar,
  Skills,
  Experience,
  Project,
  Footer,
} from "./components";
import { IntersectionObserverContext } from "./context/IntersectionObserverContext";
import styles from "./components/section/Section.module.css";

const App = () => {
  const options = {
    root: null,
    rootMargin: "10px",
    threshold: 0.2,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList = styles.fadeToLeft;
        observer.unobserve(entry.target);
      }
    });
    return () => observer.disconnect();
  };

  const observer = new IntersectionObserver(callback, options);

  return (
    <BrowserRouter>
      <IntersectionObserverContext.Provider value={observer}>
        <NavBar />
        <Main />
        <Skills />
        <Experience />
        <Project />
        <Footer />
      </IntersectionObserverContext.Provider>
    </BrowserRouter>
  );
};

export default App;
