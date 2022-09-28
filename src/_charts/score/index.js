import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './index.css';
function ScoreInfo({ data }) {


	return (
		<section className="score-container">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={400} height={400}>
					<Pie
						// activeIndex={this.state.activeIndex}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={80}
						fill="red"
						dataKey="score"
					/>
				</PieChart>
			</ResponsiveContainer>
		</section>
	);
}

export default ScoreInfo;
