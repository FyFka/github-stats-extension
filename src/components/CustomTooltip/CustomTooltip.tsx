import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import * as S from "./CustomTooltip.styles";

interface ICustomToolTipProps extends TooltipProps<ValueType, NameType> {}

const CustomTooltip = ({ active, payload, label }: ICustomToolTipProps) => {
  if (active && payload && payload.length) {
    return (
      <S.Box>
        <S.Label>{label}</S.Label>
        <S.Total>total stars: {payload[0].value}</S.Total>
      </S.Box>
    );
  }

  return null;
};

export default CustomTooltip;
