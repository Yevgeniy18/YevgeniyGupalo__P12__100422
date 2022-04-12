import { Navigate, useRoutes } from 'react-router-dom';
import DashBoard from '../sections/DashBoard';
import NotFound from '../sections/NotFound';

export const RoutesData = () => {
	// DEFINING ROUTES

	let element = useRoutes([
		{
			path: '/',
			element: <Navigate to="/dashboard/12" replace={true} />
		},

		{ path: '/dashboard/:user', element: <DashBoard /> },
		{ path: '*', element: <NotFound /> }
	]);

	return <div>{element}</div>;
};
