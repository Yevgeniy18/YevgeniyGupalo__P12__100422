import './index.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarInfo({ data }) {

	/**
	 * 
	 * @returns Dynamic array according to the data passed to the functional component
	 */
	const handleDisplay = () => {

		let dynamicData
		if(data?.performanceData){

			dynamicData = data.performanceData
			
		} else if(data?.data){

			dynamicData = data.data
		}
			return dynamicData
	}

	return (
		<section className="radar-container">
			<ResponsiveContainer width="100%" height="100%" >
				<RadarChart cx="50%" cy="50%"   outerRadius="50%"  data={handleDisplay()}>
					<PolarGrid gridType='polygon'  radialLines={false} outerRadius={10} />
					<PolarAngleAxis cx={50} cy={50} dataKey="name" axisLine={false} tick={{ fill: '#fff', fontSize: 10 }}  />
					<PolarRadiusAxis domain={[ 0, 150 ]} style={{ display: 'none' }} tick={false} orientation="middle"/>
					<Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default RadarInfo;
