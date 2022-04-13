import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}
,

{
    name: 'Page B', uv: 500, pv: 2200, amt: 2000

},

{
    name: 'Page C', uv: 400, pv: 4400, amt: 4400

},


];

 export const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
)