import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import { Link } from 'react-router';
export default class AboutUs extends React.Component {
    constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.blue500
          }
      };
      this.state = { styles };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper" id="about-us-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>About Us</h1> 
                        <p>Learn more about SecondGen.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <Paper zDepth={3} id="inner-content-wrapper">
                        <h2>What is SecondGen?</h2>
                        <p> SecondGen is an entrepreneurial organization for artists, programmers, film-makers, musicians,  journalists, and business-minded youth. It are a resource for students to learn how to develop their hobbies and talents into business opportunities and careers. Through SecondGen’s 120 chapters worldwide, mentorship program, chapter resources, and events, students are able to develop an understanding of new and familiar industries and technologies and simultaneously hone their entrepreneurial skills.
                        </p>
                        <h2>What does SecondGen at your school look like?</h2>
                        <p> Each club meets bi-weekly for a two hour session. The structure varies club to club, but most meetings involve activities, a speaker, sharing of current projects, and finally work and collaboration time on projects for members. SecondGen Chapters & Individuals use our curriculum, events, network, competitions, and mentorship to learn new things, while they pursue their own project/business idea throughout the year. 
                        </p>
                        <img id="about-img" src="/img/team/team.jpeg" />
                        <h2>Who are our members?</h2>
                        <div className="row">
                            <div className="col-md-2 center-align col-sm-3" style={{padding: '1vw'}}>
                              <div style={{fontSize: '1.1em', paddingBottom: 5, fontWeight: 400}}>Filmmakers</div>
                              <i className="fa fa-4x fa-video-camera"></i>
                            </div>
                            <div className="col-md-2 center-align col-sm-3" style={{padding: '1vw'}}>
                              <div style={{fontSize: '1.1em', paddingBottom: 5, fontWeight: 400}}>Musicians</div>
                              <i className="fa fa-4x fa-music"></i>
                            </div>
                            <div className="col-md-2 center-align col-sm-3" style={{padding: '1vw'}}>
                              <div style={{fontSize: '1.1em', paddingBottom: 5, fontWeight: 400}}>Artists</div>
                              <i className="fa fa-4x fa-paint-brush"></i>
                            </div>
                            <div className="col-md-2 center-align col-sm-3" style={{padding: '1vw'}}>
                              <div style={{fontSize: '1.1em', paddingBottom: 5, fontWeight: 400}}>Programmers</div>
                              <i className="fa fa-4x fa-desktop"></i>
                            </div>
                            <div className="col-md-2 center-align col-sm-3" style={{padding: '1vw'}}>
                              <div style={{fontSize: '1.1em', paddingBottom: 5, fontWeight: 400}}>Entrepreneurs</div>
                              <i className="fa fa-4x fa-rocket"></i>
                            </div>
                        </div>
                        <h2>Why do students love SecondGen partnered Chapters?</h2>
                        <p>SecondGen is an organization created and managed by students just like you. Whether you know what you're doing or not, SecondGen is the way to go. We believe that students of all backgrounds should have an opportunity to do what they love and turn that passioin from a hobby into a career or even into a business venture. With our programs you’ll foster new friends, gain opportunities, and grow as a person! 
                        </p><p>Want to expand SecondGen to your school? Check out our <Link to="/start-chapter">Start A Club Application</Link>, or if you already have a club, check out our <Link to="/partner">Partner Application</Link>.</p>

                    </Paper>
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}