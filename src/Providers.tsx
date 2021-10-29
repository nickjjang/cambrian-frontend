import React from "react";
import { Provider } from "react-redux";
import store from "./state";

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
