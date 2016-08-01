import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Chapters from './components/Chapters.jsx';
import StartChapter from './components/StartChapter.jsx';
export { Home as Home };
export { Events as Events };
export { Chapters as Chapters };
export { StartChapter as StartChapter };

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
	}, {
		path: 'start-chapter',
		component: StartChapter
	}
];
