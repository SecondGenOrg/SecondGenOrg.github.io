import React from 'react';
import ChaptersMap from './ChaptersMap.jsx';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import chaptersData from '../../../constants/chaptersData.json'
export default class Chapters extends React.Component {
    constructor() {
        super();
    }
    render() {
        var chaptersCards = chaptersData.map(function(chapter) {
            return (
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6 chapter-card-wrapper" key={chapter.key}>
                    <Card zDepth={3}>
                        <CardTitle 
                            title={chapter.key} 
                            subtitle={chapter.regional ? "Regional Chapter" : chapter.city} 
                            titleStyle={{
                                fontSize: '3vh',
                                lineHeight: 1.1
                            }}
                            style={{
                                paddingBottom: 0
                            }}
                        />
                        <CardActions
                            style={{
                                position: 'absolute',
                                bottom: 0
                            }}>
                            { 
                                chapter.url
                                ? 
                                <a 
                                    href={chapter.url}
                                    target="_blank"
                                >
                                    <FlatButton
                                        primary={true}
                                        label="Learn More" 
                                    />
                                </a>
                                : 
                                null
                            }   
                        </CardActions>
                    </Card>
                </div>
            )
        })
        return (
            <div id="chapters-wrapper" className="page-wrapper">
            	<section className="header-wrapper valign-wrapper"> 
                    <div className="header-text valign">
                        <h1>Chapters</h1>
                        <p>Find a SecondGen chapter near you.</p>
                    </div>
	            	<ChaptersMap
	            		id="chapters-map"
	            	/>
                </section>
                <div className="content-wrapper">
                    <div className="row">
                        {chaptersCards}
                    </div>
                    <Paper id="cover" />
                </div>
            </div>

        );
    }
}