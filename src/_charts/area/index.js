import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './index.css';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		console.log(payload)
		return (
		
			<div className="area">
				<p>{`${payload[0].value}`} min</p>
			</div>
		);
	}

	return null;
};

function AreaInfo({ data }) {
	return (
		<section className="area-container">
			<div className="area-title-container">
				<h2>Durée moyenne des sessions</h2>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart width={100} height={100} data={data.data}>
					<XAxis
						dataKey="day"
						tickMargin={5}
						axisLine={false}
						padding={{ left: -10, top: 10, bottom: 0, right: -10 }}
						tickLine={false}
						tick={{ stroke: 'white', strokeWidth: 1, opacity: '0.5', fontSize: 12 }}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Line type="monotone" dot={false} dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
				</LineChart>
			</ResponsiveContainer>
		</section>
	);
}

export default AreaInfo;
