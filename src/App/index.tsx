import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { API, graphqlOperation, Auth } from "aws-amplify";
// import {} from "../graphql/mutations";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import { routes } from "config/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          {Object.entries(routes).map(
            ([key, { href, isExternal = false, Component }]) =>
              !isExternal && (
                <Route key={key} path={href}>
                  {<Component />}
                </Route>
              )
          )}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
