import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { IRepository } from "../../interfaces/IRepository";

interface ILanguagesChartProps {
  reps: IRepository[];
}

const LanguagesChart = ({ reps }: ILanguagesChartProps) => {
  const tobj: { [key: string]: { value: number; language: string } } = {};
  reps.forEach((rep) => {
    if (tobj[rep.language]) {
      tobj[rep.language].value += 1;
    } else if (rep.language) {
      tobj[rep.language] = { value: 1, language: rep.language };
    }
  });
  const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-fg-default");
  const af = Object.values(tobj);
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight="220px">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={af}>
        <PolarGrid />
        <PolarAngleAxis dataKey="language" stroke={strokeColor} />
        <Radar dataKey="value" stroke="#1e70ef" fill="#1f6feb" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default LanguagesChart;
