import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Chapters from './components/Chapters.jsx';
export { Home as Home };
export { Events as Events };
export { Chapters as Chapters }

export function initialize() {

}

export const routes = [
	{
    path: 'home',
    component: Home,
	}, {
		path: 'events',
		component: Events
	}, {
		path: 'chapters',
		component: Chapters
	}
];
