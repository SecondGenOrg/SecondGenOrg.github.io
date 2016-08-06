import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import { Link } from 'react-router';
export default class Home extends React.Component {
    constructor() {
        super();

        const styles = {
            subscribeText: {
                fontWeight: '200',
            },
        };

        this.state = { styles };
    }

    render() {
        const { styles } = this.state;
        return (
            <div id="home-wrapper" className="page-wrapper">
                <section id="section-splash">
                    <div className="valign-wrapper">
                        <div id="splash-content" className="valign" style={{
                            display: 'block'
                        }}>
                            <h1>SecondGen</h1>
                            <h2>We are an entrepreneurship club for <div><span style={{
                                fontWeight: 700
                            }} id="splash-typed" /></div></h2>
                            <Link to="/start-chapter" style={{
                                marginTop: '6vh',
                                display: 'block',
                                minWidth: '30%',
                                maxWidth: '60%',
                                width: 'auto',
                                margin: window.innerHeight > 600 ? 'initial' : 'auto'
                            }}>
                                <RaisedButton
                                    label="Start a Chapter"
                                    backgroundColor={Colors.blue500}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    style={{
                                        display: 'block',
                                        marginTop: '20px'
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="section-what-we-do" className="content-section">
                <h1 id="what-we-do-header" className="section-header">What We Do</h1>
                    <div className="row">
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/club.png"/>
                            </div>
                            <h3>Chapters</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/eaglehacks.png"/>
                            </div>
                            <h3>Events</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/canhacks.jpg"/>
                            </div>
                            <h3>Mentors</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/ted.png"/>
                            </div>
                            <h3>Resources</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </a>
                    </div>
                </section>
                <div id="subscribe-banner">
                    <div className="row" style={{
                        width: '75%',
                        margin: 'auto'
                    }}>
                        <div className="col-md-8 col-xs-12">
                            <TextField
                                id="email-field"
                                fullWidth={true}
                                inputStyle={{color: 'white'}}
                                underlineFocusStyle={{borderColor: 'white'}}
                                hintText="you@example.com"
                            />
                        </div>
                        <FlatButton
                            label="Subscribe for Updates"
                            className="col-md-4 col-xs-12"
                            primary={true}
                            backgroundColor="#ffffff"
                            hoverColor="#dddddd"
                        />
                    </div>
                </div>
                <section id="section-partners" className="content-section">
                    <h1 id="partners-header" className="section-header">Partners</h1>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/googleforentrepreneurs.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/hpe.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/makeschool.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/rogerwilco.png"
                                style={{
                                    width: '75%',
                                    margin: 'auto'
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}