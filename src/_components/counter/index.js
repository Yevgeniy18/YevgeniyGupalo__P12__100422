import React from 'react';
import Energy from '../../assets/icon/calories.png';
import Protein from '../../assets/icon/protein.png';
import Carb from '../../assets/icon/carbs.png';
import Lipid from '../../assets/icon/fat.png';
import "./index.css"


function Counter({ data }) {
	let calories = data.keyData.calorieCount;
	let proteins = data.keyData.proteinCount;
	let carbohydrates = data.keyData.carbohydrateCount;
	let lipids = data.keyData.lipidCount;

	return (
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
	);
}

export default Counter;
