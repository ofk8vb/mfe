import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
// renders the App component at given html element
const mount = (el) => {
    ReactDOM.render(
       <App/>,
        el
    );
}

// If we are in development and in isolation,
// call mount immediately
if( process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')
    // presence of html element inside devRoot means truthy value
    if(devRoot){
        mount(devRoot);
    }
}
// We are running through container, not development 
// so we should export the mount function for container to use
export { mount };