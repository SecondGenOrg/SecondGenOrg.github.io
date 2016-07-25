import Home from './components/Home.jsx';
import Events from './components/Events.jsx'
export { Home as Home };
export { Events as Events };

export function initialize() {

}

export const routes = [{
    path: 'home',
    component: Home,
}, {
	path: 'events',
	component: Events
}];
