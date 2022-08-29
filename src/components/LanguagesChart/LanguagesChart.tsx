import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { IRepository } from "../../interfaces/IRepository";

interface ILanguagesChartProps {
  reps: IRepository[];
}

const LanguagesChart = ({ reps }: ILanguagesChartProps) => {
  const languagesBuffer = reps.reduce<{ [key: string]: number }>((prev, next) => {
    if (next.language) {
      if (prev[next.language]) {
        const prevTotal = prev[next.language] + 1;
        return { ...prev, [next.language]: prevTotal };
      } else {
        return { ...prev, [next.language]: 1 };
      }
    } else {
      return prev;
    }
  }, {});
  const neutralColor = getComputedStyle(document.body).getPropertyValue("--color-fg-default").trim();
  const preparedLanguages = Object.keys(languagesBuffer).map((key) => ({ value: languagesBuffer[key], language: key }));
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight="220px">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={preparedLanguages}>
        <PolarGrid />
        <PolarAngleAxis dataKey="language" stroke={neutralColor} />
        <Radar dataKey="value" stroke="#1e70ef" fill="#1f6feb" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default LanguagesChart;
