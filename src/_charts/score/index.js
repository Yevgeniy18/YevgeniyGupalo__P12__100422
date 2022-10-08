import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './index.css';

function ScoreInfo({ data }) {
	const mainData = data.data.scores;


	/* Displaying data according to api outcome */
	const dataHandler = () => {
		let percentage;
		if (data.data.todayScore) {
			percentage = data.data.todayScore;

			return <h2>{percentage}%</h2>;
		} else if (data.data.score) {
			percentage = data.data.score;
			return <h2>{percentage}%</h2>;
		} else return;
	};

	return (
		<section className="score-container">
			<div className="score-title-container" />

			<article className="score-area">
				{' '}
				{dataHandler()}
				<p>de votre objectif</p>
			</article>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="60%"
					outerRadius="80%"
					startAngle={140}
					endAngle={-295}
					barSize={10}
					data={mainData}
				>
					<PolarAngleAxis type="number" domain={[ 0, 100 ]} dataKey={'uv'} angleAxisId={0} tick={false} />
					<RadialBar minAngle={50} dataKey="uv" angleAxisId={0} data={mainData} />
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default ScoreInfo;
