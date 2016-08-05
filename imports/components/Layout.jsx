import React from 'react';
import { Provider } from 'react-redux';
import Nav from './Nav.jsx';
import store from '../store';
import Theme from '../theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import _ from 'lodash';

/**
 * Higher-order component to provide theme and redux provider.
 * @returns A new component that renders the inner component.
 * XXX: Can't use a class here until meteor (or we fork)
 * the static props transform.
 */
export default class Layout extends React.Component {
    getChildContext() {
        return {
            muiTheme: _.merge(getMuiTheme(Theme), Theme),
        };
    }

    render() {
        return (
            <Provider store={store}>
                <Nav>
                    {this.props.children}
                </Nav>
            </Provider>
        );
    }
}

Layout.childContextTypes = {
    muiTheme: React.PropTypes.object,
};
