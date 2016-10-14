import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import * as Colors from 'material-ui/styles/colors';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Contests extends React.Component {
		constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.green500
          }
      };
      const errorMessage = false;
      const buttonDisabled = false;
      var contests = [
        {
          name: 'Business Plan'
        },
        {
          name: 'Photography'
        },
        {
          name: 'Web & Mobile Development'
        },
        {
          name: 'Hardware Product'
        },
        {
          name: 'Short Film'
        },
        {
          name: 'Digital Art'
        },
        {
          name: 'Startup'
        },
        {
          name: 'Club Event'
        },
        {
          name: 'Distinguished Club'
        }
      ]
      this.state = { styles, errorMessage, buttonDisabled, contests, open: false };
		}
    handleClose() {
      this.setState({open: false})
    }
    handleOpen() {
      this.setState({open: true})
    }
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper" id="contests-wrapper">
           		  <div style={{ height: '5vh' }} />
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Contests</h1> 
                        <p>Coming Soon.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                  <Paper zDepth={3} style={{padding: '5vh', width: window.innerWidth > 600 ? '75%' : '85%', margin: 'auto'}}>
                    <h2>Overview</h2>
                      <p>The SecondGen Competition is a premiere showcasing of the talents, skills, and projects of students from across the nation. This competition recognizes and rewards passion and achievements in fields ranging from mobile development to filmmaking.  There will be two rounds of the competition: local and national. The local competitions will be held in over 8 cities. Members and non members in the area are eligible to compete at these local competitions.  The top local winners from each category are eligible to compete for national awards at the national level under the same guidelines and expectations. </p>
                      <p>Each competition event is geared towards the main fields that SecondGen members are involved in. They include business, photography, mobile development, hardware, film, digital art, traditional art, and startups. These events are guided by specific guidelines and informational sheets that can be found below. Each event has its own unique form of competing.</p>
                      <p>The competitive events are divided into individual, team, and chapter categories. Individual and team events focus on more on developed projects and learned skills. Chapter events on the other hand award SecondGen chapter that have contributed to one or more of these fields for community benefit.</p>
                  </Paper>
                  <br/>
                  <div className="row">
                  {
                    this.state.contests.map(function(contest) {
                      return (
                        <div className="col-xs-12 col-sm-4" key={contest.name} style={{paddingBottom: '3vh'}}>
                          <Card zDepth={2}>
                            <CardTitle 
                              title={contest.name}
                              titleStyle={{fontSize: '2.7vh', width: '100%'}}/>
                            <CardActions>
                              <FlatButton disabled={false} label="Guidelines" primary={true} onClick={this.handleOpen.bind(this)}/>
                              <FlatButton disabled={true} label="Submit" />
                            </CardActions>
                          </Card>
                        </div>
                      )
                    }, this)
                  }
                  </div>
                  <Paper id="cover" zDepth={5}/>
                </div>
                <Dialog
                  actions={[<FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleClose.bind(this)}
                  />]}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose.bind(this)}
                >
                  More information coming November 1st.
                </Dialog>
            </div>
        );
    }
}