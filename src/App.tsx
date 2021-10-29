import classNames from "classnames";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import Views from "./views";

const App = () => {
  const { isDark } = useTheme();
  return (
    <>
      <Helmet>
        <body className={classNames({ dark: isDark, 'bg-gray-900': isDark })} />
      </Helmet>
      <div className="App mx-0">
        <Router>
          <Switch>
            <Route component={Views} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
