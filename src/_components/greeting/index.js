import React from 'react';
import './index.css';
function Greeting({ data }) {

	
	/**
	 * Retrieves user name from the API or from mock data
	 * @returns HTML layout with dynmaic value
	 */
	const handleDisplay = () => {
		let firstName 

		if(data?.name){
			firstName = data.name
			return <h1 style={{ marginLeft: '1rem', fontSize: '48px' }} className="userName">
			{firstName}
		</h1>
		}
		 else if(data?.userInfos){
			firstName = data.userInfos.firstName
			return 	<h1 style={{ marginLeft: '1rem', fontSize: '48px' }} className="userName">
			{firstName}
		</h1>
		 }


	}

	/*** Getting the name and using the dynamic data into html */
	return (
		<div className="greeting">
			<div className="greeting-container">
				<h1 style={{ fontSize: '48px' }}>Bonjour</h1>
				{handleDisplay()}
			</div>
			<h4 style={{ marginTop: '2rem', fontSize: '18px' }}>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h4>
		</div>
	);
}

export default Greeting;
