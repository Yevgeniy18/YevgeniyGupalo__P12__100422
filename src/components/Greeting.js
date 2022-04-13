import React from 'react';
import '../styles/Greeting.css';

function Greeting({ data }) {
	// GETTING USER NAME
	let userName = data.mainData.firstName;

	return (
		<div className="greeting">
			<div className="greeting-container">
				<h1 style={{ fontSize: '48px' }}>Bonjour</h1>
				<h1 style={{ marginLeft: '1rem', fontSize: '48px' }} className="userName">
					{userName}
				</h1>
			</div>
			<h4 style={{ marginTop: '2rem', fontSize: '18px' }}>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h4>
		</div>
	);
}

export default Greeting;
