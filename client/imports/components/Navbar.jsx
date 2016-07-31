import React from 'react';
import { Link } from 'react-router';
import Paper from  'material-ui/Paper';

class Navbar extends React.Component {
    constructor() {
        super();
        const selectedTab = 'About';
        this.state={}
    }
    onPrimaryTabClick(tab) {
        console.log("tab clicked", tab);
        this.setState({
            selectedTab: tab
        })
    }
    render() {
    		if(!this.state.selectedTab) {
    			this.state.selectedTab = this.props.tabs[0];
    		}
        return(
            <Paper 
            		zDepth={2}
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '12vh',
                    zIndex: 999999
                }}
            >
                <div 
                    id="navbar-primary"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        height: '65%',
                        background: 'white'
                    }}
                >
                		<Link 
                				to="/"
                				id="nav-logo-wrapper"
                				style={{
	                					position: 'absolute',
	                					left: 0,
	                					top: 0, 
	                					bottom: 0,
	                					width: 'auto',
	                					maxHeight: '100%',
	                					padding: 0
                				}}
                		>
                				<img
                						src="/img/logos/SG.png" 
                						style={{
                								maxHeight: '100%'
                						}}
                				/>
                		</Link>
                    <ul 
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            margin: 0
                        }}
                    >
                        {
                            this.props.tabs.map(function(tab) {
                                return (
                                    <li
                                        className={ 
                                            this.state.selectedTab.title == tab.title
                                              ? 'valign-wrapper active' 
                                              : 'valign-wrapper' 
                                        }
                                        onClick={this.onPrimaryTabClick.bind(this, tab)}
                                        key={tab.title}
                                        style={{
                                            display: 'inline-flex',
                                            height: '100%',
                                            margin: 0,
                                            paddingLeft: '1.5vw',
                                            paddingRight: '1.5vw',
                                            cursor: 'pointer',
                                            color: '#505050',
                        										fontWeight: 700
                                        }}
                                    >
                                        <p
                                            className="valign"
                                            style={{
                                                margin: 0
                                            }}
                                        >
                                            {tab.title}
                                        </p>
                                    </li>
                                );
                            }, this)
                        }
                    </ul>
                </div>
                <div 
                    id="navbar-secondary"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: '35%',
                        background: '#eeeeee'
                    }}>
                    <ul 
                        style={{
                        		textAlign: 'center',
                            position: 'relative',
                            width: 'auto',
                            margin: 'auto',
                            height: '100%'
                        }}
                    >
                        {
                            this.state.selectedTab.items.map(function(item) {
                                return (
                                    <li
                                        className='valign-wrapper'
                                        key={item.text}
                                        style={{
                                            display: 'inline-flex',
                                            height: '100%',
                                            margin: 0,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            fontWeight: 400,
                                            cursor: 'pointer',
                                            animation: '0.25s ease fadeIn'
                                        }}
                                    >
                                    		<Link to={item.href} 
                                    			style={{
                                    				textDecoration: 'none'
                                    			}}
                                    		>
		                                        <p
		                                            className="valign"
		                                            style={{
		                                                margin: 0,
		                                                color: '#303030'
		                                            }}
		                                        >
		                                            {item.text}
		                                        </p>
		                                    </Link>
                                    </li>
                                );
                            }, this)
                        }
                    </ul>
                </div>
            </Paper>
        )
    }
}
export default Navbar;