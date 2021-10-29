import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";

const Pages = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cambrian-frontend" component={Home} />
      </Switch>
    </MainLayout>
  );
};

export default Pages;
