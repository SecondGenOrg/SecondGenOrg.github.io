import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
export default class Component extends React.Component {
    constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.blue500
          }
      };
      this.items = [
	      	{
		      		question: 'What is SecondGen?',
		      		answer: 'SecondGen is an entrepreneurship club for driven students. We provide various resources for young entrepreneurs including access to experienced mentors and an in-depth curriculum.'
	      	}, {
	      			question: 'What is the age range for SecondGen members?',
	      			answer: 'Members are generally between 14 and 21 years of age, as SecondGen supports both high school and college students. However, there is no hard restriction on member age.'
	      	}, {
	      			question: 'Is there a membership fee?',
	      			answer: 'No. As of Fall 2016, there will be no global membership fee to access SecondGen\'s online resources. However, local or regional chapters may have fees for shirts, venues, or other reasons.'
	      	},
      ];
      this.state = { styles };
		}
    render() {
    		const { styles } = this.state;
        return (
            <div className="page-wrapper" id="faq-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Frequently Asked Questions</h1> 
                        <p>Who, what, where, when, and why.</p>
                    </div>
                </section>
                <div className="content-wrapper">
                		{
                				this.items.map(function(item) {
														return (
																<Card key={item.question} style={{ 
																		maxHeight: '100vh'
																}} zDepth={3}>
																    <CardHeader
																	      title={item.question}
																	      actAsExpander={true}
																	      showExpandableButton={true}
																	      titleStyle={{
																	      		fontSize: '1.7em'
																	      }}
																    />
																    <CardText expandable={true} style={{
																    		fontSize: '1.4em',
																    		fontWeight: 300,
																    		fontFamily: '"Roboto Slab", "Roboto", Helvetica, sans-serif',
																    		animation: '1s openCard',
																    		WebkitAnimation: '1s openCard'
																    }}>
																	      {item.answer}
																    </CardText>
															  </Card>
													  )
                				})
                		}
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}