import { TChartResponse } from "../../api/charts/TChartResponse";
import { ChartListButton } from "./ChartListButton";

type Props = {
  chartResponses: TChartResponse[];
  onClickChart: (chart: TChartResponse) => void;
};

export const ChartList = ({ chartResponses, onClickChart }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      {chartResponses.map((chart) => (
        <ChartListButton chart={chart} onClick={() => onClickChart(chart)} />
      ))}
    </div>
  );
};
