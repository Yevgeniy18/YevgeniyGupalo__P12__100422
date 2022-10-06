import { Navigate, useRoutes } from 'react-router-dom';
import HomeScren from '../_screens/home-screen.js/index';
import Error404 from '../_components/errors/url-error';

export const RoutesData = () => {
	let element = useRoutes([
		/* When the application loads, it has to navigate directly to the user detail dahsboard containing charts
		/*	If the url is faulty, the apps navigates to the not found page/component
		 */
		{
			path: '/',
			/* When launching the app, the user is redirected to a specific url with a preset id */
			element: <Navigate to="/dashboard/12" replace={true} />
		},

		{
			path: '/dashboard/:user',
			element: <HomeScren />
		},
		/* If the url isnt correct, redirecting to error component */
		{
			path: '*',
			element: <Error404 />
		}
	]);

	return element;
};
