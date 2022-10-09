import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './index.css';

function ScoreInfo({ data }) {

	/**
	 * 
	 * @returns Dynamic array according to the data passed to the functional component
	 */
	const handleDisplay = () => {

		let dynamicArray 
		if(data?.data.scores){
			dynamicArray = data.data.scores
		} else if(data?.scores){
			dynamicArray = data.scores
		}

		return dynamicArray
	}

	handleDisplay()

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

	const handlePercentageDisplay = () => {

	let percentage 

		if(data?.todayScore){
			percentage = data.todayScore
			return <h2>{percentage}%</h2>;
		
		} else if(data?.data){
		  return dataHandler(data.data)
			
		}
	}

	return (
		<section className="score-container">
			<div className="score-title-container" />

			<article className="score-area">
				{' '}
				{handlePercentageDisplay()}
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
					data={handleDisplay()}
				>
					<PolarAngleAxis type="number" domain={[ 0, 100 ]} dataKey={'uv'} angleAxisId={0} tick={false} />
					<RadialBar minAngle={50} dataKey="uv" angleAxisId={0} data={handleDisplay()} />
				</RadialBarChart>
			</ResponsiveContainer>
		</section>
	);
}

export default ScoreInfo;
