import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'
// This is the main app ( container app itself )
// mount functions display the marketingApp at the specified(passed in as argument) html element


export default()=>{
    return(
        <BrowserRouter>
             <div>
                <Header/>
                {/* // the ref.current argument passed into the mount function back at MarketingApp.js */}
                {/* // gets the parent <div></div> element */}
                <MarketingApp />
            </div>
        </BrowserRouter>
       
    ) 
}