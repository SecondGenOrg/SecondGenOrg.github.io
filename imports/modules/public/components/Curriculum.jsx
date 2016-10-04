import React from 'react';
import Paper from 'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';

export default class Curriculum extends React.Component {
		constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.pink500
          }
      };
      this.state = { styles };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper curriculum-wrapper">
                <iframe id="gitbook-frame" src="https://secondgen.gitbooks.io/secondgen-curriculum/content/" seamless="seamless" style={{border: 0,marginTop: '8vh',height: '100%', width: '100%'}} />
                
            </div>
        );
    }
}