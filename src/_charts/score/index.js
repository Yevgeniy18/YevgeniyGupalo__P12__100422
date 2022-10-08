import { RadialBarChart, RadialBar, PolarAngleAxis, Label, ResponsiveContainer } from 'recharts';
import './index.css';

function ScoreInfo({ data }) {

	console.log(data)
	const mainData = data.data.scores;

	const percentage = data.data.todayScore;

	return (
		<section className="score-container">
			<div className="score-title-container" />

			<article className="score-area">
				{' '}
				<h2>{percentage}%</h2>
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
