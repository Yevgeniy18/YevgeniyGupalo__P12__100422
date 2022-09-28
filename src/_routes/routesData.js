import { Navigate, useRoutes } from 'react-router-dom';
import DashBoard from '../_screens/Dashboard/index';
import NotFound from '../_components/errors/user-error/index';

export const RoutesData = () => {
	let element = useRoutes([
		{
			path: '/',
			element: <Navigate to="/dashboard/12" replace={true} />
		},

		{ path: '/dashboard/:user', element: <DashBoard /> },
		{ path: '*', element: <NotFound /> }
	]);

	return element;
};
