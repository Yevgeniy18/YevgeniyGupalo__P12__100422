import React from 'react';
import '../../styles/Weight.css';

function Weight() {
	return (
		<div className="weight-container">
			<div className="info-pannel">
				<h4>Activité quotidienne</h4>

				<ul className='weight-list'>
					<li> <span className='weight'></span><p>Poids</p></li>
                    <li><span className='calories'></span><p>Calories brûlées (kCal)</p></li>
				</ul>
			</div>
		</div>
	);
}

export default Weight;
