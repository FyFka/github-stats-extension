import { TooltipProps } from "recharts";

import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface ICustomToolTipProps extends TooltipProps<ValueType, NameType> {}

const CustomTooltip = ({ active, payload, label }: ICustomToolTipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="Box" style={{ whiteSpace: "nowrap", padding: "6px" }}>
        <p style={{ marginBottom: "5px" }}>{label}</p>
        <p style={{ margin: "0" }}>total stars: {payload[0].value}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
