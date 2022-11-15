import { TChartResponse } from "../../api/charts/TChartResponse";
import { Button } from "../baseParts/Button";
import { ImageAlt } from "../baseParts/images/ImageAlt";
import { Typography } from "../baseParts/Typography";

type Props = {
  chart: TChartResponse;
  onClick: () => void;
};

export const ChartListButton = ({ chart, onClick }: Props) => {
  return (
    <Button variant="default" onClick={onClick}>
      <Typography size="base" weight="bold">
        <>{chart.planName}</>
      </Typography>

      <Typography size="xs">
        <>レンタル開始日: {chart.rentalStartedAt}</>
      </Typography>

      <div className="flex h-[100px] justify-center space-x-2 mt-4">
        {chart.itemImagePaths.map((iamgePath, index) => {
          return <ImageAlt imageSrc={iamgePath} key={index} />;
        })}
      </div>
    </Button>
  );
};
