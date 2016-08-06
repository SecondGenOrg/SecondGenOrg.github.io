import React from 'react';
import { Link } from 'react-router';
import Paper from  'material-ui/Paper';
import * as Colors from 'material-ui/styles/colors';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                selectedTabIndex: 0
        }
    }
    getNavbarColor() {
        var result = null;
        this.props.tabs.forEach(function(tab) { // do this on route load
                tab.items.forEach(function(item) {
                        if(item.href == window.location.pathname || item.href+'/' == window.location.pathname) {
                                result = tab.color;
                        }
                }, this);
        }, this);
        result = result ? result : Colors.blue800
        return result;
    }
    onPrimaryTabClick(tab, index) {
        console.log("tab clicked", tab);
        this.setState({
            selectedTabIndex: index
        })
    }
    render() {
            // find which tab has href for current route
            var navbarColor = this.getNavbarColor();
        return(
            <Paper 
                    zDepth={2}
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    zIndex: 999999
                }}
            >
                <div 
                    id="navbar-primary"
                    style={{
                        position: 'relative',
                        width: '100vw',
                        margin: 0,
                        padding: 0,
                        minHeight: '8vh',
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
                                        paddingLeft: 10
                                }}
                        >
                                <img
                                        src="/img/logos/SG.png" 
                                        style={{
                                                height: '100%'
                                        }}
                                />
                        </Link>
                    <ul 
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            margin: 0,
                            padding: 0,
                            height: '100%'
                        }}
                    >
                        {
                            this.props.tabs.map(function(tab, index) {
                                return (
                                    <li
                                        className="valign-wrapper"
                                        onClick={this.onPrimaryTabClick.bind(this, tab, index)}
                                        key={tab.title}
                                        style={{
                                            display: 'inline-flex',
                                            height: '100%',
                                            margin: 0,
                                            paddingLeft: '1.3vw',
                                            paddingRight: '1.3vw',
                                            cursor: 'pointer',
                                            fontWeight: 300,
                                            background: this.props.tabs[this.state.selectedTabIndex].title == tab.title
                                              ? navbarColor
                                              : null,
                                            color: this.props.tabs[this.state.selectedTabIndex].title == tab.title
                                              ? '#eeeeee'
                                              : '#505050'
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
                            position: 'relative',
                        width: '100vw',
                        margin: 0,
                        padding: 0,
                        background: navbarColor
                    }}>
                    <ul 
                        style={{
                                textAlign: 'center',
                            position: 'relative',
                            width: 'auto',
                            margin: 'auto',
                            marginTop: 0,
                            marginBottom: 0,
                            padding: 0,
                            transition: 'max-height 1s'
                        }}
                    >
                        {
                            this.props.tabs[this.state.selectedTabIndex].items.map(function(item) {
                                return (
                                    <li
                                        className='valign-wrapper'
                                        key={item.text}
                                        style={{
                                            display: 'inline-flex',
                                            margin: 0,
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontWeight: 300,
                                            cursor: 'pointer',
                                            animation: '0.25s ease fadeIn'
                                        }}
                                    >
                                            <Link to={item.href} 
                                                style={{
                                                    paddingTop: '1vh',
                                                    paddingBottom: '1vh',
                                                    textDecoration: 'none',
                                                    display: 'block',
                                                    height: '100%',
                                                }}
                                            >
                                                <p
                                                    className="valign"
                                                    style={{
                                                        margin: 0,
                                                        color: '#eeeeee'
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