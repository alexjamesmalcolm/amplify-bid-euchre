import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports.js";

Amplify.configure(awsExports);

const App = React.lazy(() => import("./App"));

const ApplicationLoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      Loading Application...
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<ApplicationLoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
