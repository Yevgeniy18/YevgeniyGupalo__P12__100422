import React from 'react';
import { FetchMainData, FetcUserActivity, FetchUserPerformance, FetchUserAverageSessions } from '../_API-Service/index';
import Greeting from '../_components/greeting/index';
import Counter from '../_components/counter/index';
import Weight from '../_charts/weight-calories/index';
import AreaInfo from '../_charts/area/index';
import Radarinfo from '../_charts/radar/index';
import ScoreInfo from '../_charts/score/index';
import Error404 from '../_components/errors/url-error/index';
import { useParams } from 'react-router-dom';
import './index.css';

function DashBoard() {
	/* Getting the user id from the url,
	 * the id will be then used in the urls below to fetch the needed data
	 */
	const { user } = useParams();

	/* Defining and assigning data */

	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);
	const userActivity = FetcUserActivity(`http://localhost:3000/user/${user}/activity`);
	const userPerformance = FetchUserPerformance(`http://localhost:3000/user/${user}/performance`);
	const userAverageSession = FetchUserAverageSessions(`http://localhost:3000/user/${user}/average-sessions`);

	/* Checking if error does exist  */
	let dataUser = userMainData.error && userActivity.error && userPerformance.error && userAverageSession.error;

	return (
		<section className="dashboard-main-wrapper">
			{/* If the data fetching fails, an arror is triggere and displays the error components */}

			{dataUser ? (
				<Error404 />
			) : (
				<div className="dashboard-grraph-container">
					{/* if everything works fine, the  styled dashboard gets displayed */}
					<Greeting data={userMainData} />

					<div className="graph-section-main">
						<div className="graph-section-left">
							<div className="graphs-upper">
								<div className="info-pannel">
									<h4>Activité quotidienne</h4>

									<ul className="weight-list">
										<li>
											<span className="weight" />
											<p>Poids(kg)</p>
										</li>
										<li>
											<span className="calories" />
											<p>Calories brûlées (kCal)</p>
										</li>
									</ul>
								</div>
								{/* Main bar chart component */}
								<Weight data={userActivity} />
							</div>
							<div className="graphs-lower">
								<AreaInfo data={userAverageSession} />
								<Radarinfo data={userPerformance} />
								<ScoreInfo data={userMainData} />
							</div>
						</div>
						<div className="graph-section-right">
							{/* Right side pannel component displaying some stats */}
							<Counter data={userMainData} />
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default DashBoard;
