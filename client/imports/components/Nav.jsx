import React from 'react';
import Navbar from './Navbar';
export default class Nav extends React.Component {
    render() {
        return (
            <div className='wrapper' style={{ position: 'relative' }}>
                <Navbar 
                    id="navbar"
                    tabs={[
                        {
                            title: 'About',
                        }, {
                            title: 'Programs',
                        }, {
                            title: 'Resources',
                        }, {
                            title: 'Get Involved'
                        }
                    ]}
                    style={{
                        zIndex: 999999
                    }}
                />
                {this.props.children}
            </div>
        );
    }
}