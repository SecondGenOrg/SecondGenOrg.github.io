import React from 'react';

import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import Colors from 'material-ui/styles/colors'

export default class Events extends React.Component {
    constructor() {
        super();

        const styles = {
            sectionHeader: {
                background: Colors.green500//'url(http://lorempixel.com/1000/500/nature?id=0'// 'url(img/headers/events.jpg)'
            },
            chip: {
                display: 'inline-block',
                margin: '2px',
                marginBottom: 0,
                fontSize: '0.5em'
            }
        };

        this.state = { styles };
    }

    render() {
        const { styles } = this.state;
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
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 event-card-wrapper">
                            <Card
                            zDepth={3}>
                                <CardMedia
                                    overlay={
                                        <CardTitle title="IncubateX" subtitle="August 6-7" />
                                    }
                                >
                                    <img src="http://incubatex.org/img/5.jpg" />
                                </CardMedia>
                                <CardText>
                                    <Chip style={ styles.chip }className="event-tag">Programming</Chip>
                                    <Chip style={ styles.chip } className="event-tag">Business</Chip>
                                </CardText>
                                <CardActions>
                                    <a href="http://incubatex.org">
                                        <FlatButton
                                            primary={true}
                                            label="Learn More" 
                                        />
                                    </a>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}