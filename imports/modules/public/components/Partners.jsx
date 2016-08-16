import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
export default class Partners extends React.Component {
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
            <div className="page-wrapper" id="partners-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Partners</h1> 
                        <p>Text text text text text text text text.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                		
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}