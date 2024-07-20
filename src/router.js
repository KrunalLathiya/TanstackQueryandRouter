import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import App from './App';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

// Create a root route
const rootRoute = createRootRoute({
    component: App,
});

// Create routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const postsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'posts',
    component: Posts,
});

const postDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'posts/$id',
    component: PostDetails,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
    homeRoute,
    postsRoute,
    postDetailsRoute,
]);

// Create the router
const router = createRouter({ routeTree });

export default router;
