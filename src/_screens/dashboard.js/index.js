import React from 'react';
import {
	FetchMainData,
	FetcUserActivity,
	FetchUserPerformance,
	FetchUserAverageSessions
} from '../../_API-Service/index';
import Greeting from '../../_components/greeting/index';
import Counter from '../../_components/counter/index';
import Weight from '../../_charts/weight-calories/index';
import AreaInfo from '../../_charts/area/index';
import Radarinfo from '../../_charts/radar/index';
import ScoreInfo from '../../_charts/score/index';
import Error404 from '../../_components/errors/url-error';
import data from '../../_mocked_data/data.json';
import './index.css';

function DashBoard({ user }) {
	/**
	 * 
	 * @param {*} id 
	 * @returns injected html
	 */
	const handleAPIData = (id) => {
		const userMainData = FetchMainData(`http://localhost:3000/user/${id}`);
		const userActivity = FetcUserActivity(`http://localhost:3000/user/${id}/activity`);
		const userPerformance = FetchUserPerformance(`http://localhost:3000/user/${id}/performance`);
		const userAverageSession = FetchUserAverageSessions(`http://localhost:3000/user/${id}/average-sessions`);
		const serverError =
			userMainData.error || userActivity.error || userPerformance.error || userAverageSession.error;

		return (
			<section className="dashboard-main-wrapper">
				{serverError ? (
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
				{/* If the data fetching fails, an arror is triggere and displays the error components */}
			</section>
		);
	};

	/**
	 * 
	 * @param {*} id 
	 * @returns injected html
	 */
	const handleMockedData = (id) => {
		const matchedUser = data.find((elt) => elt.id === parseInt(id));

		return (
			<section className="dashboard-main-wrapper">
				<div className="dashboard-grraph-container">
					<Greeting data={matchedUser} />

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

								<Weight data={matchedUser} />
							</div>
							<div className="graphs-lower">
								<AreaInfo data={matchedUser} />
								<Radarinfo data={matchedUser} />
								<ScoreInfo data={matchedUser} />
							</div>
						</div>
						<div className="graph-section-right">
							<Counter data={matchedUser} />
						</div>
					</div>
				</div>
			</section>
		);
	};

	/**
	 * 
	 * @param {*} data 
	 * @returns handleAPIData function if data (mocked data) is false
	 * If not
	 * @returns {handleMockedData} which is used to work with the mock data from json file
	 */

	const init = (data) => {
		if (!data) {
			return handleAPIData(user);
		}

		return handleMockedData(user);
	};

	/**
	 * In order to test the mock data, set the data value to false 
	 */
	return <section>{init(data)};</section>;
}

export default DashBoard;
