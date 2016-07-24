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
        				<div className="row">
        					<div id="subscribe-panel" className="panel col-md-3 col-md-offset-1">
        						<h2 style={subscribeTextStyle}>Subscribe for updates.</h2>
        						<TextField 
        							hintText="you@example.com"
        						/>
        						<FlatButton
        							primary={true}
        							label="Subscribe"
        						/>
        					</div>
        				</div>
            	</section>
            	<section id="section-what-we-do">
            		<h1 id="what-we-do-header" className="center-align">What We Do</h1>
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
            </div>
        );
    }
}