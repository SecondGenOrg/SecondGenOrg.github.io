import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import store from './store';
import { browserHistory } from 'react-router';

export default {
    Meteor,
    Accounts,
    store,
    browserHistory,
};
