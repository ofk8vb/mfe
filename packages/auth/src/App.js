import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// Whenever application is build for production, classes will be generated with prefix of ma
// not jss which could lead to classname collision inside container if someother
// microfrontend is using the same css in js library

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history, onSignIn}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route exact path="/auth/signup">
              <Signup onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
