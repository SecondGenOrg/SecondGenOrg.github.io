import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
            <div id="home-wrapper" className="content-wrapper">
                <section id="section-splash">
                </section>
                <section id="section-what-we-do">
                <h1 id="what-we-do-header" className="section-header">What We Do</h1>
                    <div className="row">
                        <div className="col-md-3 what-we-do-panel">
                            <img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
                            <h3>Chapters</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </div>
                        <div className="col-md-3 what-we-do-panel">
                            <img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
                            <h3>Events</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </div>
                        <div className="col-md-3 what-we-do-panel">
                            <img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
                            <h3>Mentors</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </div>
                        <div className="col-md-3 what-we-do-panel">
                            <img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
                            <h3>Resources</h3>
                            <p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
                        </div>
                    </div>
                </section>
                <div id="subscribe-banner">
                    <div className="container">
                        <div className="row">
                            <TextField 
                                id="email-field"
                                fullWidth={true}
                                inputStyle={{color: 'white'}}
                                underlineFocusStyle={{borderColor: 'white'}}
                                hintText="you@example.com"
                                className="col-md-8"
                            />
                            <FlatButton
                                label="Subscribe for Updates"
                                className="col-md-4"
                                primary={true}
                                backgroundColor="#ffffff"
                                hoverColor="#dddddd"
                            />
                        </div>
                    </div>
                </div>
                <section id="section-partners">
                    <h1 id="partners-header" className="section-header">Partners</h1>
                    <div className="row">
                        <div className="col-md-4 col-xs-12 img-wrapper">
                            <img src="img/logos/partners/googleforentrepreneurs.png"/>
                        </div>
                        <div className="col-md-4 col-xs-12 img-wrapper">
                            <img src="img/logos/partners/hpe.png"/>
                        </div>
                        <div className="col-md-4 col-xs-12 img-wrapper">
                            { /* find image with blue text */ }
                            <img src="img/logos/partners/makeschool.png"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}