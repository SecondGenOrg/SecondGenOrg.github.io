import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div class='wrapper'>
                <div class='nav'>
                    
                </div>
                {this.props.children}
            </div>
        );
    }
}