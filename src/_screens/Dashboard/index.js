import React from 'react';
import { FetchMainData, FetcUserActivity, FetchUserPerformance } from '../../_api/api-service/index';
import Greeting from '../../_components/greeting/index';
import Counter from '../../_components/counter/index';
import Weight from '../../_charts/weight-calories/index';
import AreaInfo from '../../_charts/area-chart/index';
import Radarinfo from '../../_charts/radar/index';
import ScoreInfo from '../../_charts/score/index';
import Error404 from '../../_components/errors/url-error/index';
import { useParams } from 'react-router-dom';

import './index.css';

function DashBoard() {
	//RETREVING URL
	const { user } = useParams();

	const userMainData = FetchMainData(`http://localhost:3000/user/${user}`);
	const userActivity = FetcUserActivity(`http://localhost:3000/user/${user}/activity`);
	const userPerformance = FetchUserPerformance(`http://localhost:3000/user/${user}/performance`);

	let dataUser = userMainData.error && userActivity.error && userPerformance.error;

	return (
		<section className="dashboard-main-wrapper">
			{dataUser ? (
				<Error404 />
			) : (
				<div className="dashboard-grraph-container">
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

								<Weight data={userActivity} />
							</div>
							<div className="graphs-lower">
								<AreaInfo />
								<Radarinfo data={userPerformance} />
								<ScoreInfo data={userMainData} />
							</div>
						</div>
						<div className="graph-section-right">
							<Counter data={userMainData} />
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default DashBoard;
