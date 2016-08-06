import React from 'react';
import Paper from 'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';

export default class Mentors extends React.Component {
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
            <div className="page-wrapper mentors-wrapper">
           		  <div style={{ height: '5vh' }} />
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Team</h1> 
                        <p>Meet the people behind SecondGen!</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}