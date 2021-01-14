import React from 'react';
import MarketingApp from './components/MarketingApp'
// This is the main app ( container app itself )
// mount functions display the marketingApp at the specified(passed in as argument) html element


export default()=>{
    return <div>
        <h1>Hi there my friend, hope to figurse out awsas :*!</h1>
        <h1/>
        {/* // the ref.current argument passed into the mount function back at MarketingApp.js */}
        {/* // gets the parent <div></div> element */}
        <MarketingApp />
    </div>
}