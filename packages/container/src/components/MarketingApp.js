import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// we take the mount function from the Marketing project that renders it self to the passed in html element
// reusable with angular, vue etc
export default () => {
    // we are getting a reference to the html element this method is being displayed inside of on screen i.e. <div> tag etc
    const ref = useRef(null);

    // this is the history object currently used in container app(browser history)
    const history = useHistory();

    // when first html is rendered, use effect will display the marketingApp in the referenced div.
    useEffect(()=>{

        // renders the App file we got from Marketing project into the current html element
        // we are also passing in a onNavigate callback function in an object that will be used to sync up history
        const {onParentNavigate} = mount(ref.current,{

            // history.listen() method that will run this onNavigate callback
            // automatically provides a location object as argument to the callback function it runs
            // location object will have a pathname property which tells the last location of the microapp
            // we rename the pathname variable we destructure to nextPathname
            // history.listen inside the microapp will use this callback function
            onNavigate: ({pathname: nextPathname}) =>{

                // nextPathname(location.pathname) gives information to the microapp about
                // where the container is trying to navigate too
                const { pathname } = history.location;

                // we will navigate only if there is desynchronization between microapp and container 
                // this is done to prevent infinite loop situations
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                // history.push(nextPathname) will navigate the current microapp history to the provided Path
                }
                
            }
        });

        // provides a location object that has a pathname property automatically
        // to the callback functions;
        // container history will update itself according to the rules set inside microapp
        history.listen(onParentNavigate)
    },[]);

    
    return <div ref={ref} />
}