import React from 'react';
import './index.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Weight({ data }) {

	return (
		<ResponsiveContainer width="100%" height={180}>
			<BarChart data={data.data} height="100%" margin={{ top: 20, right: -15, left: -60, bottom: 0 }}>
				<Tooltip />
				<YAxis
					yAxisId="right"
					orientation="right"
					dataKey="kilogram"
					axisLine={false}
					dx={20}
					domain={[ 60, data.maxWeight ]}
				/>
				<YAxis yAxisId="left" orientation="left" dataKey="calories" axisLine={false} tick={false} />
				<XAxis dataKey="day" scale="point" dy={10} padding={{ left: 15, right: 15 }} />
				<Bar yAxisId="right" dataKey="kilogram" fill="#282d30" barSize={10} radius={[ 10, 10, 0, 0 ]} />
				<Bar yAxisId="left" dataKey="calories" fill="#e60000" barSize={10} radius={[ 10, 10, 0, 0 ]} />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default Weight;
