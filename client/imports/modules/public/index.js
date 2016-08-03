import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Chapters from './components/Chapters.jsx';
import StartChapter from './components/StartChapter.jsx';
import BecomeMentor from './components/BecomeMentor.jsx';
export { Home as Home };
export { Events as Events };
export { Chapters as Chapters };
export { StartChapter as StartChapter };
export { BecomeMentor as BecomeMentor };

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
	}, {
		path: 'become-mentor',
		component: BecomeMentor
	}
];
