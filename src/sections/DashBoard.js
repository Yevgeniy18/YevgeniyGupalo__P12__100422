import React from 'react';
import { useParams } from 'react-router-dom';
import { FetchMainData } from '../API/callingService';
import '../styles/DashBoard.css';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';
import Weight from '../components/Charts/Weight';
// import { renderLineChart } from '../components/Test';

const greeting = {
	display: 'flex',
	flexDirection: 'column',
	width: '80%',
	padding: '40px'
};

function DashBoard() {
	//RETREVING URL
	const { user } = useParams();

	//GETTING THE DATA FROM API
	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);

	return (
		<div style={greeting}>
			<Greeting data={userMainData} />

			{/* MAIN DATA & CHARTS */}
			<div className="data-container">
				<div className="data-activity">
					<Weight/>
				</div>

				{/* SIDE PANNEL PERFORMANCE DATA */}
				<Counter data={userMainData} />
			</div>
		</div>
	);
}

export default DashBoard;
