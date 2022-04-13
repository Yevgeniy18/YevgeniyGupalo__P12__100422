import React from 'react';
import { FetchMainData } from '../API/callingService';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';
import Weight from '../components/Charts/Weight';
import { useParams } from 'react-router-dom';
import '../styles/DashBoard.css';

function DashBoard() {
	//RETREVING URL
	const { user } = useParams();

	//GETTING THE DATA FROM API
	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);

	return (
		<div className="greeting">
			<Greeting data={userMainData} />

			{/* MAIN DATA & CHARTS */}
			<div className="data-container">
				<div className="data-activity">
					<Weight />
				</div>

				{/* SIDE PANNEL PERFORMANCE DATA */}
				<Counter data={userMainData} />
			</div>
		</div>
	);
}

export default DashBoard;
