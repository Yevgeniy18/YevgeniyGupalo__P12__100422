import React from 'react';
import { useParams } from 'react-router-dom';
import { FetchMainData } from '../API/callingService';
import '../styles/DashBoard.css';

const greeting = {
	display: 'flex',
	flexDirection: 'column',
	width: '90%',

	padding: '40px'
};

function DashBoard() {
	const { user } = useParams();

	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);
	let userName = userMainData.mainData.firstName;

	return userName ? (
		<div style={greeting}>
			<div className="greeting-container">
				{' '}
				<h1>Bonjour</h1> <h1 style={{marginLeft: "1rem"}} className="userName"> {userName} </h1>{' '}
			</div>
			<h4>Félicitation ! Vous avez explosé vos objectifs hier 👏</h4>

			<div className="data-container">
				<div className="data-activity" />
				<div className="data-performance">
					<div className='performance-items'></div>
					<div className='performance-items'></div>
					<div className='performance-items'></div>
					<div className='performance-items'></div>
				</div>
			</div>
		</div>
	) : null;
}

export default DashBoard;
