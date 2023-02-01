import React, { createContext } from "react";

export const IntersectionObserverContext = createContext();

const IntersectionObserverProvider = (props) => {
  return (
    <IntersectionObserverProvider.Provider>
      {props.children}
    </IntersectionObserverProvider.Provider>
  );
};

export default IntersectionObserverProvider;
