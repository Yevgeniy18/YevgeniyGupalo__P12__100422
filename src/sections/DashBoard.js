import React from 'react';
import { useParams } from 'react-router-dom';
import { FetchMainData } from '../API/callingService';

function DashBoard() {
	const { user } = useParams();

	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);
	let userName = userMainData.mainData.firstName;

  



	return  (
		<div>
			<h1>Bonjour {userName}  </h1>
		</div>
	) 
}

export default DashBoard;
