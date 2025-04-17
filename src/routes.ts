import {index, route, type RouteConfig} from '@react-router/dev/routes';

export default [
	index('./routes/home.tsx'),
	route('test', 'routes/test.tsx'),
	route('test1', 'routes/test1.tsx'),
] satisfies RouteConfig;