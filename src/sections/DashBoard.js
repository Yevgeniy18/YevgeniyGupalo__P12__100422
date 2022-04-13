import React from 'react';
import { useParams } from 'react-router-dom';
import { FetchMainData } from '../API/callingService';
import '../styles/DashBoard.css';
import Energy from '../assets/icon/calories.png';
import Protein from "../assets/icon/protein.png"
import Carb from "../assets/icon/carbs.png"
import Lipid from "../assets/icon/fat.png"

const greeting = {
	display: 'flex',
	flexDirection: 'column',
	width: '80%',

	padding: '40px'
};

function DashBoard() {
	const { user } = useParams();

	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);

	// GETTING USER NAME
	let userName = userMainData.mainData.firstName;

	// GETTING ADDITINAL DATA
	let calories = userMainData.keyData.calorieCount;
	let proteins = userMainData.keyData.proteinCount;
	let carbohydrates = userMainData.keyData.carbohydrateCount;
	let lipids = userMainData.keyData.lipidCount;

	return userName ? (
		<div style={greeting}>
			<div className="greeting-container">
			
				<h1 style={{ fontSize: '48px' }}>Bonjour</h1>
				<h1 style={{ marginLeft: '1rem', fontSize: '48px' }} className="userName">
				
					{userName}
				</h1>
			</div>
			<h4 style={{ marginTop: '2rem', fontSize: '18px' }}>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h4>

			<div className="data-container">
				<div className="data-activity" />
				<div className="data-performance">
					<div className="performance-items">
						<div className="performance-icon">
							<img src={Energy} alt="calories" />
						</div>
						<div className="keydata-info">
							<h3 className="info">{calories + 'kCal'}</h3>
							<p>Calories</p>
						</div>
					</div>
					<div className="performance-items">
					<div className="performance-icon">
							<img src={Protein} alt="protein" />
						</div>
						<div className="keydata-info">
							<h3 className="info">{proteins + 'g'}</h3>
							<p>Proteines</p>
						</div>


					</div>
					<div className="performance-items">
					<div className="performance-icon">
							<img src={Carb} alt="calories" />
						</div>
						<div className="keydata-info">
							<h3 className="info">{carbohydrates + 'g'}</h3>
							<p>Glucides</p>
						</div>
					</div>
					<div className="performance-items">

					<div className="performance-icon">
							<img src={Lipid} alt="calories" />
						</div>
						<div className="keydata-info">
							<h3 className="info">{lipids + 'g'}</h3>
							<p>Lipides</p>
						</div>

					</div>
				</div>
			</div>
		</div>
	) : null;
}

export default DashBoard;
