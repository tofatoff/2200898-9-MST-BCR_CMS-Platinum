import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import moment from "moment/moment";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 0, right: 30, left: 30, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={(day) => moment(day.day, "YYYY/MM/DD").format("DD")}
          label={{
            value: "Date",
            position: "bottom",
          }}
        />
        <YAxis>
          <Label position="left" angle={-90} style={{ textAnchor: "middle" }}>
            Amount of Cars Rented
          </Label>
        </YAxis>
        <Tooltip />
        <Bar dataKey="orderCount" fill="#586B90" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Chart;
