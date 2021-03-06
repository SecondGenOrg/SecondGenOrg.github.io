import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Chapters from './components/Chapters.jsx';
import StartChapter from './components/StartChapter.jsx';
import BecomeMentor from './components/BecomeMentor.jsx';
import JoinTeam from './components/JoinTeam.jsx';
import Partner from './components/Partner.jsx';
import Mentors from './components/Mentors.jsx';
import Videos from './components/Videos.jsx';
import StudentPack from './components/StudentPack.jsx';
import Curriculum from './components/Curriculum.jsx';
import Contests from './components/Contests.jsx';
import FAQ from './components/FAQ.jsx';
import Team from './components/Team.jsx';
import Partners from './components/Partners.jsx';
import AboutUs from './components/AboutUs.jsx';

export { Home as Home };
export { Events as Events };
export { Chapters as Chapters };
export { StartChapter as StartChapter };
export { BecomeMentor as BecomeMentor };
export { JoinTeam as JoinTeam };
export { Partner as Partner };
export { Mentors as Mentors };
export { Videos as Videos };
export { StudentPack as StudentPack };
export { Curriculum as Curriculum };
export { Contests as Contests };
export { FAQ as FAQ };
export { Team as Team };
export { Partners as Partners };
export { AboutUs as AboutUs };
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
	}, {
		path: 'partner',
		component: Partner
	}, {
		path: 'mentors',
		component: Mentors
	}, {
		path: 'videos',
		component: Videos
	}, {
		path: 'student-pack',
		component: StudentPack
	}, {
		path: 'curriculum',
		component: Curriculum
	}, {
		path: 'contests',
		component: Contests
	}, {
		path: 'faq',
		component: FAQ
	}, {
		path: 'team',
		component: Team
	}, {
		path: 'partners',
		component: Partners
	}, {
		path: 'about-us',
		component: AboutUs
	}
];