import { useParams } from 'react-router';
import DashBoard from '../dashboard.js/index';
import URLError from '../../_components/errors/user-error/index';
import './index.css';

export default function Home() {
	const { user } = useParams();

	const avaialbleUsers = [ 12, 18 ];

	const allowedUser = avaialbleUsers.find((id) => id === parseInt(user));

	return <section className="home-main">{allowedUser ? <DashBoard user={user} /> : <URLError />}</section>;
}
