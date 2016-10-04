import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="footer">
				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<h3>SecondGen</h3>
						<p>SecondGen is a non-profit organization which promotes entrepreneurship among students.</p>
						<Link to="/about-us" style={{
                width: '50%'
            }}>
                <RaisedButton
                    label="About Us"
                    backgroundColor={'#ffffff'}
                    labelStyle={{
                        color: 'black'
                    }}
                    style={{
                        display: 'block',
                        marginTop: '20px'
                    }}
                />
            </Link>
					</div>
					<div className="col-xs-12 col-sm-3">
						<h3>Get Involved</h3>
						<p>
							<Link to="/start-chapter">
								Start a Chapter
							</Link>
						</p>
						<p>
							<Link to="/partner">
								Partner
							</Link>
						</p>
						<p>
							<Link to="/join-team">
								Join Our Team
							</Link>
						</p>
					</div>
					<div className="col-xs-12 col-sm-3">
						<h3>Connect</h3>
						<p>
							<a target="_blank" href="https://www.facebook.com/SecondGenGlobal">
								Facebook
							</a>
						</p>
						<p>
							<a target="_blank" href="https://twitter.com/SecondGenGlobal">
								Twitter
							</a>
						</p>
						<p>
							<a target="_blank" href="mailto:secondgenco@gmail.com">
								Email
							</a>
						</p>
					</div>
				</div>
				<div id="footer-copyright">
						© 2016 SecondGen, All Rights Reserved
				</div>
			</div>
		);
	}
}

export default Footer;