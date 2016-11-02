import React from 'react';
import ChaptersMap from './ChaptersMap.jsx';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import chaptersData from '../../../constants/chaptersData.json'
export default class Chapters extends React.Component {
    constructor() {
        super();
    }
    render() {
        /*var chaptersCards = chaptersData.map(function(chapter) {
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
        })*/
        return (
            <div id="chapters-wrapper" className="page-wrapper">
            	<section className="header-wrapper valign-wrapper"> 
                    <div className="header-text valign">
                        <h1>Chapters</h1>
                        <p>SecondGen in your community.</p>
                    </div>
	            	<ChaptersMap
	            		id="chapters-map"
	            	/>
                </section>
                <div className="content-wrapper">
                    <Paper zDepth={3} style={{padding: '5vh', width: window.innerWidth > 600 ? '75%' : '85%', margin: 'auto'}}>
                        <h2>Overview</h2>
                        <p>Simply put, a chapter consists of a group of driven and passionate students ready to develop their idea into a startup with the support of SecondGen. As a chapter, you receive Secondgen resources such as our curriculum, special access to events hosted by SecondGen, mentorship, access to a worldwide network of like-minded individuals, and notifications of vertical specific opportunities in your area. </p>
                        <p>Chapters can take the form of clubs at schools or extend into community meetup groups that get together biweekly. Our chapters are built to bring and promote entrepreneurship into your local youth community.</p>
                    </Paper>
                    <div className="row" style={{ width: window.innerWidth > 600 ? '78%' : '88%', margin: 'auto'}}>
                        <div className="col-xs-12 col-sm-6" style={{paddingTop: '3vh'}}>
                            <Card zDepth={3}>
                                <CardTitle 
                                  title="Start a SecondGen Chapter"
                                  titleStyle={{width: '100%'}}/>
                                <CardActions>
                                    <a target="_blank" href="https://secondgen.gitbooks.io/secondgen-chapter-guide/content/chapter1.html">
                                        <FlatButton label="Chapter Guide" primary={true}/>
                                    </a>
                                    <Link to="/start-chapter">
                                      <FlatButton label="Application" primary={true}/>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-xs-12 col-sm-6" style={{paddingTop: '3vh'}}>
                            <Card zDepth={3}>
                                <CardTitle 
                                  title="Partner an Existing Club"
                                  titleStyle={{width: '100%'}}/>
                                <CardActions>
                                    <a target="_blank" href="https://secondgen.gitbooks.io/secondgen-chapter-guide/content/chapter1.html">
                                        <FlatButton label="Chapter Guide" primary={true}/>
                                    </a>
                                    <Link to="/start-chapter">
                                      <FlatButton label="Application" primary={true}/>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <Paper id="cover" />
                </div>
            </div>

        );
    }
}