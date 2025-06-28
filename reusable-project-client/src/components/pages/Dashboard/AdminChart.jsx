import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ComposedChart, Tooltip, Legend, Area, Line, Scatter } from "recharts";
import useGetChart from "../../hooks/useGetChart";
import LoadingSpinner from "../../shard/LoadingSpinner";
import ErrorPage from "../ErrorPage";
const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const AdminChart = () => {
  const [charts, chartErr, chartLoading] = useGetChart();
  console.log(charts);
  if(chartLoading) return <LoadingSpinner />
  if(chartErr   ) return <ErrorPage />
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
    const pieChartData = charts.map(data =>{
        return {name: data.category, value: data.revenue}
    })
  return (
    <>
      {charts.length <= 0 ? (
        <LoadingSpinner />
      ) : (
        <>
       <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
         <BarChart
          data={charts}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="revenue"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {charts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 6]} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
       </div>
       <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={charts}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="category" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0"  />
          <Scatter dataKey="quantity" fill="red"  />
        </ComposedChart>
      </ResponsiveContainer>
       </div>
       </>
      )}
    </>
  );
};

export default AdminChart;
