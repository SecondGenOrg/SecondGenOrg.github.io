import React from 'react';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
export default class EventCard extends React.Component {
    constructor() {
        super();
        
        const styles= {
            chip: {
                display: 'inline-block',
                margin: '2px',
                marginBottom: 0,
                fontSize: '0.5em'
            }
        }
        this.state = { styles };
    }
    render() {
        const { styles } = this.state;
        return(
            <Card zDepth={3}>
                <CardMedia overlay={
                        <CardTitle title={this.props.name} subtitle={this.props.date} />
                    }>
                    <img src={this.props.imgSrc} />
                </CardMedia>
                <CardText>
                    <Chip style={styles.chip} className="event-tag">Programming</Chip>
                    <Chip style={styles.chip} className="event-tag">Business</Chip>
                </CardText>
                <CardActions>
                    <a href={this.props.url}>
                        <FlatButton
                            primary={true}
                            label="Learn More" 
                        />
                    </a>
                </CardActions>
            </Card>
        );
    }
}