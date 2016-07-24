import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
export default class Home extends React.Component {
    render() {
    		var subscribeTextStyle = {
    			fontWeight: 200
    		}
        return (
        		<div id="home-wrapper" className="content-wrapper">
        			<section id="section-splash">

            	</section>
            	<section id="section-what-we-do">
            		<h1 id="what-we-do-header" className="section-header">What We Do</h1>
            		<div className="row">
            			<div className="col-md-3 what-we-do-panel">
            				<img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
            				<h3>Chapters</h3>
            				<p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
            			</div>
            			<div className="col-md-3 what-we-do-panel">
            				<img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
            				<h3>Events</h3>
            				<p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
            			</div>
            			<div className="col-md-3 what-we-do-panel">
            				<img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
            				<h3>Mentors</h3>
            				<p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
            			</div>
            			<div className="col-md-3 what-we-do-panel">
            				<img src="https://support.files.wordpress.com/2009/07/pigeony.jpg?w=688"/>
            				<h3>Resources</h3>
            				<p>Bacon ipsum dolor amet beef ribs jowl pig short ribs drumstick boudin. Rump pancetta sirloin flank meatloaf spare ribs, shankle leberkas sausage andouille.</p>
            			</div>
            		</div>
            	</section>
            	<div id="subscribe-banner">
            		<div className="container">
            			<div className="row">
		    						<TextField 
		    							id="email-field"
		    							fullWidth={true}
		    							inputStyle={{color: 'white'}}
		    							underlineFocusStyle={{borderColor: 'white'}}
		    							hintText="you@example.com"
		    							className="col-md-8"
		    						/>
		    						<FlatButton
		    							label="Subscribe for Updates"
		    							className="col-md-4"
		    							primary={true}
		    							backgroundColor="#ffffff"
		    							hoverColor="#dddddd"
		    						/>
	    						</div>
    						</div>
    					</div>
            	<section id="section-partners">
            		<h1 id="partners-header" className="section-header">Partners</h1>
            		<div className="row">
            			<div className="col-md-4 col-xs-12 img-wrapper">
            				<img src="https://lh6.googleusercontent.com/wA4GFlCner9YTlZIKBigAAYBDHUodJa93F3nzPuo1FJCjt1s7Oo1-gMyj_qefpUjsPGwfw"/>
            			</div>
            			<div className="col-md-4 col-xs-12 img-wrapper">
            				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/1000px-Hewlett_Packard_Enterprise_logo.svg.png"/>
            			</div>
            			<div className="col-md-4 col-xs-12 img-wrapper">
            				// find image with blue text
            				<img src="https://cdn.makeschool.com/assets/main/logo-40c556abff7b50c3d7d09d6a7323ec05.svg"/>
            			</div>
            		</div>
            	</section>
            </div>
        );
    }
}