Contributing
============

### Style Guides / Spec
Try to follow these as much as possible:
* [Writing A Good Commit Message](http://chris.beams.io/posts/git-commit/)
* [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript)
* [Mantra Spec](https://kadirahq.github.io/mantra/)
* [Airbnb's React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Material UI Docs](http://www.material-ui.com/#/components/app-bar)


### Adding a Module

1. Create a new folder under `client/imports/modules` with the name of your new module.
2. In the new module, make an `index.js` file, as well as `actions/` and `components/` folders.
3. Copy/paste the following into the `index.js` file:
    ```js
    import Component from './components/Component.jsx';
    export { Component as Component };

    export function initialize() {

    }

    export const routes = [{
        path: 'component',
        component: Component,
    }];
    ```
4. Create a file name `Component.jsx` in the `components/` folder, with a basic component:
    ```js
    import React from 'react';

    export default class Component extends React.Component {
        render() {
            return (
                <h1>New component</h1>
            );
        }
    }
    ```
5. Put any logic needed for the app (i.e. async calls, meteor methods, re-routing, etc) in `actions/index.js`. Each function should be exported, like so:
    ```js
    export function goToCreate() {
        browserHistory.push('/create');
    }
    ```

### Adding a Page
1. Create a new file, `COMPONENT_NAME.jsx` under `module_name/components`, replacing `COMPONENT_NAME` with your new component name.
2. Add the basic component shell:
    ```js
    import React from 'react';

    export default class Component extends React.Component {
        render() {
            return (
                <h1>New component</h1>
            );
        }
    }
    ```
3. Import (and export) the component in `module_name/index.js`:

    ```js
    import Component from './components/Component.jsx';
    export { Component as Component };
    ```
4. Add the component to the `routes` object:

    ```js
    export const routes = [{
        ...
    }, {
        path: 'page_route',
        component: Component,
    }, {
        ...
    }];
    ```
5. If needed, add code to the `initialize` function.
6. Your new page should appear at `/page_route`!

### Adding Reducers
1. Create a new file, `client/imports/reducer/example.js`. This is where you'll write your reducers.
2. Export a default function that looks like this:

    ```js
    const exampleReducer = (state = { loading: false }, action) => {
        switch (action.type) {
            case 'YOUR_ACTION':
                return Object.assign({}, state, { foo: action.bar });
            default:
                return state;
        }
    };
    export default exampleReducer;
    ```
3. Import the reducer in the `client/imports/reducers/index.js` file: `import exampleReducer from './example';`
4. Add it to the `combineReducers`:

    ```js
    export default combineReducers({
        ...,
        example: exampleReducer,
    });
    ```