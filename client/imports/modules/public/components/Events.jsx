import React from 'react';
export default class Events extends React.Component {
    constructor() {
        super();

        const styles = {
        };

        this.state = { styles };
    }

    render() {
        const { styles } = this.state;
        return (
            <div>Events</div>
        );
    }
}