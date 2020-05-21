import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { API, graphqlOperation, Auth } from "aws-amplify";
// import {} from "../graphql/mutations";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import { routes } from "config/routes";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.app}>
    <Router>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          {Object.entries(routes).map(
            ([key, { href, isExternal = false, Component }]) =>
              !isExternal && (
                <Route exact key={key} path={href}>
                  {<Component />}
                </Route>
              )
          )}
        </Suspense>
      </Switch>
    </Router>
  </div>
);

export default App;
