import React from 'react';
import Paper from 'material-ui/Paper';
import Colors from 'material-ui/styles/colors';

export default class Mentors extends React.Component {
		constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.pink500
          }
      };
      const errorMessage = false;
      const buttonDisabled = false;
      this.state = { styles, errorMessage, buttonDisabled };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper mentors-wrapper">
           		  <div style={{ height: '5vh' }} />
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Mentors</h1> 
                        <p>More information coming soon.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}