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
            },
            overlayStyle: {
                padding: 0,
                color: 'red'
            }
        }
        this.state = { styles };
        this.defaultProps = {
            pastEvent: false
        }
    }
    
    render() {
        const { styles} = this.state;
        const tagChips = this.props.tags.map(function(tag) {
           return(
               <Chip style={styles.chip} className="event-tag" key={tag}>{tag}</Chip>
           );
        });
        return(
            <Card zDepth={3}>
                <CardMedia 
                    overlay={
                        <CardTitle title={this.props.name} subtitle={this.props.date} />
                    }
                    overlayStyle={styles.overlayStyle}>
                    <img className='card-img' src={this.props.imgSrc} />
                </CardMedia>
                <CardText>
                    {tagChips}
                </CardText>
                <CardActions>

                    <a href={this.props.url} target="_blank">
                        <FlatButton
                            primary={true}
                            label="Learn More" 
                            disabled={!this.props.url}
                        />
                    </a>
                </CardActions>
            </Card>
        );
    }
}