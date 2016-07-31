import React from 'react';

class Navbar extends React.Component {
    constructor() {
        super();
        const selectedTab = 'About';
        this.state = { selectedTab };
    }
    onPrimaryTabClick(tab) {
        console.log("tab clicked", tab);
        this.setState({
            selectedTab: tab.title
        })
    }
    render() {
        return(
            <div 
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '15vh'
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
                                            this.state.selectedTab == tab.title 
                                              ? 'valign-wrapper active' 
                                              : 'valign-wrapper' 
                                        }
                                        onClick={this.onPrimaryTabClick.bind(this, tab)}
                                        key={tab.title}
                                        style={{
                                            display: 'inline-flex',
                                            height: '100%',
                                            margin: 0,
                                            paddingLeft: 15,
                                            paddingRight: 15
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
                </div>
            </div>
        )
    }
}
export default Navbar;