import React from 'react';

import Paper from 'material-ui/Paper'
import EventCard from './EventCard.jsx';
import * as Colors from 'material-ui/styles/colors';
import { events, pastEvents } from '../../../constants/eventsData.json';
export default class Events extends React.Component {
    constructor() {
        super();

        const styles = {
            sectionHeader: {
                background: Colors.green500//'url(http://lorempixel.com/1000/500/nature?id=0'// 'url(img/headers/events.jpg)'
            }
        };
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