import context from './context';
import Layout from './components/Layout.jsx';
import NotFound from './components/NotFound.jsx';

// Inialize modules, returning a route object.
export default function loadModules(base, ...modules) {
    // Run initialization functions for modules.
    modules.forEach(m => m.initialize && m.initialize(context));

    // Get list of routes, using default exports on modules.
    const routes = modules.map(m => m.routes);

    // Flatten array of arrays to single dimension.
    const childRoutes = [].concat(
        ...routes, {
            path: '*',
            component: NotFound,
        }
    );

    // Construct and return root for router.
    return {
        path: '/',
        component: Layout,
        getIndexRoute(location, callback) {
            callback(null, { component: base });
        },
        childRoutes,
    };
}
