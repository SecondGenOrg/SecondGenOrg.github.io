import React from 'react';

import Paper from 'material-ui/Paper'
import EventCard from './EventCard.jsx';
import * as Colors from 'material-ui/styles/colors'

export default class Events extends React.Component {
    constructor() {
        super();

        const styles = {
            sectionHeader: {
                background: Colors.green500//'url(http://lorempixel.com/1000/500/nature?id=0'// 'url(img/headers/events.jpg)'
            }
        };
        const events = [{
            name: 'EagleHacks 2',
            date: 'November',
            imgSrc: '/img/events/eaglehacks3.png',
            url: 'http://www.eaglehacks.com',
            tags: ['Tech', 'Hackathon']
        }, {
            name: 'Local Hack Day',
            date: 'December 3, 2016',
            imgSrc: 'https://mrtower.files.wordpress.com/2015/09/local-hack-day.png',
            url: 'https://localhackday.mlh.io',
            tags: ['Tech', 'Hackathon']
        }, {
            name: 'Suburbia Film Festival',
            date: 'January 2017',
            imgSrc: 'http://www.thecitydrivegroup.com/portals/5/Images/film%20roll.jpg',
            url: 'http://www.suburbiafilm.com',
            tags: ['Film', 'Student']
        }, {
            name: 'Tech Women\'s Conference',
            date: 'February 2017',
            tags: ['Entrepreneurship', 'Tech']
        }, {
            name: 'TEDx',
            date: 'March 2017',
            imgSrc: 'http://www.reelnreel.com/wp-content/uploads/2014/07/TEDx_logo1.jpg',
            url: 'www.tedxallen.com',
            tags: ['General']
        }, {
            name: 'EagleHacks 3',
            date: 'April 2017',
            imgSrc: '/img/events/eaglehacks3.png',
            url: 'http://www.eaglehacks.com',
            tags: ['Tech', 'Hackathon']
        }];
        const pastEvents = [{
            name: 'IncubateX',
            date: 'August 6-7, 2016',
            imgSrc: 'https://avatars3.githubusercontent.com/u/18596616?v=3&s=200',
            url: 'http://incubatex.org',
            tags: ['Business', 'Hackathon']
        }, {
            name: 'TopGolf Social',
            date: 'May 13, 2016',
            imgSrc: 'http://agencythreesixty.com/wp-content/uploads/2011/08/TopGolf-featured-image.gif',
            url: 'https://www.eventbrite.com/e/topgolf-social-for-student-leaders-creators-tickets-25188128370#',
            tags: ['General']
        }, {
            name: 'EagleHacks',
            date: 'April 2, 2016',
            imgSrc: 'http://www.eaglehacks.com/index_files/EagleHacks%20Pictures/Long%20Logo.png',
            url: 'http://www.eaglehacks.com',
            tags: ['Tech', 'Hackathon']
        }, {
            name: 'Local Hack Day',
            date: 'October 9, 2015',
            imgSrc: 'https://mrtower.files.wordpress.com/2015/09/local-hack-day.png',
            url: 'https://localhackday.mlh.io',
            tags: ['Tech', 'Hackathon']
        }, {
            name: 'CANHacks 2',
            date: 'August 9, 2015',
            imgSrc: 'https://external.fsnc1-1.fna.fbcdn.net/safe_image.php?d=AQBIHYofSh2mcTzO&w=476&h=249&url=https%3A%2F%2Fscontent-dfw1-1.xx.fbcdn.net%2Fhphotos-xta1%2Ft31.0-8%2Fs720x720%2F11119417_1672760412960586_4648656253185441276_o.png&cfs=1&upscale=1',
            url: 'https://www.facebook.com/CANHacks-1648416775394950/',
            tags: ['Programming']
        }, {
            name: 'CANHacks',
            date: 'July 24, 2015',
            imgSrc: 'https://external.fsnc1-1.fna.fbcdn.net/safe_image.php?d=AQBIHYofSh2mcTzO&w=476&h=249&url=https%3A%2F%2Fscontent-dfw1-1.xx.fbcdn.net%2Fhphotos-xta1%2Ft31.0-8%2Fs720x720%2F11119417_1672760412960586_4648656253185441276_o.png&cfs=1&upscale=1',
            url: 'https://www.facebook.com/CANHacks-1648416775394950/',
            tags: ['Programming']
        }, {
            name: 'SecondGen Summer Confrence',
            date: 'June 9, 2015',
            imgSrc: 'http://secondgen.org/img/logos/SG.png',
            url: 'http://secondgen.org',
            tags: ['General']
        }];
        this.state = { styles, events, pastEvents };
    }

    render() {
        const { styles, events, pastEvents } = this.state;
        var eventGridContent = events.map(function(event) {
            return(
                <div 
                    key={event.name+event.date}
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-12 event-card-wrapper">
                    <EventCard
                        name={event.name}
                        date={event.date}
                        imgSrc={event.imgSrc}
                        url={event.url}
                        tags={event.tags}
                    />
                </div>
            );
        });
        var pastEventGridContent = pastEvents.map(function(event) {
            return(
                <div 
                    key={event.name+event.date}
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-12 event-card-wrapper">
                    <EventCard
                        name={event.name}
                        date={event.date}
                        imgSrc={event.imgSrc}
                        url={event.url}
                        tags={event.tags}
                        pastEvent={true}
                    />
                </div>
            );
        });
        return (
            <div id="events-wrapper" className="page-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Events</h1>
                        <p>Attend community events hosted by SecondGen and its partners.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <div className="row">
                        {eventGridContent}
                    </div>
                    <div className="horizontal-divider"></div>
                    <h2>Past Events</h2>
                    <div className="row">
                        {pastEventGridContent}
                    </div>
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}