import React from 'react';
import Paper from 'material-ui/Paper';
import Colors from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { browserHistory } from 'react-router';


export default class StartChapter extends React.Component {
		constructor() {
			super();
			const styles = {
          sectionHeader: {
              background: Colors.teal500//'url(http://lorempixel.com/1000/500/nature?id=0'// 'url(img/headers/events.jpg)'
          },
          textFieldStyle: {
          		width: '100%'
          },
          underlineFocusStyle: {
          		borderColor: Colors.teal500
          }, 
          floatingLabelFocusStyle: {
				   	 	color: Colors.teal500
				  },
				  inputWrapperStyle: {
				  		padding: 10
				  }
      };
      const errorMessage = false;
      const buttonDisabled = false;
      this.state = { styles, errorMessage, buttonDisabled };
		}
		handleFormSubmit(evt) {
				evt.preventDefault();
				let firstName = this.refs.first_name_input.input.value;
				let lastName = this.refs.last_name_input.input.value;
				let email = this.refs.email_input.input.value;
				let institution = this.refs.institution_input.input.value;
				let gradYear = this.refs.grad_year_input.input.value;
				let linkedin = this.refs.linkedin_input.input.value;
				let resume = this.refs.resume_input.input.value;
				let facebook = this.refs.facebook_input.input.value;
				let twitter = this.refs.twitter_input.input.value;
				if(firstName == '' || lastName == '' 
						|| email == ''|| institution == '' || gradYear == '') {
						this.setState({ errorMessage: true });
						return;
				}
				this.setState({ errorMessage: false });
				axios({
					url: 'https://formspree.io/secondgenco@gmail.com',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					data: { 
						'First Name': firstName,
						'Last Name': lastName,
						'Email Address': email,
						'School/Organization': institution,
						'Graduation Year': gradYear,
						'LinkedIn': linkedin,
						'Resume URL': resume,
						'Facebook': facebook,
						'Twitter': twitter,
						_subject: 'Start a Chapter Application'
				}
			}).then(function (response) {
			    	alert('We have received your application!');
			    	browserHistory.push('/');
			  }).catch(function (error) {
			    	alert('Submission failed. Please make sure all required fields are filled out correctly.')
			    	console.log('error', error);
			  });
		}
    render() {
    		const { styles } = this.state;
        return (
            <div id="start-chapter-wrapper" className="page-wrapper">
                <section className="header-wrapper valign-wrapper" style={ styles.sectionHeader }> 
                    <div className="header-text valign">
                        <h1>Start a Chapter</h1>
                        <p>Want to start a SecondGen chapter at your school?</p>
                    </div>
                </section>
                <div className="content-wrapper">
                    <Paper zDepth={3} id="form-wrapper">
	                    	<form onSubmit={this.handleFormSubmit.bind(this)}>
	                    			<p>Get started by filling out this form.</p>
	                    			<div className="row">
	                    					<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="first_name_input"
			                    							name="first_name"
			                    							floatingLabelText="First Name *"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
			                    			<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="last_name_input"
			                    							name="last_name"
			                    							floatingLabelText="Last Name *"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
	                    			</div>
	                    			<div className="row">
	                    					<div
	                    							className="col-md-12"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="email_input"
			                    							name="email"
			                    							floatingLabelText="Email Address *"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
			                    	</div>
			                    	<div className="row">
	                    					<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="institution_input"
			                    							name="institution"
			                    							floatingLabelText="School or Organization *"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
			                    			<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="grad_year_input"
			                    							name="grad_year"
			                    							floatingLabelText="Graduation Year *"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
	                    			</div>
	                    			<div className="row">
	                    					<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="linkedin_input"
			                    							name="linkedin"
			                    							floatingLabelText="LinkedIn"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
			                    			<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="resume_input"
			                    							name="resume"
			                    							floatingLabelText="Resume URL"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
	                    			</div>
	                    			<div className="row">
	                    					<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="facebook_input"
			                    							name="facebook"
			                    							floatingLabelText="Facebook"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
			                    			<div
	                    							className="col-md-6"
	                    							style={styles.inputWrapperStyle}
	                    					>
			                    					<TextField 
			                    							ref="twitter_input"
			                    							name="twitter"
			                    							floatingLabelText="Twitter"
			                    							style={styles.textFieldStyle}
			                    							floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			                    							underlineFocusStyle={styles.underlineFocusStyle}
			                    					/>
			                    			</div>
	                    			</div>
	                    			<FlatButton 
	                    					type="submit" 
	                    					label="Submit" 
	                    					backgroundColor={Colors.teal500}
	                    					hoverColor={Colors.teal400}
	                    					disabled={this.state.buttonDisabled}
	                    					labelStyle={{
	                    							color: 'white'
	                    					}}
	                    					style={{
	                    							marginTop: '5vh',
	                    							width: '100%',
	                    							height: '6vh'
	                    					}}
	                    					rippleColor="white"
	                    			/>
	                    			<p style={{
	                    					color: Colors.red500,
	                    					fontSize: '1em',
	                    					opacity: this.state.errorMessage ? 1 : 0,
	                    					transition: 'opacity ease 0.25s'
	                    			}}>
	                    					Please fill out all required fields.
	                    			</p>
	                    	</form>
                    </Paper>
                    <Paper id="cover" zDepth={5}/>
                </div>
            </div>
        );
    }
}