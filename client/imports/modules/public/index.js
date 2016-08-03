import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Chapters from './components/Chapters.jsx';
import StartChapter from './components/StartChapter.jsx';
import BecomeMentor from './components/BecomeMentor.jsx';
import JoinTeam from './components/JoinTeam.jsx';
export { Home as Home };
export { Events as Events };
export { Chapters as Chapters };
export { StartChapter as StartChapter };
export { BecomeMentor as BecomeMentor };
export { JoinTeam as JoinTeam };

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
	}, {
		path: 'join-team',
		component: JoinTeam
	}
];
