import React from 'react';
import Navbar from './Navbar';
export default class Nav extends React.Component {
    render() {
        return (
            <div className='wrapper' style={{ position: 'relative' }}>
                <Navbar 
                    id="navbar"
                    tabs={[
                        {
                            title: 'About', 
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
                        		items: [
                        				{
                        						text: 'Start a Chapter',
                        						href: '#'
                        				}, {
                        						text: 'Become a Mentor',
                        						href: '#'
                        				}, {
                        						text: 'Join Our Team',
                        						href: '#'
                        				}, {
                        						text: 'Partner',
                        						href: '#'
                        				}
                        		]
                        }
                    ]}
                />
                {this.props.children}
            </div>
        );
    }
}