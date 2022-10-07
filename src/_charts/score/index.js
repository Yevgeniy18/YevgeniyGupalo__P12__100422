import { RadialBarChart, RadialBar, PolarAngleAxis, Label, ResponsiveContainer } from 'recharts';
import './index.css';

const CustomLabel = ({ viewBox, value }) => {
	const { cx, cy } = viewBox;
	return (
		<text
			x={cx}
			y={cy}
			// className="recharts-text recharts-label"
			textAnchor="middle"
			dominantBaseline="central"
			fill="#000"
		>
			Hi
			{/* <tspan fontSize="14">{value2}</tspan> */}
		</text>
	);
};

function ScoreInfo({ data }) {
	const mainData = data.data.scores;
	const percentage = data.data.score;

	return (
		<section className="score-container">
			<div className="score-title-container">
				<h2>Score</h2>
			</div>
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
					<RadialBar minAngle={50} dataKey="uv" angleAxisId={0} data={mainData}>
						<Label position="center" content={<CustomLabel value={percentage} />} />
					</RadialBar>
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default ScoreInfo;
