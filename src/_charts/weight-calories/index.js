import React from 'react';
import './index.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="kg">{`${payload[0].value}`}kg</p>
				<p className="cal">{`${payload[1].value}`}Kcal</p>
			</div>
		);
	}

	return null;
};

function Weight({ data }) {

	return (
		<ResponsiveContainer width="100%" height={200} padding={{ left: 10, right: 10 }}>
			<BarChart
				data={data.data}
				width="90%"
				margin={{ top: 20, right: 0, left: -30, bottom: 10 }}
				padding={{ left: 40, right: 40 }}
			>
				<CartesianGrid vertical={false} />
				<YAxis
					yAxisId="right"
					orientation="right"
					dataKey="kilogram"
					axisLine={false}
					dx={20}
					tickLine={false}
					domain={[ 60, data.maxWeight ]}
				/>
				<YAxis yAxisId="left" orientation="left" dataKey="calories" axisLine={false} tick={false} />
				<XAxis dataKey="day" scale="point" tickLine={false} dy={10} axisLine={false} />
				<Tooltip content={<CustomTooltip />} />
				<Bar yAxisId="right" dataKey="kilogram" fill="#282d30" barSize={7} radius={[ 10, 10, 0, 0 ]} />
				<Bar yAxisId="left" dataKey="calories" fill="#e60000" barSize={7} radius={[ 10, 10, 0, 0 ]} />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default Weight;
