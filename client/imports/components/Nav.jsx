import React from 'react';
import Navbar from './Navbar';
import Colors from 'material-ui/styles/colors';

export default class Nav extends React.Component {
    render() {
        return (
            <div className='wrapper' style={{ position: 'relative' }}>
                <Navbar 
                    id="navbar"
                    tabs={[
                        {
                            title: 'About', 
                        		color: Colors.pink900,
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
                        						href: '#'
                        				}
                        		]
                        }, {
                            title: 'Resources', 
                        		color: Colors.orange900,
                        		items: [
                        				{
                        						text: 'Mentors',
                        						href: '#'
                        				}, {
                        						text: 'Videos',
                        						href: '#'
                        				}, {
                        						text: 'Curriculum',
                        						href: '#'
                        				}, {
                        						text: 'Student Pack',
                        						href: '#'
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