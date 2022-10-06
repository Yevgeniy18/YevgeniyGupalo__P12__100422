import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './index.css';
function ScoreInfo({ data }) {
	const mainData = data.data.scores;

	return (
		<section className="score-container">
			<div className="score-title-container">
				<h2>Score</h2>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" startAngle={140} endAngle={-295} barSize={10} data={mainData}>
					<PolarAngleAxis type="number" domain={[ 0, 100 ]} dataKey={'uv'} angleAxisId={0} tick={false} />
					<RadialBar minAngle={50} background dataKey="uv" angleAxisId={0} data={mainData}/>
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default ScoreInfo;
