import React from "react";
import { Provider } from "react-redux";
import OnboardProvider from "./context/OnboardContext";
import store from "./state";

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <OnboardProvider>{children}</OnboardProvider>
    </Provider>
  );
};

export default Providers;
