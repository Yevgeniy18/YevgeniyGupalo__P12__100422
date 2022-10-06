import { Navigate, useRoutes } from 'react-router-dom';
import DashBoard from '../_dashboard/index';
import NotFound from '../_components/errors/user-error/index';

export const RoutesData = () => {
	let element = useRoutes([
		/* When the application loads, it has to navigate directly to the user detail dahsboard containing charts
		/*	If the url is faulty, the apps navigates to the not found page/component
		 */
		{
			path: '/',
			element: <Navigate to="/dashboard/12" replace={true} />
		},

		{ path: '/dashboard/:user', element: <DashBoard /> },
		{ path: '*', element: <NotFound /> }
	]);

	return element;
};
