import React from 'react';
import Paper from 'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';

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
      this.state = { styles, errorMessage, buttonDisabled };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper contests-wrapper">
           		  <div style={{ height: '5vh' }} />
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Contests</h1> 
                        <p>Coming Summer 2017.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}