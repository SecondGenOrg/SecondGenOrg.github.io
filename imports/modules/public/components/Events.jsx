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
            name: 'IncubateX',
            date: 'August 6-7, 2016',
            imgSrc: 'http://incubatex.org/dfw/img/5.jpg',
            url: 'http://incubatex.org',
            tags: ['Programming', 'Business']
        }];
        const pastEvents = [{
            name: 'EagleHacks',
            date: 'April 2-3, 2016',
            imgSrc: 'http://www.eaglehacks.com/index_files/EagleHacks%20Pictures/Long%20Logo.png',
            url: 'http://www.eaglehacks.com/',
            tags: ['Programming']
        }, {
            name: 'CANHacks',
            date: 'July 24, 2015',
            imgSrc: 'https://external.fsnc1-1.fna.fbcdn.net/safe_image.php?d=AQBIHYofSh2mcTzO&w=476&h=249&url=https%3A%2F%2Fscontent-dfw1-1.xx.fbcdn.net%2Fhphotos-xta1%2Ft31.0-8%2Fs720x720%2F11119417_1672760412960586_4648656253185441276_o.png&cfs=1&upscale=1',
            url: 'http://launchdfw.com/event/canhacks-hackathon/',
            tags: ['Programming']
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