import React from 'react';
import Navbar from './Navbar.jsx';
import * as Colors from 'material-ui/styles/colors.js';
console.log('colors:', Colors);
export default class Nav extends React.Component {
    render() {
        return (
            <div className='wrapper' style={{ position: 'relative' }}>
                <Navbar 
                    id="navbar"
                    tabs={[
                        {
                            title: 'About', 
                        		color: Colors.blue900,
                        		items: [
                        				{
                        						text: 'Values',
                        						href: '#'
                        				}, {
                        						text: 'Team',
                        						href: '#'
                        				}, {
                        						text: 'FAQ',
                        						href: '#'
                        				}, {
                        						text: 'Contact Us',
                        						href: '#'
                        				}
                        		]
                        }, {
                            title: 'Programs', 
                        		color: Colors.green900,
                        		items: [
                        				{
                        						text: 'Chapters',
                        						href: '/chapters'
                        				}, {
                        						text: 'Events',
                        						href: '/events'
                        				}, {
                        						text: 'Camps',
                        						href: '/camps'
                        				}
                        		]
                        }, {
                            title: 'Resources', 
                        		color: Colors.pink800,
                        		items: [
                        				{
                        						text: 'Mentors',
                        						href: '/mentors'
                        				}, {
                        						text: 'Videos',
                        						href: '/videos'
                        				}, {
                        						text: 'Curriculum',
                        						href: '/curriculum'
                        				}, {
                        						text: 'Student Pack',
                        						href: '/student-pack'
                        				}
                        		]
                        }, {
                            title: 'Get Involved',
                        		color: Colors.teal900,
                        		items: [
                        				{
                        						text: 'Start a Chapter',
                        						href: '/start-chapter'
                        				}, {
                        						text: 'Become a Mentor',
                        						href: '/become-mentor'
                        				}, {
                        						text: 'Join Our Team',
                        						href: '/join-team'
                        				}, {
                        						text: 'Partner',
                        						href: '/partner'
                        				}
                        		]
                        }
                    ]}
                />
                <div className="spacer" style={{height: '5vh'}}/>
                {this.props.children}
            </div>
        );
    }
}