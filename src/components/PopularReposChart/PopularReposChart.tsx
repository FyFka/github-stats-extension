import { ResponsiveContainer, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { CategoricalChartState } from "recharts/types/chart/generateCategoricalChart";
import { IRepository } from "../../interfaces/IRepository";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

interface IPopularReposChartProps {
  reps: IRepository[];
}

const PopularReposChart = ({ reps }: IPopularReposChartProps) => {
  const handleOpenRepo = (evt: CategoricalChartState) => {
    if (evt?.activePayload) {
      window.open(evt.activePayload[0].payload.html_url, "_blank")?.focus();
    }
  };

  const sorted = reps.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
  const neutralColor = getComputedStyle(document.body).getPropertyValue("--color-fg-default").trim();
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight="220px">
      <BarChart data={sorted} layout="vertical" onClick={handleOpenRepo}>
        <CartesianGrid strokeDasharray="3 3" stroke={neutralColor} />
        <YAxis dataKey="name" interval={0} type="category" fontSize="12px" color={neutralColor} />
        <XAxis type="number" dataKey="stargazers_count" color={neutralColor} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="stargazers_count" fill="#1f6feb" fillOpacity={0.7} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PopularReposChart;
