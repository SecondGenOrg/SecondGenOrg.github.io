import React from 'react';
import Paper from 'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';

export default class Camps extends React.Component {
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
            <div className="page-wrapper camps-wrapper">
           		  <div style={{ height: '5vh' }} />
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Camps</h1> 
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