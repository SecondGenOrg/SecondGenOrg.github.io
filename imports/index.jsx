
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import loadModules from './loadModules';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as Public from './modules/public';
import ReactGA from 'react-ga';
injectTapEventPlugin();
const root = loadModules(Public.Home, Public);
if(typeof document !== 'undefined') {
    ReactGA.initialize('UA-82081367-1');
    const router = (
    	<Router
    		onUpdate={
    			() => {
        			window.scrollTo(0, 0);
                    ReactGA.set({ page: window.location.pathname });
                    ReactGA.pageview(window.location.pathname);
        		}
    		} 
    		history={browserHistory} routes={root} 
    	/>
    );
    console.log(router);
    render(router, document.getElementById('app-root'));
}

export default root;