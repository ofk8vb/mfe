import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
// renders the App component at given html element
const mount = (el, { onNavigate, defaultHistory }) => {
    //defaultHistory will only be provided when running in development
  const history = defaultHistory || createMemoryHistory();

  // event listener built into history object provided by createMemoryHistory
  // whenever an event of route navigation happens, history.listen(callback) will be calling the provided
  // callback function

  if (onNavigate) {
      // microapp's route is updated accordingly
    history.listen(onNavigate);
  }

  // history will be either a memory one or a browser one depending on
  // running mode
  ReactDOM.render(<App history={history} />, el);

  // this is to allow children to parent navigation communication
  // we destructure the location property passed by container's history.listen()
  return {
    // container will be calling this method to sync with the microapps path
    onParentNavigate({pathname: nextPathname}){

        // we prevent infinite loop by making sure current pathname is different
        // than the one provided by container 
        const { pathname } = history.location;
        if(pathname !== nextPathname){
            history.push(nextPathname);
        }
    }
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  // presence of html element inside devRoot means truthy value
  if (devRoot) {
      // we pass in a defaultHistory object which is a browser router in development so
      // dev team can know what root they are currently in while testing the microapp
      // normally microapp should be using memory history
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
// We are running through container, not development
// so we should export the mount function for container to use
export { mount };
