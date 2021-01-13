import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// we take the mount function from the Marketing project that renders it self to the passed in html element
// reusable with angular, vue etc
export default () => {
    // we are getting a reference to the html element this method is being displayed inside of on screen i.e. <div> tag etc
    const ref = useRef(null);

    // when first html is rendered, use effect will display the marketingApp in the referenced div.
    useEffect(()=>{
        // renders the App file we got from Marketing project into the current html element
        mount(ref.current);
    });

    
    return <div ref={ref} />
}