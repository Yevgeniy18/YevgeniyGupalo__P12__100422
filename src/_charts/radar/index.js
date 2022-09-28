import './index.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';

function RadarInfo({ data }) {

	console.log(data)


	return (
		<section className="radar-container">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" height={250} width={250} outerRadius="60%" data={data.data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" tick={{ fill: '#fff', fontSize: 10 }} />
					<PolarRadiusAxis domain={[ 0, 150 ]} style={{ display: 'none' }} />
					<Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default RadarInfo;
