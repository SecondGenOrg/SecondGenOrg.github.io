
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import loadModules from './loadModules';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as Public from './modules/public';

injectTapEventPlugin();
const root = loadModules(Public.Home, Public);
console.log('root: ', root);
if(typeof document !== 'undefined') {
    const router = (
    	<Router
    		onUpdate={
    			() => {
        			window.scrollTo(0, 0)
        		}
    		} 
    		history={browserHistory} routes={root} 
    	/>
    );
    console.log(router);
    render(router, document.getElementById('app-root'));
}

export default root;