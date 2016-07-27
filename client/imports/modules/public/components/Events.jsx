import React from 'react';

import Paper from 'material-ui/Paper'
import EventCard from './EventCard';
import Colors from 'material-ui/styles/colors'

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
            date: 'August 6-7',
            imgSrc: 'http://incubatex.org/sf/img/5.jpg',
            url: 'https://incubatex.org',
            tags: ['Programming', 'Business']
        }];
        const pastEvents = [{
            name: 'Old Event',
            date: 'June 9',
            imgSrc: 'http://lorempixel.com/400/200/',
            url: '#',
            tags: ['Music', 'Film']
        }];
        this.state = { styles, events, pastEvents };
    }

    render() {
        const { styles, events, pastEvents } = this.state;
        var eventGridContent = events.map(function(event) {
            return(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 event-card-wrapper">
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
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 event-card-wrapper">
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
            <div id="events-wrapper" className="content-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Events</h1>
                        <p>Attend community events hosted by SecondGen and its partners.</p>
                    </div>
                </section>
                <div className="grid-container">
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